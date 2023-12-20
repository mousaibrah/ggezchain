package app // upgrades.go

import (
	"fmt"
	// imports for upgrades version and upgrade handler
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	V2 "github.com/mousaibrah/ggezchain/app/upgrades/v2"
	V3 "github.com/mousaibrah/ggezchain/app/upgrades/v3"
)

func (app *App) setupUpgradeHandlers(configurator module.Configurator) {
	// set up v2 upgrade handler
	app.UpgradeKeeper.SetUpgradeHandler(
		V2.UpgradeName,
		V2.CreateUpgradeHandler(app.mm, app.configurator),
	)
	// set v3
	app.UpgradeKeeper.SetUpgradeHandler(
		V3.UpgradeName,
		app.CreateUpgradeHandler(app.mm, app.configurator),
	)

	// When a planned update height is reached, the old binary will panic
	// writing on disk the height and name of the update that triggered it
	// This will read that value, and execute the preparations for the upgrade.
	upgradeInfo, err := app.UpgradeKeeper.ReadUpgradeInfoFromDisk()

	if err != nil {
		panic(fmt.Errorf("failed to read upgrade info from disk: %w", err))
	}

	if app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {
		return
	}

	var storeUpgrades *storetypes.StoreUpgrades

	switch upgradeInfo.Name {
	// sign the changes you need to do every upgrade coming
	case V2.UpgradeName:
		storeUpgrades = &storetypes.StoreUpgrades{
			Added: []string{"feesplit"},
		}

	}

	if storeUpgrades != nil {
		app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, storeUpgrades))
	}
}
