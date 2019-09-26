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
import * as Mappers from "../models/queueMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a Queue. */
export class Queue {
  private readonly client: StorageClientContext;

  /**
   * Create a Queue.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * creates a new queue under the given account.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueueCreateResponse>
   */
  create(options?: Models.QueueCreateOptionalParams): Promise<Models.QueueCreateResponse>;
  /**
   * @param callback The callback
   */
  create(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  create(options: Models.QueueCreateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  create(options?: Models.QueueCreateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.QueueCreateResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      createOperationSpec,
      callback) as Promise<Models.QueueCreateResponse>;
  }

  /**
   * operation permanently deletes the specified queue
   * @param [options] The optional parameters
   * @returns Promise<Models.QueueDeleteResponse>
   */
  deleteMethod(options?: Models.QueueDeleteMethodOptionalParams): Promise<Models.QueueDeleteResponse>;
  /**
   * @param callback The callback
   */
  deleteMethod(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(options: Models.QueueDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(options?: Models.QueueDeleteMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.QueueDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      deleteMethodOperationSpec,
      callback) as Promise<Models.QueueDeleteResponse>;
  }

  /**
   * Retrieves user-defined metadata and queue properties on the specified queue. Metadata is
   * associated with the queue as name-values pairs.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueueGetPropertiesResponse>
   */
  getProperties(options?: Models.QueueGetPropertiesOptionalParams): Promise<Models.QueueGetPropertiesResponse>;
  /**
   * @param callback The callback
   */
  getProperties(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getProperties(options: Models.QueueGetPropertiesOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getProperties(options?: Models.QueueGetPropertiesOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.QueueGetPropertiesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPropertiesOperationSpec,
      callback) as Promise<Models.QueueGetPropertiesResponse>;
  }

  /**
   * sets user-defined metadata on the specified queue. Metadata is associated with the queue as
   * name-value pairs.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueueSetMetadataResponse>
   */
  setMetadata(options?: Models.QueueSetMetadataOptionalParams): Promise<Models.QueueSetMetadataResponse>;
  /**
   * @param callback The callback
   */
  setMetadata(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setMetadata(options: Models.QueueSetMetadataOptionalParams, callback: msRest.ServiceCallback<void>): void;
  setMetadata(options?: Models.QueueSetMetadataOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.QueueSetMetadataResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setMetadataOperationSpec,
      callback) as Promise<Models.QueueSetMetadataResponse>;
  }

  /**
   * returns details about any stored access policies specified on the queue that may be used with
   * Shared Access Signatures.
   * @param [options] The optional parameters
   * @returns Promise<Models.QueueGetAccessPolicyResponse>
   */
  getAccessPolicy(options?: Models.QueueGetAccessPolicyOptionalParams): Promise<Models.QueueGetAccessPolicyResponse>;
  /**
   * @param callback The callback
   */
  getAccessPolicy(callback: msRest.ServiceCallback<Models.SignedIdentifier[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAccessPolicy(options: Models.QueueGetAccessPolicyOptionalParams, callback: msRest.ServiceCallback<Models.SignedIdentifier[]>): void;
  getAccessPolicy(options?: Models.QueueGetAccessPolicyOptionalParams | msRest.ServiceCallback<Models.SignedIdentifier[]>, callback?: msRest.ServiceCallback<Models.SignedIdentifier[]>): Promise<Models.QueueGetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getAccessPolicyOperationSpec,
      callback) as Promise<Models.QueueGetAccessPolicyResponse>;
  }

  /**
   * sets stored access policies for the queue that may be used with Shared Access Signatures
   * @param [options] The optional parameters
   * @returns Promise<Models.QueueSetAccessPolicyResponse>
   */
  setAccessPolicy(options?: Models.QueueSetAccessPolicyOptionalParams): Promise<Models.QueueSetAccessPolicyResponse>;
  /**
   * @param callback The callback
   */
  setAccessPolicy(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  setAccessPolicy(options: Models.QueueSetAccessPolicyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  setAccessPolicy(options?: Models.QueueSetAccessPolicyOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.QueueSetAccessPolicyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      setAccessPolicyOperationSpec,
      callback) as Promise<Models.QueueSetAccessPolicyResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers, true);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    201: {
      headersMapper: Mappers.QueueCreateHeaders
    },
    204: {
      headersMapper: Mappers.QueueCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    204: {
      headersMapper: Mappers.QueueDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getPropertiesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp3
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      headersMapper: Mappers.QueueGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const setMetadataOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp3
  ],
  headerParameters: [
    Parameters.metadata,
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    204: {
      headersMapper: Mappers.QueueSetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getAccessPolicyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp4
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  responses: {
    200: {
      bodyMapper: {
        xmlElementName: "SignedIdentifier",
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SignedIdentifier"
            }
          }
        }
      },
      headersMapper: Mappers.QueueGetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const setAccessPolicyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{queueName}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeout,
    Parameters.comp4
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId
  ],
  requestBody: {
    parameterPath: [
      "options",
      "queueAcl"
    ],
    mapper: {
      xmlName: "SignedIdentifiers",
      xmlElementName: "SignedIdentifier",
      serializedName: "queueAcl",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "SignedIdentifier"
          }
        }
      }
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    204: {
      headersMapper: Mappers.QueueSetAccessPolicyHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};
