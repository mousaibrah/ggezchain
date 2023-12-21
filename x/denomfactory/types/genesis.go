package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		DenomIndex:  DenomIndex{NextId: uint64(DefaultIndex)},
		NewCoinList: []NewCoin{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in newCoin
	newCoinIndexMap := make(map[string]struct{})

	for _, elem := range gs.NewCoinList {
		index := string(NewCoinKey(elem.DenomIndex))
		if _, ok := newCoinIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for newCoin")
		}
		newCoinIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
