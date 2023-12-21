package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"

	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

func CmdShowDenomIndex() *cobra.Command {
	cmd := &cobra.Command{
		Use:     "show-denomindex",
		Short:   "shows denomIndex",
		Aliases: []string{"indx"},
		Args:    cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetDenomIndexRequest{}

			res, err := queryClient.DenomIndex(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
