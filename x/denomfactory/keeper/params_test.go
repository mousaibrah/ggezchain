package keeper_test

import (
	"testing"

	testkeeper "github.com/mousaibrah/ggezchain/testutil/keeper"
	"github.com/mousaibrah/ggezchain/x/denomfactory/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.DenomfactoryKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
