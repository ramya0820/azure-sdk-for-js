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
import * as Mappers from "../models/managedDatabaseRestoreDetailsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedDatabaseRestoreDetails. */
export class ManagedDatabaseRestoreDetails {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedDatabaseRestoreDetails.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets managed database restore details.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedDatabaseRestoreDetailsGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedDatabaseRestoreDetailsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, callback: msRest.ServiceCallback<Models.ManagedDatabaseRestoreDetailsResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedDatabaseRestoreDetailsResult>): void;
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedDatabaseRestoreDetailsResult>, callback?: msRest.ServiceCallback<Models.ManagedDatabaseRestoreDetailsResult>): Promise<Models.ManagedDatabaseRestoreDetailsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedDatabaseRestoreDetailsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/restoreDetails/{restoreDetailsName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.restoreDetailsName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedDatabaseRestoreDetailsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
