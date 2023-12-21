package keeper

import (
	"strconv"

	sdk "github.com/cosmos/cosmos-sdk/types"
	bankTypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

func (k msgServer) SetMetaData(denom string) bankTypes.Metadata {
	denomMeta := bankTypes.Metadata{
		Description: "The rewards coin of the " + denom + " Network.",
		DenomUnits: []*bankTypes.DenomUnit{
			{
				Denom:    denom,
				Exponent: 0,
				Aliases:  []string{},
			},
		},
		Base:    denom,
		Display: denom,
		Name:    denom,
		Symbol:  denom,
		URI:     "",
		URIHash: "",
	}
	return denomMeta
}
func (k msgServer) NewCoin(ctx sdk.Context, recevierAddress string, coin string, amount string) {
	amountInt, _ := strconv.ParseInt(amount, 10, 64)

	coins := []sdk.Coin{
		sdk.NewCoin(coin, sdk.NewInt(amountInt)),
	}
	k.bank.MintCoins(ctx, types.ModuleName, coins)
	addr, _ := sdk.AccAddressFromBech32(recevierAddress)
	k.bank.SendCoinsFromModuleToAccount(ctx, types.ModuleName, addr, coins)
}
