package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

// SetDenomIndex set denomIndex in the store
func (k Keeper) SetDenomIndex(ctx sdk.Context, denomIndex types.DenomIndex) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DenomIndexKey))
	b := k.cdc.MustMarshal(&denomIndex)
	store.Set([]byte{0}, b)
}

// GetDenomIndex returns denomIndex
func (k Keeper) GetDenomIndex(ctx sdk.Context) (val types.DenomIndex, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DenomIndexKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDenomIndex removes denomIndex from the store
func (k Keeper) RemoveDenomIndex(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DenomIndexKey))
	store.Delete([]byte{0})
}
