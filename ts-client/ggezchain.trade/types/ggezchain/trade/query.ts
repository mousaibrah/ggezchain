/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StoredTempTrade } from "./stored_temp_trade";
import { StoredTrade } from "./stored_trade";
import { TradeIndex } from "./trade_index";

export const protobufPackage = "ggezchain.trade";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetTradeIndexRequest {
}

export interface QueryGetTradeIndexResponse {
  TradeIndex: TradeIndex | undefined;
}

export interface QueryGetStoredTradeRequest {
  tradeIndex: number;
}

export interface QueryGetStoredTradeResponse {
  storedTrade: StoredTrade | undefined;
}

export interface QueryAllStoredTradeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredTradeResponse {
  storedTrade: StoredTrade[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStoredTempTradeRequest {
  tradeIndex: number;
}

export interface QueryGetStoredTempTradeResponse {
  storedTempTrade: StoredTempTrade | undefined;
}

export interface QueryAllStoredTempTradeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredTempTradeResponse {
  storedTempTrade: StoredTempTrade[];
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

function createBaseQueryGetTradeIndexRequest(): QueryGetTradeIndexRequest {
  return {};
}

export const QueryGetTradeIndexRequest = {
  encode(_: QueryGetTradeIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeIndexRequest();
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

  fromJSON(_: any): QueryGetTradeIndexRequest {
    return {};
  },

  toJSON(_: QueryGetTradeIndexRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTradeIndexRequest>, I>>(_: I): QueryGetTradeIndexRequest {
    const message = createBaseQueryGetTradeIndexRequest();
    return message;
  },
};

function createBaseQueryGetTradeIndexResponse(): QueryGetTradeIndexResponse {
  return { TradeIndex: undefined };
}

export const QueryGetTradeIndexResponse = {
  encode(message: QueryGetTradeIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TradeIndex !== undefined) {
      TradeIndex.encode(message.TradeIndex, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTradeIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTradeIndexResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TradeIndex = TradeIndex.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTradeIndexResponse {
    return { TradeIndex: isSet(object.TradeIndex) ? TradeIndex.fromJSON(object.TradeIndex) : undefined };
  },

  toJSON(message: QueryGetTradeIndexResponse): unknown {
    const obj: any = {};
    message.TradeIndex !== undefined
      && (obj.TradeIndex = message.TradeIndex ? TradeIndex.toJSON(message.TradeIndex) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetTradeIndexResponse>, I>>(object: I): QueryGetTradeIndexResponse {
    const message = createBaseQueryGetTradeIndexResponse();
    message.TradeIndex = (object.TradeIndex !== undefined && object.TradeIndex !== null)
      ? TradeIndex.fromPartial(object.TradeIndex)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStoredTradeRequest(): QueryGetStoredTradeRequest {
  return { tradeIndex: 0 };
}

export const QueryGetStoredTradeRequest = {
  encode(message: QueryGetStoredTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== 0) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredTradeRequest {
    return { tradeIndex: isSet(object.tradeIndex) ? Number(object.tradeIndex) : 0 };
  },

  toJSON(message: QueryGetStoredTradeRequest): unknown {
    const obj: any = {};
    message.tradeIndex !== undefined && (obj.tradeIndex = Math.round(message.tradeIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredTradeRequest>, I>>(object: I): QueryGetStoredTradeRequest {
    const message = createBaseQueryGetStoredTradeRequest();
    message.tradeIndex = object.tradeIndex ?? 0;
    return message;
  },
};

function createBaseQueryGetStoredTradeResponse(): QueryGetStoredTradeResponse {
  return { storedTrade: undefined };
}

export const QueryGetStoredTradeResponse = {
  encode(message: QueryGetStoredTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storedTrade !== undefined) {
      StoredTrade.encode(message.storedTrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTrade = StoredTrade.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredTradeResponse {
    return { storedTrade: isSet(object.storedTrade) ? StoredTrade.fromJSON(object.storedTrade) : undefined };
  },

  toJSON(message: QueryGetStoredTradeResponse): unknown {
    const obj: any = {};
    message.storedTrade !== undefined
      && (obj.storedTrade = message.storedTrade ? StoredTrade.toJSON(message.storedTrade) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredTradeResponse>, I>>(object: I): QueryGetStoredTradeResponse {
    const message = createBaseQueryGetStoredTradeResponse();
    message.storedTrade = (object.storedTrade !== undefined && object.storedTrade !== null)
      ? StoredTrade.fromPartial(object.storedTrade)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredTradeRequest(): QueryAllStoredTradeRequest {
  return { pagination: undefined };
}

export const QueryAllStoredTradeRequest = {
  encode(message: QueryAllStoredTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTradeRequest();
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

  fromJSON(object: any): QueryAllStoredTradeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoredTradeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredTradeRequest>, I>>(object: I): QueryAllStoredTradeRequest {
    const message = createBaseQueryAllStoredTradeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredTradeResponse(): QueryAllStoredTradeResponse {
  return { storedTrade: [], pagination: undefined };
}

export const QueryAllStoredTradeResponse = {
  encode(message: QueryAllStoredTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storedTrade) {
      StoredTrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTrade.push(StoredTrade.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStoredTradeResponse {
    return {
      storedTrade: Array.isArray(object?.storedTrade)
        ? object.storedTrade.map((e: any) => StoredTrade.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoredTradeResponse): unknown {
    const obj: any = {};
    if (message.storedTrade) {
      obj.storedTrade = message.storedTrade.map((e) => e ? StoredTrade.toJSON(e) : undefined);
    } else {
      obj.storedTrade = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredTradeResponse>, I>>(object: I): QueryAllStoredTradeResponse {
    const message = createBaseQueryAllStoredTradeResponse();
    message.storedTrade = object.storedTrade?.map((e) => StoredTrade.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStoredTempTradeRequest(): QueryGetStoredTempTradeRequest {
  return { tradeIndex: 0 };
}

export const QueryGetStoredTempTradeRequest = {
  encode(message: QueryGetStoredTempTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== 0) {
      writer.uint32(8).uint64(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredTempTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTempTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredTempTradeRequest {
    return { tradeIndex: isSet(object.tradeIndex) ? Number(object.tradeIndex) : 0 };
  },

  toJSON(message: QueryGetStoredTempTradeRequest): unknown {
    const obj: any = {};
    message.tradeIndex !== undefined && (obj.tradeIndex = Math.round(message.tradeIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredTempTradeRequest>, I>>(
    object: I,
  ): QueryGetStoredTempTradeRequest {
    const message = createBaseQueryGetStoredTempTradeRequest();
    message.tradeIndex = object.tradeIndex ?? 0;
    return message;
  },
};

function createBaseQueryGetStoredTempTradeResponse(): QueryGetStoredTempTradeResponse {
  return { storedTempTrade: undefined };
}

export const QueryGetStoredTempTradeResponse = {
  encode(message: QueryGetStoredTempTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storedTempTrade !== undefined) {
      StoredTempTrade.encode(message.storedTempTrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredTempTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTempTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTempTrade = StoredTempTrade.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredTempTradeResponse {
    return {
      storedTempTrade: isSet(object.storedTempTrade) ? StoredTempTrade.fromJSON(object.storedTempTrade) : undefined,
    };
  },

  toJSON(message: QueryGetStoredTempTradeResponse): unknown {
    const obj: any = {};
    message.storedTempTrade !== undefined
      && (obj.storedTempTrade = message.storedTempTrade ? StoredTempTrade.toJSON(message.storedTempTrade) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredTempTradeResponse>, I>>(
    object: I,
  ): QueryGetStoredTempTradeResponse {
    const message = createBaseQueryGetStoredTempTradeResponse();
    message.storedTempTrade = (object.storedTempTrade !== undefined && object.storedTempTrade !== null)
      ? StoredTempTrade.fromPartial(object.storedTempTrade)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredTempTradeRequest(): QueryAllStoredTempTradeRequest {
  return { pagination: undefined };
}

export const QueryAllStoredTempTradeRequest = {
  encode(message: QueryAllStoredTempTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredTempTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTempTradeRequest();
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

  fromJSON(object: any): QueryAllStoredTempTradeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoredTempTradeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredTempTradeRequest>, I>>(
    object: I,
  ): QueryAllStoredTempTradeRequest {
    const message = createBaseQueryAllStoredTempTradeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredTempTradeResponse(): QueryAllStoredTempTradeResponse {
  return { storedTempTrade: [], pagination: undefined };
}

export const QueryAllStoredTempTradeResponse = {
  encode(message: QueryAllStoredTempTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storedTempTrade) {
      StoredTempTrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredTempTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTempTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTempTrade.push(StoredTempTrade.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllStoredTempTradeResponse {
    return {
      storedTempTrade: Array.isArray(object?.storedTempTrade)
        ? object.storedTempTrade.map((e: any) => StoredTempTrade.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoredTempTradeResponse): unknown {
    const obj: any = {};
    if (message.storedTempTrade) {
      obj.storedTempTrade = message.storedTempTrade.map((e) => e ? StoredTempTrade.toJSON(e) : undefined);
    } else {
      obj.storedTempTrade = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredTempTradeResponse>, I>>(
    object: I,
  ): QueryAllStoredTempTradeResponse {
    const message = createBaseQueryAllStoredTempTradeResponse();
    message.storedTempTrade = object.storedTempTrade?.map((e) => StoredTempTrade.fromPartial(e)) || [];
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
  /** Queries a TradeIndex by index. */
  TradeIndex(request: QueryGetTradeIndexRequest): Promise<QueryGetTradeIndexResponse>;
  /** Queries a list of StoredTrade items. */
  StoredTrade(request: QueryGetStoredTradeRequest): Promise<QueryGetStoredTradeResponse>;
  StoredTradeAll(request: QueryAllStoredTradeRequest): Promise<QueryAllStoredTradeResponse>;
  /** Queries a list of StoredTempTrade items. */
  StoredTempTrade(request: QueryGetStoredTempTradeRequest): Promise<QueryGetStoredTempTradeResponse>;
  StoredTempTradeAll(request: QueryAllStoredTempTradeRequest): Promise<QueryAllStoredTempTradeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.TradeIndex = this.TradeIndex.bind(this);
    this.StoredTrade = this.StoredTrade.bind(this);
    this.StoredTradeAll = this.StoredTradeAll.bind(this);
    this.StoredTempTrade = this.StoredTempTrade.bind(this);
    this.StoredTempTradeAll = this.StoredTempTradeAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  TradeIndex(request: QueryGetTradeIndexRequest): Promise<QueryGetTradeIndexResponse> {
    const data = QueryGetTradeIndexRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "TradeIndex", data);
    return promise.then((data) => QueryGetTradeIndexResponse.decode(new _m0.Reader(data)));
  }

  StoredTrade(request: QueryGetStoredTradeRequest): Promise<QueryGetStoredTradeResponse> {
    const data = QueryGetStoredTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "StoredTrade", data);
    return promise.then((data) => QueryGetStoredTradeResponse.decode(new _m0.Reader(data)));
  }

  StoredTradeAll(request: QueryAllStoredTradeRequest): Promise<QueryAllStoredTradeResponse> {
    const data = QueryAllStoredTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "StoredTradeAll", data);
    return promise.then((data) => QueryAllStoredTradeResponse.decode(new _m0.Reader(data)));
  }

  StoredTempTrade(request: QueryGetStoredTempTradeRequest): Promise<QueryGetStoredTempTradeResponse> {
    const data = QueryGetStoredTempTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "StoredTempTrade", data);
    return promise.then((data) => QueryGetStoredTempTradeResponse.decode(new _m0.Reader(data)));
  }

  StoredTempTradeAll(request: QueryAllStoredTempTradeRequest): Promise<QueryAllStoredTempTradeResponse> {
    const data = QueryAllStoredTempTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.trade.Query", "StoredTempTradeAll", data);
    return promise.then((data) => QueryAllStoredTempTradeResponse.decode(new _m0.Reader(data)));
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
