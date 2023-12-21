/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ggezchain.denomfactory";

export interface NewCoin {
  denomIndex: string;
  receiverAddress: string;
  amount: string;
}

function createBaseNewCoin(): NewCoin {
  return { denomIndex: "", receiverAddress: "", amount: "" };
}

export const NewCoin = {
  encode(message: NewCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomIndex !== "") {
      writer.uint32(10).string(message.denomIndex);
    }
    if (message.receiverAddress !== "") {
      writer.uint32(18).string(message.receiverAddress);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NewCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNewCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomIndex = reader.string();
          break;
        case 2:
          message.receiverAddress = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NewCoin {
    return {
      denomIndex: isSet(object.denomIndex) ? String(object.denomIndex) : "",
      receiverAddress: isSet(object.receiverAddress) ? String(object.receiverAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: NewCoin): unknown {
    const obj: any = {};
    message.denomIndex !== undefined && (obj.denomIndex = message.denomIndex);
    message.receiverAddress !== undefined && (obj.receiverAddress = message.receiverAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NewCoin>, I>>(object: I): NewCoin {
    const message = createBaseNewCoin();
    message.denomIndex = object.denomIndex ?? "";
    message.receiverAddress = object.receiverAddress ?? "";
    message.amount = object.amount ?? "";
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
