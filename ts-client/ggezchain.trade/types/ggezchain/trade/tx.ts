/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ggezchain.trade";

export interface MsgCreateTrade {
  creator: string;
  tradeType: string;
  coin: string;
  price: string;
  quantity: string;
  receiverAddress: string;
  tradeData: string;
}

export interface MsgCreateTradeResponse {
  tradeIndex: number;
  status: string;
}

export interface MsgProcessTrade {
  creator: string;
  processType: string;
  tradeIndex: number;
}

export interface MsgProcessTradeResponse {
  tradeIndex: number;
  status: string;
  checker: string;
  maker: string;
  tradeData: string;
  createDate: string;
  updateDate: string;
  processDate: string;
}

function createBaseMsgCreateTrade(): MsgCreateTrade {
  return { creator: "", tradeType: "", coin: "", price: "", quantity: "", receiverAddress: "", tradeData: "" };
}

export const MsgCreateTrade = {
  encode(message: MsgCreateTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    if (message.tradeData !== "") {
      writer.uint32(58).string(message.tradeData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
          message.tradeData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tradeType: isSet(object.tradeType) ? String(object.tradeType) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      receiverAddress: isSet(object.receiverAddress) ? String(object.receiverAddress) : "",
      tradeData: isSet(object.tradeData) ? String(object.tradeData) : "",
    };
  },

  toJSON(message: MsgCreateTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tradeType !== undefined && (obj.tradeType = message.tradeType);
    message.coin !== undefined && (obj.coin = message.coin);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.receiverAddress !== undefined && (obj.receiverAddress = message.receiverAddress);
    message.tradeData !== undefined && (obj.tradeData = message.tradeData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTrade>, I>>(object: I): MsgCreateTrade {
    const message = createBaseMsgCreateTrade();
    message.creator = object.creator ?? "";
    message.tradeType = object.tradeType ?? "";
    message.coin = object.coin ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.receiverAddress = object.receiverAddress ?? "";
    message.tradeData = object.tradeData ?? "";
    return message;
  },
};

function createBaseMsgCreateTradeResponse(): MsgCreateTradeResponse {
  return { tradeIndex: 0, status: "" };
}

export const MsgCreateTradeResponse = {
  encode(message: MsgCreateTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== 0) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTradeResponse {
    return {
      tradeIndex: isSet(object.tradeIndex) ? Number(object.tradeIndex) : 0,
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: MsgCreateTradeResponse): unknown {
    const obj: any = {};
    message.tradeIndex !== undefined && (obj.tradeIndex = Math.round(message.tradeIndex));
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTradeResponse>, I>>(object: I): MsgCreateTradeResponse {
    const message = createBaseMsgCreateTradeResponse();
    message.tradeIndex = object.tradeIndex ?? 0;
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseMsgProcessTrade(): MsgProcessTrade {
  return { creator: "", processType: "", tradeIndex: 0 };
}

export const MsgProcessTrade = {
  encode(message: MsgProcessTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.processType !== "") {
      writer.uint32(18).string(message.processType);
    }
    if (message.tradeIndex !== 0) {
      writer.uint32(24).uint64(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProcessTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.processType = reader.string();
          break;
        case 3:
          message.tradeIndex = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgProcessTrade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      processType: isSet(object.processType) ? String(object.processType) : "",
      tradeIndex: isSet(object.tradeIndex) ? Number(object.tradeIndex) : 0,
    };
  },

  toJSON(message: MsgProcessTrade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.processType !== undefined && (obj.processType = message.processType);
    message.tradeIndex !== undefined && (obj.tradeIndex = Math.round(message.tradeIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProcessTrade>, I>>(object: I): MsgProcessTrade {
    const message = createBaseMsgProcessTrade();
    message.creator = object.creator ?? "";
    message.processType = object.processType ?? "";
    message.tradeIndex = object.tradeIndex ?? 0;
    return message;
  },
};

function createBaseMsgProcessTradeResponse(): MsgProcessTradeResponse {
  return {
    tradeIndex: 0,
    status: "",
    checker: "",
    maker: "",
    tradeData: "",
    createDate: "",
    updateDate: "",
    processDate: "",
  };
}

export const MsgProcessTradeResponse = {
  encode(message: MsgProcessTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== 0) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.checker !== "") {
      writer.uint32(26).string(message.checker);
    }
    if (message.maker !== "") {
      writer.uint32(34).string(message.maker);
    }
    if (message.tradeData !== "") {
      writer.uint32(42).string(message.tradeData);
    }
    if (message.createDate !== "") {
      writer.uint32(50).string(message.createDate);
    }
    if (message.updateDate !== "") {
      writer.uint32(58).string(message.updateDate);
    }
    if (message.processDate !== "") {
      writer.uint32(66).string(message.processDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProcessTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProcessTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.checker = reader.string();
          break;
        case 4:
          message.maker = reader.string();
          break;
        case 5:
          message.tradeData = reader.string();
          break;
        case 6:
          message.createDate = reader.string();
          break;
        case 7:
          message.updateDate = reader.string();
          break;
        case 8:
          message.processDate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgProcessTradeResponse {
    return {
      tradeIndex: isSet(object.tradeIndex) ? Number(object.tradeIndex) : 0,
      status: isSet(object.status) ? String(object.status) : "",
      checker: isSet(object.checker) ? String(object.checker) : "",
      maker: isSet(object.maker) ? String(object.maker) : "",
      tradeData: isSet(object.tradeData) ? String(object.tradeData) : "",
      createDate: isSet(object.createDate) ? String(object.createDate) : "",
      updateDate: isSet(object.updateDate) ? String(object.updateDate) : "",
      processDate: isSet(object.processDate) ? String(object.processDate) : "",
    };
  },

  toJSON(message: MsgProcessTradeResponse): unknown {
    const obj: any = {};
    message.tradeIndex !== undefined && (obj.tradeIndex = Math.round(message.tradeIndex));
    message.status !== undefined && (obj.status = message.status);
    message.checker !== undefined && (obj.checker = message.checker);
    message.maker !== undefined && (obj.maker = message.maker);
    message.tradeData !== undefined && (obj.tradeData = message.tradeData);
    message.createDate !== undefined && (obj.createDate = message.createDate);
    message.updateDate !== undefined && (obj.updateDate = message.updateDate);
    message.processDate !== undefined && (obj.processDate = message.processDate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProcessTradeResponse>, I>>(object: I): MsgProcessTradeResponse {
    const message = createBaseMsgProcessTradeResponse();
    message.tradeIndex = object.tradeIndex ?? 0;
    message.status = object.status ?? "";
    message.checker = object.checker ?? "";
    message.maker = object.maker ?? "";
    message.tradeData = object.tradeData ?? "";
    message.createDate = object.createDate ?? "";
    message.updateDate = object.updateDate ?? "";
    message.processDate = object.processDate ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateTrade(request: MsgCreateTrade): Promise<MsgCreateTradeResponse>;
  ProcessTrade(request: MsgProcessTrade): Promise<MsgProcessTradeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateTrade = this.CreateTrade.bind(this);
    this.ProcessTrade = this.ProcessTrade.bind(this);
  }
  CreateTrade(request: MsgCreateTrade): Promise<MsgCreateTradeResponse> {
    const data = MsgCreateTrade.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Msg", "CreateTrade", data);
    return promise.then((data) => MsgCreateTradeResponse.decode(new _m0.Reader(data)));
  }

  ProcessTrade(request: MsgProcessTrade): Promise<MsgProcessTradeResponse> {
    const data = MsgProcessTrade.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Msg", "ProcessTrade", data);
    return promise.then((data) => MsgProcessTradeResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
