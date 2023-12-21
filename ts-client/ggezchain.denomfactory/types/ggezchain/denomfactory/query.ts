/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { DenomIndex } from "./denom_index";
import { NewCoin } from "./new_coin";
import { Params } from "./params";

export const protobufPackage = "ggezchain.denomfactory";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetDenomIndexRequest {
}

export interface QueryGetDenomIndexResponse {
  DenomIndex: DenomIndex | undefined;
}

export interface QueryGetNewCoinRequest {
  denomIndex: string;
}

export interface QueryGetNewCoinResponse {
  newCoin: NewCoin | undefined;
}

export interface QueryAllNewCoinRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNewCoinResponse {
  newCoin: NewCoin[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetDenomIndexRequest(): QueryGetDenomIndexRequest {
  return {};
}

export const QueryGetDenomIndexRequest = {
  encode(_: QueryGetDenomIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomIndexRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetDenomIndexRequest {
    return {};
  },

  toJSON(_: QueryGetDenomIndexRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDenomIndexRequest>, I>>(_: I): QueryGetDenomIndexRequest {
    const message = createBaseQueryGetDenomIndexRequest();
    return message;
  },
};

function createBaseQueryGetDenomIndexResponse(): QueryGetDenomIndexResponse {
  return { DenomIndex: undefined };
}

export const QueryGetDenomIndexResponse = {
  encode(message: QueryGetDenomIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.DenomIndex !== undefined) {
      DenomIndex.encode(message.DenomIndex, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDenomIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDenomIndexResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.DenomIndex = DenomIndex.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDenomIndexResponse {
    return { DenomIndex: isSet(object.DenomIndex) ? DenomIndex.fromJSON(object.DenomIndex) : undefined };
  },

  toJSON(message: QueryGetDenomIndexResponse): unknown {
    const obj: any = {};
    message.DenomIndex !== undefined
      && (obj.DenomIndex = message.DenomIndex ? DenomIndex.toJSON(message.DenomIndex) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDenomIndexResponse>, I>>(object: I): QueryGetDenomIndexResponse {
    const message = createBaseQueryGetDenomIndexResponse();
    message.DenomIndex = (object.DenomIndex !== undefined && object.DenomIndex !== null)
      ? DenomIndex.fromPartial(object.DenomIndex)
      : undefined;
    return message;
  },
};

function createBaseQueryGetNewCoinRequest(): QueryGetNewCoinRequest {
  return { denomIndex: "" };
}

export const QueryGetNewCoinRequest = {
  encode(message: QueryGetNewCoinRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomIndex !== "") {
      writer.uint32(10).string(message.denomIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNewCoinRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNewCoinRequest();
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

  fromJSON(object: any): QueryGetNewCoinRequest {
    return { denomIndex: isSet(object.denomIndex) ? String(object.denomIndex) : "" };
  },

  toJSON(message: QueryGetNewCoinRequest): unknown {
    const obj: any = {};
    message.denomIndex !== undefined && (obj.denomIndex = message.denomIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNewCoinRequest>, I>>(object: I): QueryGetNewCoinRequest {
    const message = createBaseQueryGetNewCoinRequest();
    message.denomIndex = object.denomIndex ?? "";
    return message;
  },
};

function createBaseQueryGetNewCoinResponse(): QueryGetNewCoinResponse {
  return { newCoin: undefined };
}

export const QueryGetNewCoinResponse = {
  encode(message: QueryGetNewCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newCoin !== undefined) {
      NewCoin.encode(message.newCoin, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetNewCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetNewCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newCoin = NewCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNewCoinResponse {
    return { newCoin: isSet(object.newCoin) ? NewCoin.fromJSON(object.newCoin) : undefined };
  },

  toJSON(message: QueryGetNewCoinResponse): unknown {
    const obj: any = {};
    message.newCoin !== undefined && (obj.newCoin = message.newCoin ? NewCoin.toJSON(message.newCoin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetNewCoinResponse>, I>>(object: I): QueryGetNewCoinResponse {
    const message = createBaseQueryGetNewCoinResponse();
    message.newCoin = (object.newCoin !== undefined && object.newCoin !== null)
      ? NewCoin.fromPartial(object.newCoin)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNewCoinRequest(): QueryAllNewCoinRequest {
  return { pagination: undefined };
}

export const QueryAllNewCoinRequest = {
  encode(message: QueryAllNewCoinRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNewCoinRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNewCoinRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNewCoinRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllNewCoinRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllNewCoinRequest>, I>>(object: I): QueryAllNewCoinRequest {
    const message = createBaseQueryAllNewCoinRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNewCoinResponse(): QueryAllNewCoinResponse {
  return { newCoin: [], pagination: undefined };
}

export const QueryAllNewCoinResponse = {
  encode(message: QueryAllNewCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.newCoin) {
      NewCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNewCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNewCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newCoin.push(NewCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNewCoinResponse {
    return {
      newCoin: Array.isArray(object?.newCoin) ? object.newCoin.map((e: any) => NewCoin.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllNewCoinResponse): unknown {
    const obj: any = {};
    if (message.newCoin) {
      obj.newCoin = message.newCoin.map((e) => e ? NewCoin.toJSON(e) : undefined);
    } else {
      obj.newCoin = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllNewCoinResponse>, I>>(object: I): QueryAllNewCoinResponse {
    const message = createBaseQueryAllNewCoinResponse();
    message.newCoin = object.newCoin?.map((e) => NewCoin.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a DenomIndex by index. */
  DenomIndex(request: QueryGetDenomIndexRequest): Promise<QueryGetDenomIndexResponse>;
  /** Queries a list of NewCoin items. */
  NewCoin(request: QueryGetNewCoinRequest): Promise<QueryGetNewCoinResponse>;
  NewCoinAll(request: QueryAllNewCoinRequest): Promise<QueryAllNewCoinResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.DenomIndex = this.DenomIndex.bind(this);
    this.NewCoin = this.NewCoin.bind(this);
    this.NewCoinAll = this.NewCoinAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.denomfactory.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  DenomIndex(request: QueryGetDenomIndexRequest): Promise<QueryGetDenomIndexResponse> {
    const data = QueryGetDenomIndexRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.denomfactory.Query", "DenomIndex", data);
    return promise.then((data) => QueryGetDenomIndexResponse.decode(new _m0.Reader(data)));
  }

  NewCoin(request: QueryGetNewCoinRequest): Promise<QueryGetNewCoinResponse> {
    const data = QueryGetNewCoinRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.denomfactory.Query", "NewCoin", data);
    return promise.then((data) => QueryGetNewCoinResponse.decode(new _m0.Reader(data)));
  }

  NewCoinAll(request: QueryAllNewCoinRequest): Promise<QueryAllNewCoinResponse> {
    const data = QueryAllNewCoinRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.denomfactory.Query", "NewCoinAll", data);
    return promise.then((data) => QueryAllNewCoinResponse.decode(new _m0.Reader(data)));
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
