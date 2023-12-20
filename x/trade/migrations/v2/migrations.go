package v2

import (
	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"log"
	"os"
)

// var (
//
//	app app.App
//
// )
func MigrateStore(ctx sdk.Context, storeKey storetypes.StoreKey, cdc codec.BinaryCodec) error {
	store := ctx.KVStore(storeKey)
	LogFileExt("stoooooooooooooooooooore")
	LogFileExt(store)
	err := migrateValuesWithPrefix(store, cdc, ctx)
	if err != nil {
		return err
	}

	return nil
}
func migrateValuesWithPrefix(store sdk.KVStore, cdc codec.BinaryCodec, ctx sdk.Context) error {
	oldStoreIter := store.Iterator(nil, nil)

	for ; oldStoreIter.Valid(); oldStoreIter.Next() {
		oldKey := oldStoreIter.Key()
		LogFileExt("Keeeeeeeeeeeeeeeeeeeeeey")
		LogFileExt(oldKey)
		store.Delete(oldKey) // Delete old key, value
	}

	return nil
}
func LogFileExt(data interface{}) {
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
