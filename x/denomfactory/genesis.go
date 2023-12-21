package denomfactory

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mousaibrah/ggezchain/x/denomfactory/keeper"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set if defined

	k.SetDenomIndex(ctx, genState.DenomIndex)

	// Set all the newCoin
	for _, elem := range genState.NewCoinList {
		k.SetNewCoin(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	// Get all denomIndex
	denomIndex, found := k.GetDenomIndex(ctx)
	if found {
		genesis.DenomIndex = denomIndex
	}
	genesis.NewCoinList = k.GetAllNewCoin(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
