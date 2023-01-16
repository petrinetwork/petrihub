/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface FarmCommunityPoolCreateFarmProposal {
  title?: string;
  description?: string;
  pool_description?: string;
  lpt_denom?: string;
  reward_per_block?: V1Beta1Coin[];
  fund_applied?: V1Beta1Coin[];
  fund_self_bond?: V1Beta1Coin[];
}

export interface FarmFarmPoolEntry {
  id?: string;
  creator?: string;
  description?: string;

  /** @format int64 */
  start_height?: string;

  /** @format int64 */
  end_height?: string;
  editable?: boolean;
  expired?: boolean;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  total_lpt_locked?: V1Beta1Coin;
  total_reward?: V1Beta1Coin[];
  remaining_reward?: V1Beta1Coin[];
  reward_per_block?: V1Beta1Coin[];
}

export interface FarmLockedInfo {
  pool_id?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  locked?: V1Beta1Coin;
  pending_reward?: V1Beta1Coin[];
}

export type FarmMsgAdjustPoolResponse = object;

export type FarmMsgCreatePoolResponse = object;

export type FarmMsgCreatePoolWithCommunityPoolResponse = object;

export type FarmMsgDestroyPoolResponse = object;

export interface FarmMsgHarvestResponse {
  reward?: V1Beta1Coin[];
}

export interface FarmMsgStakeResponse {
  reward?: V1Beta1Coin[];
}

export interface FarmMsgUnstakeResponse {
  reward?: V1Beta1Coin[];
}

export interface FarmParams {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  pool_creation_fee?: V1Beta1Coin;

  /** @format int64 */
  max_reward_categories?: number;
  tax_rate?: string;
}

export interface FarmQueryFarmPoolResponse {
  pool?: FarmFarmPoolEntry;
}

export interface FarmQueryFarmPoolsResponse {
  pools?: FarmFarmPoolEntry[];

  /**
   * message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: V1Beta1PageResponse;
}

export interface FarmQueryFarmerResponse {
  list?: FarmLockedInfo[];

  /** @format int64 */
  height?: string;
}

export interface FarmQueryParamsResponse {
  params?: FarmParams;
}

export interface ProtobufAny {
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest page = 2;
 }
*/
export interface V1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs. count_total
   * is only respected when offset is used. It is ignored when key is set.
   */
  count_total?: boolean;
}

/**
* message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title farm/farm.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryFarmer
   * @request GET:/irismod/farm/farmers/{farmer}
   */
  queryFarmer = (farmer: string, query?: { pool_id?: string }, params: RequestParams = {}) =>
    this.request<FarmQueryFarmerResponse, RpcStatus>({
      path: `/irismod/farm/farmers/${farmer}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @summary Params queries the htlc parameters
   * @request GET:/irismod/farm/params
   */
  queryParams = (params: RequestParams = {}) =>
    this.request<FarmQueryParamsResponse, RpcStatus>({
      path: `/irismod/farm/params`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFarmPool
   * @request GET:/irismod/farm/pool/{id}
   */
  queryFarmPool = (id: string, params: RequestParams = {}) =>
    this.request<FarmQueryFarmPoolResponse, RpcStatus>({
      path: `/irismod/farm/pool/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryFarmPools
   * @request GET:/irismod/farm/pools
   */
  queryFarmPools = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<FarmQueryFarmPoolsResponse, RpcStatus>({
      path: `/irismod/farm/pools`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
