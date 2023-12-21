package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

// SetNewCoin set a specific newCoin in the store from its index
func (k Keeper) SetNewCoin(ctx sdk.Context, newCoin types.NewCoin) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NewCoinKeyPrefix))
	b := k.cdc.MustMarshal(&newCoin)
	store.Set(types.NewCoinKey(
		newCoin.DenomIndex,
	), b)
}

// GetNewCoin returns a newCoin from its index
func (k Keeper) GetNewCoin(
	ctx sdk.Context,
	denomIndex string,

) (val types.NewCoin, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NewCoinKeyPrefix))

	b := store.Get(types.NewCoinKey(
		denomIndex,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNewCoin removes a newCoin from the store
func (k Keeper) RemoveNewCoin(
	ctx sdk.Context,
	denomIndex string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NewCoinKeyPrefix))
	store.Delete(types.NewCoinKey(
		denomIndex,
	))
}

// GetAllNewCoin returns all newCoin
func (k Keeper) GetAllNewCoin(ctx sdk.Context) (list []types.NewCoin) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NewCoinKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.NewCoin
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
