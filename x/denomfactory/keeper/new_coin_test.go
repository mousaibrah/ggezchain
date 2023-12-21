package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/mousaibrah/ggezchain/testutil/keeper"
	"github.com/mousaibrah/ggezchain/testutil/nullify"
	"github.com/mousaibrah/ggezchain/x/denomfactory/keeper"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNNewCoin(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.NewCoin {
	items := make([]types.NewCoin, n)
	for i := range items {
		items[i].DenomIndex = strconv.Itoa(i)

		keeper.SetNewCoin(ctx, items[i])
	}
	return items
}

func TestNewCoinGet(t *testing.T) {
	keeper, ctx := keepertest.DenomfactoryKeeper(t)
	items := createNNewCoin(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetNewCoin(ctx,
			item.DenomIndex,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestNewCoinRemove(t *testing.T) {
	keeper, ctx := keepertest.DenomfactoryKeeper(t)
	items := createNNewCoin(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveNewCoin(ctx,
			item.DenomIndex,
		)
		_, found := keeper.GetNewCoin(ctx,
			item.DenomIndex,
		)
		require.False(t, found)
	}
}

func TestNewCoinGetAll(t *testing.T) {
	keeper, ctx := keepertest.DenomfactoryKeeper(t)
	items := createNNewCoin(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllNewCoin(ctx)),
	)
}
