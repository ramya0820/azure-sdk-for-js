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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/managedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies. */
export class ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a dropped database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicy>): void;
  get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicy>, callback?: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicy>): Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesGetResponse>;
  }

  /**
   * Sets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param parameters The long term retention policy info.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, parameters: Models.ManagedBackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,managedInstanceName,restorableDroppedDatabaseId,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Sets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param parameters The long term retention policy info.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse>
   */
  update(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, parameters: Models.ManagedBackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,managedInstanceName,restorableDroppedDatabaseId,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesUpdateResponse>;
  }

  /**
   * Gets a dropped database's short term retention policy list.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseResponse>
   */
  listByRestorableDroppedDatabase(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param callback The callback
   */
  listByRestorableDroppedDatabase(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRestorableDroppedDatabase(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): void;
  listByRestorableDroppedDatabase(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>, callback?: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        options
      },
      listByRestorableDroppedDatabaseOperationSpec,
      callback) as Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseResponse>;
  }

  /**
   * Sets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param parameters The long term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, parameters: Models.ManagedBackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Sets a database's long term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param parameters The long term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, parameters: Models.ManagedBackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Gets a dropped database's short term retention policy list.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns
   * Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextResponse>
   */
  listByRestorableDroppedDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByRestorableDroppedDatabaseNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByRestorableDroppedDatabaseNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): void;
  listByRestorableDroppedDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>, callback?: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByRestorableDroppedDatabaseNextOperationSpec,
      callback) as Promise<Models.ManagedRestorableDroppedDatabaseBackupShortTermRetentionPoliciesListByRestorableDroppedDatabaseNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.restorableDroppedDatabaseId,
    Parameters.policyName,
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
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByRestorableDroppedDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.restorableDroppedDatabaseId,
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
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.restorableDroppedDatabaseId,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedBackupShortTermRetentionPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.restorableDroppedDatabaseId,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedBackupShortTermRetentionPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByRestorableDroppedDatabaseNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
