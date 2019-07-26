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
import * as Mappers from "../models/permissionsMappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClientContext } from "../authorizationManagementClientContext";

/** Class representing a Permissions. */
export class Permissions {
  private readonly client: AuthorizationManagementClientContext;

  /**
   * Create a Permissions.
   * @param {AuthorizationManagementClientContext} client Reference to the service client.
   */
  constructor(client: AuthorizationManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all permissions the caller has for a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.PermissionsListForResourceGroupResponse>
   */
  listForResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PermissionsListForResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listForResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PermissionGetResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PermissionGetResult>): void;
  listForResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PermissionGetResult>, callback?: msRest.ServiceCallback<Models.PermissionGetResult>): Promise<Models.PermissionsListForResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listForResourceGroupOperationSpec,
      callback) as Promise<Models.PermissionsListForResourceGroupResponse>;
  }

  /**
   * Gets all permissions the caller has for a resource.
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get the permissions for.
   * @param [options] The optional parameters
   * @returns Promise<Models.PermissionsListForResourceResponse>
   */
  listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.PermissionsListForResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get the permissions for.
   * @param callback The callback
   */
  listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, callback: msRest.ServiceCallback<Models.PermissionGetResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get the permissions for.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PermissionGetResult>): void;
  listForResource(resourceGroupName: string, resourceProviderNamespace: string, parentResourcePath: string, resourceType: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PermissionGetResult>, callback?: msRest.ServiceCallback<Models.PermissionGetResult>): Promise<Models.PermissionsListForResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        options
      },
      listForResourceOperationSpec,
      callback) as Promise<Models.PermissionsListForResourceResponse>;
  }

  /**
   * Gets all permissions the caller has for a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PermissionsListForResourceGroupNextResponse>
   */
  listForResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PermissionsListForResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listForResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PermissionGetResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PermissionGetResult>): void;
  listForResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PermissionGetResult>, callback?: msRest.ServiceCallback<Models.PermissionGetResult>): Promise<Models.PermissionsListForResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listForResourceGroupNextOperationSpec,
      callback) as Promise<Models.PermissionsListForResourceGroupNextResponse>;
  }

  /**
   * Gets all permissions the caller has for a resource.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PermissionsListForResourceNextResponse>
   */
  listForResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PermissionsListForResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listForResourceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PermissionGetResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listForResourceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PermissionGetResult>): void;
  listForResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PermissionGetResult>, callback?: msRest.ServiceCallback<Models.PermissionGetResult>): Promise<Models.PermissionsListForResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listForResourceNextOperationSpec,
      callback) as Promise<Models.PermissionsListForResourceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listForResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Authorization/permissions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PermissionGetResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/permissions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PermissionGetResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceGroupNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PermissionGetResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listForResourceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PermissionGetResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
