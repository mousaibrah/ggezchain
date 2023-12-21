package cli_test

import (
	"fmt"
	"testing"

	tmcli "github.com/cometbft/cometbft/libs/cli"
	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/status"

	"github.com/mousaibrah/ggezchain/testutil/network"
	"github.com/mousaibrah/ggezchain/testutil/nullify"
	"github.com/mousaibrah/ggezchain/x/denomfactory/client/cli"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
)

func networkWithDenomIndexObjects(t *testing.T) (*network.Network, types.DenomIndex) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	denomIndex := types.DenomIndex{}
	nullify.Fill(&denomIndex)
	state.DenomIndex = denomIndex
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), state.DenomIndex
}

func TestShowDenomIndex(t *testing.T) {
	net, obj := networkWithDenomIndexObjects(t)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	tests := []struct {
		desc string
		args []string
		err  error
		obj  types.DenomIndex
	}{
		{
			desc: "get",
			args: common,
			obj:  obj,
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			var args []string
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowDenomIndex(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetDenomIndexResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.DenomIndex)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.DenomIndex),
				)
			}
		})
	}
}
