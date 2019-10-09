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
import * as Mappers from "../models/jobTargetGroupsMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a JobTargetGroups. */
export class JobTargetGroups {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a JobTargetGroups.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all target groups in an agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTargetGroupsListByAgentResponse>
   */
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobTargetGroupsListByAgentResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param callback The callback
   */
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, callback: msRest.ServiceCallback<Models.JobTargetGroupListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobTargetGroupListResult>): void;
  listByAgent(resourceGroupName: string, serverName: string, jobAgentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobTargetGroupListResult>, callback?: msRest.ServiceCallback<Models.JobTargetGroupListResult>): Promise<Models.JobTargetGroupsListByAgentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        options
      },
      listByAgentOperationSpec,
      callback) as Promise<Models.JobTargetGroupsListByAgentResponse>;
  }

  /**
   * Gets a target group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTargetGroupsGetResponse>
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobTargetGroupsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, callback: msRest.ServiceCallback<Models.JobTargetGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobTargetGroup>): void;
  get(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobTargetGroup>, callback?: msRest.ServiceCallback<Models.JobTargetGroup>): Promise<Models.JobTargetGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        targetGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobTargetGroupsGetResponse>;
  }

  /**
   * Creates or updates a target group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param parameters The requested state of the target group.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTargetGroupsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, parameters: Models.JobTargetGroup, options?: msRest.RequestOptionsBase): Promise<Models.JobTargetGroupsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param parameters The requested state of the target group.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, parameters: Models.JobTargetGroup, callback: msRest.ServiceCallback<Models.JobTargetGroup>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param parameters The requested state of the target group.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, parameters: Models.JobTargetGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobTargetGroup>): void;
  createOrUpdate(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, parameters: Models.JobTargetGroup, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobTargetGroup>, callback?: msRest.ServiceCallback<Models.JobTargetGroup>): Promise<Models.JobTargetGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        targetGroupName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.JobTargetGroupsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a target group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, serverName: string, jobAgentName: string, targetGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        targetGroupName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets all target groups in an agent.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobTargetGroupsListByAgentNextResponse>
   */
  listByAgentNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.JobTargetGroupsListByAgentNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByAgentNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.JobTargetGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAgentNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobTargetGroupListResult>): void;
  listByAgentNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobTargetGroupListResult>, callback?: msRest.ServiceCallback<Models.JobTargetGroupListResult>): Promise<Models.JobTargetGroupsListByAgentNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByAgentNextOperationSpec,
      callback) as Promise<Models.JobTargetGroupsListByAgentNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByAgentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.targetGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.targetGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.JobTargetGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroup
    },
    201: {
      bodyMapper: Mappers.JobTargetGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.targetGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByAgentNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.JobTargetGroupListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
