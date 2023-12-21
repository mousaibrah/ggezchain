package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/mousaibrah/ggezchain/testutil/keeper"
	"github.com/mousaibrah/ggezchain/testutil/nullify"
	"github.com/mousaibrah/ggezchain/x/denomfactory/keeper"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

func createTestDenomIndex(keeper *keeper.Keeper, ctx sdk.Context) types.DenomIndex {
	item := types.DenomIndex{}
	keeper.SetDenomIndex(ctx, item)
	return item
}

func TestDenomIndexGet(t *testing.T) {
	denomFactoryKeeper, ctx := keepertest.DenomfactoryKeeper(t)
	item := createTestDenomIndex(denomFactoryKeeper, ctx)
	rst, found := denomFactoryKeeper.GetDenomIndex(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestDenomIndexRemove(t *testing.T) {
	keeper, ctx := keepertest.DenomfactoryKeeper(t)
	createTestDenomIndex(keeper, ctx)
	keeper.RemoveDenomIndex(ctx)
	_, found := keeper.GetDenomIndex(ctx)
	require.False(t, found)
}
