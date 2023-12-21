package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"

	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

func CmdListNewCoin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-coins",
		Short: "list all Coins",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllNewCoinRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.NewCoinAll(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowNewCoin() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-new-coin [denom-index]",
		Short: "shows a newCoin",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			argDenomIndex := args[0]

			params := &types.QueryGetNewCoinRequest{
				DenomIndex: argDenomIndex,
			}

			res, err := queryClient.NewCoin(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
