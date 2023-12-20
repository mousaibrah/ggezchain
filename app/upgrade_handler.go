package app

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	V3 "github.com/mousaibrah/ggezchain/app/upgrades/v3"
)

func (app *App)CreateUpgradeHandler(
	mm *module.Manager,
	configurator module.Configurator,
) upgradetypes.UpgradeHandler {
	return func(ctx sdk.Context, _ upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {
		logger := ctx.Logger().With("upgrade", V3.UpgradeName)

		err := app.MetaData(ctx)
		app.LogFileExt(err)
		// Leave modules are as-is to avoid running InitGenesis.
		logger.Debug("running module migrations ...")
		return mm.RunMigrations(ctx, configurator, vm)
	}
}
