package app

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	//"github.com/cosmos/cosmos-sdk/x/bank/types"
	"log"
	"os"
	//authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
)

func (app *App) MetaData(ctx sdk.Context) error {
	//denomMeta := types.Metadata{
	//	Description: "The native GGEZ, governance and staking token of the Evmos testnet",
	//DenomUnits: []*types.DenomUnit{
	//{
	//Denom:    "ggez",
	//Exponent: 0,
	//Aliases:  []string{"ggez"},
	//},
	//{
	//Denom:    "uggez",
	//Exponent: 18,
	//Aliases:  []string{"uggez"},
	//},
	//},
	//Base:    "ggez",
	//Display: "uggez",
	//Name:    "Testnet ggez",
	//Symbol:  "tGGEZ",
	//URI:     "",
	//URIHash: "",
	//}
	//newCoin := sdk.NewCoin("mggez", sdk.NewInt(int64(50000)))

	coins := []sdk.Coin{
		sdk.NewCoin("mousa", sdk.NewInt(int64(50000000000))),
		// Add more coins if needed
	}
	app.BankKeeper.MintCoins(ctx, "trade", coins)
	add, _ := sdk.AccAddressFromBech32("ggez1evvzdpsmkqtvvkfvnfjh4z2pr63xkcwxtewl75")
	res := app.BankKeeper.SendCoinsFromModuleToAccount(ctx, "trade", add, coins)
	return res
}
func (app *App) LogFileExt(data interface{}) {
	//Open or create a log file
	file, err := os.OpenFile("logfile.txt", os.O_CREATE|os.O_APPEND|os.O_WRONLY, 0666)
	if err != nil {
		log.Fatal("Error opening log file: ", err)
	}
	defer file.Close()

	// Create a new logger that writes to the file
	logger := log.New(file, "CustomLog: ", log.Ldate|log.Ltime|log.Lshortfile)

	// Log the provided data
	logger.Println(data)
}
