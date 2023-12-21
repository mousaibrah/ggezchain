/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { StoredTempTrade } from "./stored_temp_trade";
import { StoredTrade } from "./stored_trade";
import { TradeIndex } from "./trade_index";

export const protobufPackage = "ggezchain.trade";

/** GenesisState defines the trade module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  tradeIndex: TradeIndex | undefined;
  storedTradeList: StoredTrade[];
  storedTempTradeList: StoredTempTrade[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, tradeIndex: undefined, storedTradeList: [], storedTempTradeList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.tradeIndex !== undefined) {
      TradeIndex.encode(message.tradeIndex, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.storedTradeList) {
      StoredTrade.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.storedTempTradeList) {
      StoredTempTrade.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tradeIndex = TradeIndex.decode(reader, reader.uint32());
          break;
        case 3:
          message.storedTradeList.push(StoredTrade.decode(reader, reader.uint32()));
          break;
        case 4:
          message.storedTempTradeList.push(StoredTempTrade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      tradeIndex: isSet(object.tradeIndex) ? TradeIndex.fromJSON(object.tradeIndex) : undefined,
      storedTradeList: Array.isArray(object?.storedTradeList)
        ? object.storedTradeList.map((e: any) => StoredTrade.fromJSON(e))
        : [],
      storedTempTradeList: Array.isArray(object?.storedTempTradeList)
        ? object.storedTempTradeList.map((e: any) => StoredTempTrade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.tradeIndex !== undefined
      && (obj.tradeIndex = message.tradeIndex ? TradeIndex.toJSON(message.tradeIndex) : undefined);
    if (message.storedTradeList) {
      obj.storedTradeList = message.storedTradeList.map((e) => e ? StoredTrade.toJSON(e) : undefined);
    } else {
      obj.storedTradeList = [];
    }
    if (message.storedTempTradeList) {
      obj.storedTempTradeList = message.storedTempTradeList.map((e) => e ? StoredTempTrade.toJSON(e) : undefined);
    } else {
      obj.storedTempTradeList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.tradeIndex = (object.tradeIndex !== undefined && object.tradeIndex !== null)
      ? TradeIndex.fromPartial(object.tradeIndex)
      : undefined;
    message.storedTradeList = object.storedTradeList?.map((e) => StoredTrade.fromPartial(e)) || [];
    message.storedTempTradeList = object.storedTempTradeList?.map((e) => StoredTempTrade.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
