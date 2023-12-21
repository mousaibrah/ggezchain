package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/mousaibrah/ggezchain/testutil/keeper"
	"github.com/mousaibrah/ggezchain/testutil/nullify"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestNewCoinQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.DenomfactoryKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNNewCoin(keeper, ctx, 2)
	tests := []struct {
		desc     string
		request  *types.QueryGetNewCoinRequest
		response *types.QueryGetNewCoinResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetNewCoinRequest{
				DenomIndex: msgs[0].DenomIndex,
			},
			response: &types.QueryGetNewCoinResponse{NewCoin: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetNewCoinRequest{
				DenomIndex: msgs[1].DenomIndex,
			},
			response: &types.QueryGetNewCoinResponse{NewCoin: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetNewCoinRequest{
				DenomIndex: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.NewCoin(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestNewCoinQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.DenomfactoryKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNNewCoin(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllNewCoinRequest {
		return &types.QueryAllNewCoinRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.NewCoinAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.NewCoin), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.NewCoin),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.NewCoinAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.NewCoin), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.NewCoin),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.NewCoinAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.NewCoin),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.NewCoinAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
