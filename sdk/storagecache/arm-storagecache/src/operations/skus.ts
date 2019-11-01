/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/skusMappers";
import * as Parameters from "../models/parameters";
import { StorageCacheManagementClientContext } from "../storageCacheManagementClientContext";

/** Class representing a Skus. */
export class Skus {
  private readonly client: StorageCacheManagementClientContext;

  /**
   * Create a Skus.
   * @param {StorageCacheManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageCacheManagementClientContext) {
    this.client = client;
  }

  /**
   * Get the list of StorageCache.Cache SKUs available to this subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.SkusListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.SkusListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceSkusResult>, callback?: msRest.ServiceCallback<Models.ResourceSkusResult>): Promise<Models.SkusListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SkusListResponse>;
  }

  /**
   * Get the list of StorageCache.Cache SKUs available to this subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SkusListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SkusListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceSkusResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResourceSkusResult>, callback?: msRest.ServiceCallback<Models.ResourceSkusResult>): Promise<Models.SkusListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.SkusListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.StorageCache/skus",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
