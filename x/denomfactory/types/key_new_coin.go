package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// NewCoinKeyPrefix is the prefix to retrieve all NewCoin
	NewCoinKeyPrefix = "NewCoin/value/"
)

// NewCoinKey returns the store key to retrieve a NewCoin from the index fields
func NewCoinKey(
	denomIndex string,
) []byte {
	var key []byte

	denomIndexBytes := []byte(denomIndex)
	key = append(key, denomIndexBytes...)
	key = append(key, []byte("/")...)

	return key
}
