package denomfactory_test

import (
	"testing"

	keepertest "github.com/mousaibrah/ggezchain/testutil/keeper"
	"github.com/mousaibrah/ggezchain/testutil/nullify"
	"github.com/mousaibrah/ggezchain/x/denomfactory"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		DenomIndex: types.DenomIndex{
			NextId: 31,
		},
		NewCoinList: []types.NewCoin{
			{
				DenomIndex: "0",
			},
			{
				DenomIndex: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DenomfactoryKeeper(t)
	denomfactory.InitGenesis(ctx, *k, genesisState)
	got := denomfactory.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.DenomIndex, got.DenomIndex)
	require.ElementsMatch(t, genesisState.NewCoinList, got.NewCoinList)
	// this line is used by starport scaffolding # genesis/test/assert
}
