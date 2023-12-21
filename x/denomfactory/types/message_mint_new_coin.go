package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMintNewCoin = "mint_new_coin"

var _ sdk.Msg = &MsgMintNewCoin{}

func NewMsgMintNewCoin(creator string, coin string, amount string, receiverAddress string) *MsgMintNewCoin {
	return &MsgMintNewCoin{
		Creator:         creator,
		Coin:            coin,
		Amount:          amount,
		ReceiverAddress: receiverAddress,
	}
}

func (msg *MsgMintNewCoin) Route() string {
	return RouterKey
}

func (msg *MsgMintNewCoin) Type() string {
	return TypeMsgMintNewCoin
}

func (msg *MsgMintNewCoin) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgMintNewCoin) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMintNewCoin) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
