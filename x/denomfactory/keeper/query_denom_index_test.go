package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/mousaibrah/ggezchain/testutil/keeper"
	"github.com/mousaibrah/ggezchain/testutil/nullify"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

func TestDenomIndexQuery(t *testing.T) {
	keeper, ctx := keepertest.DenomfactoryKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestDenomIndex(keeper, ctx)
	tests := []struct {
		desc     string
		request  *types.QueryGetDenomIndexRequest
		response *types.QueryGetDenomIndexResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetDenomIndexRequest{},
			response: &types.QueryGetDenomIndexResponse{DenomIndex: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.DenomIndex(wctx, tc.request)
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
