package keeper

import (
	"context"

	"github.com/mousaibrah/ggezchain/x/denomfactory/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) MintNewCoin(goCtx context.Context, msg *types.MsgMintNewCoin) (*types.MsgMintNewCoinResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	k.bank.SetDenomMetaData(ctx, k.SetMetaData(msg.Coin))
	 k.NewCoin(ctx, msg.ReceiverAddress, msg.Coin, msg.Amount)

	_ = ctx

	return &types.MsgMintNewCoinResponse{}, nil
}
