/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ggezchain.trade";

export interface StoredTrade {
  tradeIndex: number;
  tradeType: string;
  coin: string;
  price: string;
  quantity: string;
  receiverAddress: string;
  status: string;
  maker: string;
  checker: string;
  createDate: string;
  updateDate: string;
  processDate: string;
  tradeData: string;
  result: string;
}

function createBaseStoredTrade(): StoredTrade {
  return {
    tradeIndex: 0,
    tradeType: "",
    coin: "",
    price: "",
    quantity: "",
    receiverAddress: "",
    status: "",
    maker: "",
    checker: "",
    createDate: "",
    updateDate: "",
    processDate: "",
    tradeData: "",
    result: "",
  };
}

export const StoredTrade = {
  encode(message: StoredTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== 0) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    if (message.tradeType !== "") {
      writer.uint32(18).string(message.tradeType);
    }
    if (message.coin !== "") {
      writer.uint32(26).string(message.coin);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(42).string(message.quantity);
    }
    if (message.receiverAddress !== "") {
      writer.uint32(50).string(message.receiverAddress);
    }
    if (message.status !== "") {
      writer.uint32(58).string(message.status);
    }
    if (message.maker !== "") {
      writer.uint32(66).string(message.maker);
    }
    if (message.checker !== "") {
      writer.uint32(74).string(message.checker);
    }
    if (message.createDate !== "") {
      writer.uint32(82).string(message.createDate);
    }
    if (message.updateDate !== "") {
      writer.uint32(90).string(message.updateDate);
    }
    if (message.processDate !== "") {
      writer.uint32(98).string(message.processDate);
    }
    if (message.tradeData !== "") {
      writer.uint32(106).string(message.tradeData);
    }
    if (message.result !== "") {
      writer.uint32(114).string(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoredTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tradeType = reader.string();
          break;
        case 3:
          message.coin = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        case 5:
          message.quantity = reader.string();
          break;
        case 6:
          message.receiverAddress = reader.string();
          break;
        case 7:
          message.status = reader.string();
          break;
        case 8:
          message.maker = reader.string();
          break;
        case 9:
          message.checker = reader.string();
          break;
        case 10:
          message.createDate = reader.string();
          break;
        case 11:
          message.updateDate = reader.string();
          break;
        case 12:
          message.processDate = reader.string();
          break;
        case 13:
          message.tradeData = reader.string();
          break;
        case 14:
          message.result = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredTrade {
    return {
      tradeIndex: isSet(object.tradeIndex) ? Number(object.tradeIndex) : 0,
      tradeType: isSet(object.tradeType) ? String(object.tradeType) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      receiverAddress: isSet(object.receiverAddress) ? String(object.receiverAddress) : "",
      status: isSet(object.status) ? String(object.status) : "",
      maker: isSet(object.maker) ? String(object.maker) : "",
      checker: isSet(object.checker) ? String(object.checker) : "",
      createDate: isSet(object.createDate) ? String(object.createDate) : "",
      updateDate: isSet(object.updateDate) ? String(object.updateDate) : "",
      processDate: isSet(object.processDate) ? String(object.processDate) : "",
      tradeData: isSet(object.tradeData) ? String(object.tradeData) : "",
      result: isSet(object.result) ? String(object.result) : "",
    };
  },

  toJSON(message: StoredTrade): unknown {
    const obj: any = {};
    message.tradeIndex !== undefined && (obj.tradeIndex = Math.round(message.tradeIndex));
    message.tradeType !== undefined && (obj.tradeType = message.tradeType);
    message.coin !== undefined && (obj.coin = message.coin);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.receiverAddress !== undefined && (obj.receiverAddress = message.receiverAddress);
    message.status !== undefined && (obj.status = message.status);
    message.maker !== undefined && (obj.maker = message.maker);
    message.checker !== undefined && (obj.checker = message.checker);
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.updateDate !== undefined && (obj.updateDate = message.updateDate);
    message.processDate !== undefined && (obj.processDate = message.processDate);
    message.tradeData !== undefined && (obj.tradeData = message.tradeData);
    message.result !== undefined && (obj.result = message.result);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoredTrade>, I>>(object: I): StoredTrade {
    const message = createBaseStoredTrade();
    message.tradeIndex = object.tradeIndex ?? 0;
    message.tradeType = object.tradeType ?? "";
    message.coin = object.coin ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.receiverAddress = object.receiverAddress ?? "";
    message.status = object.status ?? "";
    message.maker = object.maker ?? "";
    message.checker = object.checker ?? "";
    message.createDate = object.createDate ?? "";
    message.updateDate = object.updateDate ?? "";
    message.processDate = object.processDate ?? "";
    message.tradeData = object.tradeData ?? "";
    message.result = object.result ?? "";
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
