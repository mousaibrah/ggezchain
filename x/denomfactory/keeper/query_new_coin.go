package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NewCoinAll(goCtx context.Context, req *types.QueryAllNewCoinRequest) (*types.QueryAllNewCoinResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var newCoins []types.NewCoin
	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	newCoinStore := prefix.NewStore(store, types.KeyPrefix(types.NewCoinKeyPrefix))

	pageRes, err := query.Paginate(newCoinStore, req.Pagination, func(key []byte, value []byte) error {
		var newCoin types.NewCoin
		if err := k.cdc.Unmarshal(value, &newCoin); err != nil {
			return err
		}

		newCoins = append(newCoins, newCoin)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllNewCoinResponse{NewCoin: newCoins, Pagination: pageRes}, nil
}

func (k Keeper) NewCoin(goCtx context.Context, req *types.QueryGetNewCoinRequest) (*types.QueryGetNewCoinResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	val, found := k.GetNewCoin(
		ctx,
		req.DenomIndex,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetNewCoinResponse{NewCoin: val}, nil
}
