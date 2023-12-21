/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ggezchain.denomfactory";

export interface MsgMintNewCoin {
  creator: string;
  coin: string;
  amount: string;
  receiverAddress: string;
}

export interface MsgMintNewCoinResponse {
  denomIndex: string;
}

function createBaseMsgMintNewCoin(): MsgMintNewCoin {
  return { creator: "", coin: "", amount: "", receiverAddress: "" };
}

export const MsgMintNewCoin = {
  encode(message: MsgMintNewCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.receiverAddress !== "") {
      writer.uint32(34).string(message.receiverAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNewCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNewCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.coin = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.receiverAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNewCoin {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      receiverAddress: isSet(object.receiverAddress) ? String(object.receiverAddress) : "",
    };
  },

  toJSON(message: MsgMintNewCoin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.coin !== undefined && (obj.coin = message.coin);
    message.amount !== undefined && (obj.amount = message.amount);
    message.receiverAddress !== undefined && (obj.receiverAddress = message.receiverAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNewCoin>, I>>(object: I): MsgMintNewCoin {
    const message = createBaseMsgMintNewCoin();
    message.creator = object.creator ?? "";
    message.coin = object.coin ?? "";
    message.amount = object.amount ?? "";
    message.receiverAddress = object.receiverAddress ?? "";
    return message;
  },
};

function createBaseMsgMintNewCoinResponse(): MsgMintNewCoinResponse {
  return { denomIndex: "" };
}

export const MsgMintNewCoinResponse = {
  encode(message: MsgMintNewCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomIndex !== "") {
      writer.uint32(10).string(message.denomIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNewCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNewCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNewCoinResponse {
    return { denomIndex: isSet(object.denomIndex) ? String(object.denomIndex) : "" };
  },

  toJSON(message: MsgMintNewCoinResponse): unknown {
    const obj: any = {};
    message.denomIndex !== undefined && (obj.denomIndex = message.denomIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNewCoinResponse>, I>>(object: I): MsgMintNewCoinResponse {
    const message = createBaseMsgMintNewCoinResponse();
    message.denomIndex = object.denomIndex ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  MintNewCoin(request: MsgMintNewCoin): Promise<MsgMintNewCoinResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MintNewCoin = this.MintNewCoin.bind(this);
  }
  MintNewCoin(request: MsgMintNewCoin): Promise<MsgMintNewCoinResponse> {
    const data = MsgMintNewCoin.encode(request).finish();
    const promise = this.rpc.request("ggezchain.denomfactory.Msg", "MintNewCoin", data);
    return promise.then((data) => MsgMintNewCoinResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
