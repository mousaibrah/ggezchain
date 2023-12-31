/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { DenomIndex } from "./denom_index";
import { NewCoin } from "./new_coin";
import { Params } from "./params";

export const protobufPackage = "ggezchain.denomfactory";

/** GenesisState defines the denomfactory module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  denomIndex: DenomIndex | undefined;
  newCoinList: NewCoin[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, denomIndex: undefined, newCoinList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomIndex !== undefined) {
      DenomIndex.encode(message.denomIndex, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.newCoinList) {
      NewCoin.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.denomIndex = DenomIndex.decode(reader, reader.uint32());
          break;
        case 3:
          message.newCoinList.push(NewCoin.decode(reader, reader.uint32()));
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
      denomIndex: isSet(object.denomIndex) ? DenomIndex.fromJSON(object.denomIndex) : undefined,
      newCoinList: Array.isArray(object?.newCoinList) ? object.newCoinList.map((e: any) => NewCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.denomIndex !== undefined
      && (obj.denomIndex = message.denomIndex ? DenomIndex.toJSON(message.denomIndex) : undefined);
    if (message.newCoinList) {
      obj.newCoinList = message.newCoinList.map((e) => e ? NewCoin.toJSON(e) : undefined);
    } else {
      obj.newCoinList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.denomIndex = (object.denomIndex !== undefined && object.denomIndex !== null)
      ? DenomIndex.fromPartial(object.denomIndex)
      : undefined;
    message.newCoinList = object.newCoinList?.map((e) => NewCoin.fromPartial(e)) || [];
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
