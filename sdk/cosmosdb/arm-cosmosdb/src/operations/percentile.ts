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
import * as Mappers from "../models/percentileMappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClientContext } from "../cosmosDBManagementClientContext";

/** Class representing a Percentile. */
export class Percentile {
  private readonly client: CosmosDBManagementClientContext;

  /**
   * Create a Percentile.
   * @param {CosmosDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: CosmosDBManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the metrics determined by the given filter for the given database account. This url is
   * only for PBS and Replication Latency data
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param [options] The optional parameters
   * @returns Promise<Models.PercentileListMetricsResponse>
   */
  listMetrics(resourceGroupName: string, accountName: string, filter: string, options?: msRest.RequestOptionsBase): Promise<Models.PercentileListMetricsResponse>;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, filter: string, callback: msRest.ServiceCallback<Models.PercentileMetricListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure resource group.
   * @param accountName Cosmos DB database account name.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   * parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   * names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The optional parameters
   * @param callback The callback
   */
  listMetrics(resourceGroupName: string, accountName: string, filter: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PercentileMetricListResult>): void;
  listMetrics(resourceGroupName: string, accountName: string, filter: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PercentileMetricListResult>, callback?: msRest.ServiceCallback<Models.PercentileMetricListResult>): Promise<Models.PercentileListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        filter,
        options
      },
      listMetricsOperationSpec,
      callback) as Promise<Models.PercentileListMetricsResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listMetricsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/percentile/metrics",
  urlParameters: [
    Parameters.subscriptionId0,
    Parameters.resourceGroupName,
    Parameters.accountName
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.filter0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PercentileMetricListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
