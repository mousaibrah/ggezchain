package denomfactory

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/mousaibrah/ggezchain/testutil/sample"
	denomfactorysimulation "github.com/mousaibrah/ggezchain/x/denomfactory/simulation"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = denomfactorysimulation.FindAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
	_ = rand.Rand{}
)

const (
	opWeightMsgMintNewCoin = "op_weight_msg_mint_new_coin"
	// TODO: Determine the simulation weight value
	defaultWeightMsgMintNewCoin int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	denomfactoryGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&denomfactoryGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgMintNewCoin int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgMintNewCoin, &weightMsgMintNewCoin, nil,
		func(_ *rand.Rand) {
			weightMsgMintNewCoin = defaultWeightMsgMintNewCoin
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgMintNewCoin,
		denomfactorysimulation.SimulateMsgMintNewCoin(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgMintNewCoin,
			defaultWeightMsgMintNewCoin,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				denomfactorysimulation.SimulateMsgMintNewCoin(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
