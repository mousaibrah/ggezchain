package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdMintNewCoin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "mint-coins [coin] [amount] [receiver-address]",
		Aliases: []string{"mint"},
		Short: "Broadcast message mintNewCoin",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argCoin := args[0]
			argAmount := args[1]
			argReceiverAddress := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgMintNewCoin(
				clientCtx.GetFromAddress().String(),
				argCoin,
				argAmount,
				argReceiverAddress,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
