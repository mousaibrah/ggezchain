/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ggezchain.trade";

export interface StoredTempTrade {
  tradeIndex: number;
  tempTradeIndex: number;
  createDate: string;
}

function createBaseStoredTempTrade(): StoredTempTrade {
  return { tradeIndex: 0, tempTradeIndex: 0, createDate: "" };
}

export const StoredTempTrade = {
  encode(message: StoredTempTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== 0) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    if (message.tempTradeIndex !== 0) {
      writer.uint32(16).uint64(message.tempTradeIndex);
    }
    if (message.createDate !== "") {
      writer.uint32(26).string(message.createDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoredTempTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredTempTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tempTradeIndex = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.createDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredTempTrade {
    return {
      tradeIndex: isSet(object.tradeIndex) ? Number(object.tradeIndex) : 0,
      tempTradeIndex: isSet(object.tempTradeIndex) ? Number(object.tempTradeIndex) : 0,
      createDate: isSet(object.createDate) ? String(object.createDate) : "",
    };
  },

  toJSON(message: StoredTempTrade): unknown {
    const obj: any = {};
    message.tradeIndex !== undefined && (obj.tradeIndex = Math.round(message.tradeIndex));
    message.tempTradeIndex !== undefined && (obj.tempTradeIndex = Math.round(message.tempTradeIndex));
    message.createDate !== undefined && (obj.createDate = message.createDate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoredTempTrade>, I>>(object: I): StoredTempTrade {
    const message = createBaseStoredTempTrade();
    message.tradeIndex = object.tradeIndex ?? 0;
    message.tempTradeIndex = object.tempTradeIndex ?? 0;
    message.createDate = object.createDate ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
