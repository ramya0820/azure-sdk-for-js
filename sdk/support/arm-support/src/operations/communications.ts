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
import * as Mappers from "../models/communicationsMappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSupportContext } from "../microsoftSupportContext";

/** Class representing a Communications. */
export class Communications {
  private readonly client: MicrosoftSupportContext;

  /**
   * Create a Communications.
   * @param {MicrosoftSupportContext} client Reference to the service client.
   */
  constructor(client: MicrosoftSupportContext) {
    this.client = client;
  }

  /**
   * Check the availability of a resource name. This API should be used to check the uniqueness of
   * the name for adding a new communication to the support ticket.
   * @param supportTicketName Support ticket name.
   * @param checkNameAvailabilityInput Input to check.
   * @param [options] The optional parameters
   * @returns Promise<Models.CommunicationsCheckNameAvailabilityResponse>
   */
  checkNameAvailability(supportTicketName: string, checkNameAvailabilityInput: Models.CheckNameAvailabilityInput, options?: msRest.RequestOptionsBase): Promise<Models.CommunicationsCheckNameAvailabilityResponse>;
  /**
   * @param supportTicketName Support ticket name.
   * @param checkNameAvailabilityInput Input to check.
   * @param callback The callback
   */
  checkNameAvailability(supportTicketName: string, checkNameAvailabilityInput: Models.CheckNameAvailabilityInput, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  /**
   * @param supportTicketName Support ticket name.
   * @param checkNameAvailabilityInput Input to check.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(supportTicketName: string, checkNameAvailabilityInput: Models.CheckNameAvailabilityInput, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): void;
  checkNameAvailability(supportTicketName: string, checkNameAvailabilityInput: Models.CheckNameAvailabilityInput, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityOutput>): Promise<Models.CommunicationsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        supportTicketName,
        checkNameAvailabilityInput,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.CommunicationsCheckNameAvailabilityResponse>;
  }

  /**
   * Lists all communications (attachments not included) for a support ticket. <br/></br> You can
   * also filter support ticket communications by _CreatedDate_ or _CommunicationType_ using the
   * $filter parameter. The only type of communication supported today is _Web_. Output will be a
   * paged result with _nextLink_, using which you can retrieve the next set of Communication
   * results. <br/><br/>Support ticket data is available for 12 months after ticket creation. If a
   * ticket was created more than 12 months ago, a request for data might cause an error.
   * @param supportTicketName Support ticket name.
   * @param [options] The optional parameters
   * @returns Promise<Models.CommunicationsListResponse>
   */
  list(supportTicketName: string, options?: Models.CommunicationsListOptionalParams): Promise<Models.CommunicationsListResponse>;
  /**
   * @param supportTicketName Support ticket name.
   * @param callback The callback
   */
  list(supportTicketName: string, callback: msRest.ServiceCallback<Models.CommunicationsListResult>): void;
  /**
   * @param supportTicketName Support ticket name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(supportTicketName: string, options: Models.CommunicationsListOptionalParams, callback: msRest.ServiceCallback<Models.CommunicationsListResult>): void;
  list(supportTicketName: string, options?: Models.CommunicationsListOptionalParams | msRest.ServiceCallback<Models.CommunicationsListResult>, callback?: msRest.ServiceCallback<Models.CommunicationsListResult>): Promise<Models.CommunicationsListResponse> {
    return this.client.sendOperationRequest(
      {
        supportTicketName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.CommunicationsListResponse>;
  }

  /**
   * Returns communication details for a support ticket.
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param [options] The optional parameters
   * @returns Promise<Models.CommunicationsGetResponse>
   */
  get(supportTicketName: string, communicationName: string, options?: msRest.RequestOptionsBase): Promise<Models.CommunicationsGetResponse>;
  /**
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param callback The callback
   */
  get(supportTicketName: string, communicationName: string, callback: msRest.ServiceCallback<Models.CommunicationDetails>): void;
  /**
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(supportTicketName: string, communicationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CommunicationDetails>): void;
  get(supportTicketName: string, communicationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CommunicationDetails>, callback?: msRest.ServiceCallback<Models.CommunicationDetails>): Promise<Models.CommunicationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        supportTicketName,
        communicationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.CommunicationsGetResponse>;
  }

  /**
   * Adds a new customer communication to an Azure support ticket.
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param createCommunicationParameters Communication object.
   * @param [options] The optional parameters
   * @returns Promise<Models.CommunicationsCreateResponse>
   */
  create(supportTicketName: string, communicationName: string, createCommunicationParameters: Models.CommunicationDetails, options?: msRest.RequestOptionsBase): Promise<Models.CommunicationsCreateResponse> {
    return this.beginCreate(supportTicketName,communicationName,createCommunicationParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.CommunicationsCreateResponse>;
  }

  /**
   * Adds a new customer communication to an Azure support ticket.
   * @param supportTicketName Support ticket name.
   * @param communicationName Communication name.
   * @param createCommunicationParameters Communication object.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(supportTicketName: string, communicationName: string, createCommunicationParameters: Models.CommunicationDetails, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        supportTicketName,
        communicationName,
        createCommunicationParameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Lists all communications (attachments not included) for a support ticket. <br/></br> You can
   * also filter support ticket communications by _CreatedDate_ or _CommunicationType_ using the
   * $filter parameter. The only type of communication supported today is _Web_. Output will be a
   * paged result with _nextLink_, using which you can retrieve the next set of Communication
   * results. <br/><br/>Support ticket data is available for 12 months after ticket creation. If a
   * ticket was created more than 12 months ago, a request for data might cause an error.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.CommunicationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.CommunicationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.CommunicationsListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CommunicationsListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CommunicationsListResult>, callback?: msRest.ServiceCallback<Models.CommunicationsListResult>): Promise<Models.CommunicationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.CommunicationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/checkNameAvailability",
  urlParameters: [
    Parameters.supportTicketName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "checkNameAvailabilityInput",
    mapper: {
      ...Mappers.CheckNameAvailabilityInput,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityOutput
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications",
  urlParameters: [
    Parameters.supportTicketName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationsListResult
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}",
  urlParameters: [
    Parameters.supportTicketName,
    Parameters.communicationName,
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
      bodyMapper: Mappers.CommunicationDetails
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}",
  urlParameters: [
    Parameters.supportTicketName,
    Parameters.communicationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "createCommunicationParameters",
    mapper: {
      ...Mappers.CommunicationDetails,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CommunicationDetails
    },
    202: {},
    default: {
      bodyMapper: Mappers.ExceptionResponse
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
      bodyMapper: Mappers.CommunicationsListResult
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  serializer
};
