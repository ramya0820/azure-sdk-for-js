/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/pageBlobMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a PageBlob. */
export class PageBlob {
  private readonly client: StorageClientContext;

  /**
   * Create a PageBlob.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * The Create operation creates a new page blob.
   * @param contentLength The length of the request.
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB.
   * The page blob size must be aligned to a 512-byte boundary.
   * @param [options] The optional parameters
   * @returns Promise<Models.PageBlobCreateResponse>
   */
  create(contentLength: number, blobContentLength: number, options?: Models.PageBlobCreateOptionalParams): Promise<Models.PageBlobCreateResponse>;
  /**
   * @param contentLength The length of the request.
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB.
   * The page blob size must be aligned to a 512-byte boundary.
   * @param callback The callback
   */
  create(contentLength: number, blobContentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param contentLength The length of the request.
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB.
   * The page blob size must be aligned to a 512-byte boundary.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(contentLength: number, blobContentLength: number, options: Models.PageBlobCreateOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  create(contentLength: number, blobContentLength: number, options?: Models.PageBlobCreateOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.PageBlobCreateResponse> {
    return this.client.sendOperationRequest(
      {
        contentLength,
        blobContentLength,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.PageBlobCreateResponse>;
  }

  /**
   * The Upload Pages operation writes a range of pages to a page blob
   * @param body Initial data
   * @param contentLength The length of the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.PageBlobUploadPagesResponse>
   */
  uploadPages(body: coreHttp.HttpRequestBody, contentLength: number, options?: Models.PageBlobUploadPagesOptionalParams): Promise<Models.PageBlobUploadPagesResponse>;
  /**
   * @param body Initial data
   * @param contentLength The length of the request.
   * @param callback The callback
   */
  uploadPages(body: coreHttp.HttpRequestBody, contentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param body Initial data
   * @param contentLength The length of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  uploadPages(body: coreHttp.HttpRequestBody, contentLength: number, options: Models.PageBlobUploadPagesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  uploadPages(body: coreHttp.HttpRequestBody, contentLength: number, options?: Models.PageBlobUploadPagesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.PageBlobUploadPagesResponse> {
    return this.client.sendOperationRequest(
      {
        body,
        contentLength,
        options
      },
      uploadPagesOperationSpec,
      callback) as Promise<Models.PageBlobUploadPagesResponse>;
  }

  /**
   * The Clear Pages operation clears a set of pages from a page blob
   * @param contentLength The length of the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.PageBlobClearPagesResponse>
   */
  clearPages(contentLength: number, options?: Models.PageBlobClearPagesOptionalParams): Promise<Models.PageBlobClearPagesResponse>;
  /**
   * @param contentLength The length of the request.
   * @param callback The callback
   */
  clearPages(contentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param contentLength The length of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  clearPages(contentLength: number, options: Models.PageBlobClearPagesOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  clearPages(contentLength: number, options?: Models.PageBlobClearPagesOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.PageBlobClearPagesResponse> {
    return this.client.sendOperationRequest(
      {
        contentLength,
        options
      },
      clearPagesOperationSpec,
      callback) as Promise<Models.PageBlobClearPagesResponse>;
  }

  /**
   * The Upload Pages operation writes a range of pages to a page blob where the contents are read
   * from a URL
   * @param sourceUrl Specify a URL to the copy source.
   * @param sourceRange Bytes of source data in the specified range. The length of this range should
   * match the ContentLength header and x-ms-range/Range destination range header.
   * @param contentLength The length of the request.
   * @param range The range of bytes to which the source range would be written. The range should be
   * 512 aligned and range-end is required.
   * @param [options] The optional parameters
   * @returns Promise<Models.PageBlobUploadPagesFromURLResponse>
   */
  uploadPagesFromURL(sourceUrl: string, sourceRange: string, contentLength: number, range: string, options?: Models.PageBlobUploadPagesFromURLOptionalParams): Promise<Models.PageBlobUploadPagesFromURLResponse>;
  /**
   * @param sourceUrl Specify a URL to the copy source.
   * @param sourceRange Bytes of source data in the specified range. The length of this range should
   * match the ContentLength header and x-ms-range/Range destination range header.
   * @param contentLength The length of the request.
   * @param range The range of bytes to which the source range would be written. The range should be
   * 512 aligned and range-end is required.
   * @param callback The callback
   */
  uploadPagesFromURL(sourceUrl: string, sourceRange: string, contentLength: number, range: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param sourceUrl Specify a URL to the copy source.
   * @param sourceRange Bytes of source data in the specified range. The length of this range should
   * match the ContentLength header and x-ms-range/Range destination range header.
   * @param contentLength The length of the request.
   * @param range The range of bytes to which the source range would be written. The range should be
   * 512 aligned and range-end is required.
   * @param options The optional parameters
   * @param callback The callback
   */
  uploadPagesFromURL(sourceUrl: string, sourceRange: string, contentLength: number, range: string, options: Models.PageBlobUploadPagesFromURLOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  uploadPagesFromURL(sourceUrl: string, sourceRange: string, contentLength: number, range: string, options?: Models.PageBlobUploadPagesFromURLOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.PageBlobUploadPagesFromURLResponse> {
    return this.client.sendOperationRequest(
      {
        sourceUrl,
        sourceRange,
        contentLength,
        range,
        options
      },
      uploadPagesFromURLOperationSpec,
      callback) as Promise<Models.PageBlobUploadPagesFromURLResponse>;
  }

  /**
   * The Get Page Ranges operation returns the list of valid page ranges for a page blob or snapshot
   * of a page blob
   * @param [options] The optional parameters
   * @returns Promise<Models.PageBlobGetPageRangesResponse>
   */
  getPageRanges(options?: Models.PageBlobGetPageRangesOptionalParams): Promise<Models.PageBlobGetPageRangesResponse>;
  /**
   * @param callback The callback
   */
  getPageRanges(callback: coreHttp.ServiceCallback<Models.PageList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getPageRanges(options: Models.PageBlobGetPageRangesOptionalParams, callback: coreHttp.ServiceCallback<Models.PageList>): void;
  getPageRanges(options?: Models.PageBlobGetPageRangesOptionalParams | coreHttp.ServiceCallback<Models.PageList>, callback?: coreHttp.ServiceCallback<Models.PageList>): Promise<Models.PageBlobGetPageRangesResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPageRangesOperationSpec,
      callback) as Promise<Models.PageBlobGetPageRangesResponse>;
  }

  /**
   * The Get Page Ranges Diff operation returns the list of valid page ranges for a page blob that
   * were changed between target blob and previous snapshot.
   * @param [options] The optional parameters
   * @returns Promise<Models.PageBlobGetPageRangesDiffResponse>
   */
  getPageRangesDiff(options?: Models.PageBlobGetPageRangesDiffOptionalParams): Promise<Models.PageBlobGetPageRangesDiffResponse>;
  /**
   * @param callback The callback
   */
  getPageRangesDiff(callback: coreHttp.ServiceCallback<Models.PageList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getPageRangesDiff(options: Models.PageBlobGetPageRangesDiffOptionalParams, callback: coreHttp.ServiceCallback<Models.PageList>): void;
  getPageRangesDiff(options?: Models.PageBlobGetPageRangesDiffOptionalParams | coreHttp.ServiceCallback<Models.PageList>, callback?: coreHttp.ServiceCallback<Models.PageList>): Promise<Models.PageBlobGetPageRangesDiffResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getPageRangesDiffOperationSpec,
      callback) as Promise<Models.PageBlobGetPageRangesDiffResponse>;
  }

  /**
   * Resize the Blob
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB.
   * The page blob size must be aligned to a 512-byte boundary.
   * @param [options] The optional parameters
   * @returns Promise<Models.PageBlobResizeResponse>
   */
  resize(blobContentLength: number, options?: Models.PageBlobResizeOptionalParams): Promise<Models.PageBlobResizeResponse>;
  /**
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB.
   * The page blob size must be aligned to a 512-byte boundary.
   * @param callback The callback
   */
  resize(blobContentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param blobContentLength This header specifies the maximum size for the page blob, up to 1 TB.
   * The page blob size must be aligned to a 512-byte boundary.
   * @param options The optional parameters
   * @param callback The callback
   */
  resize(blobContentLength: number, options: Models.PageBlobResizeOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  resize(blobContentLength: number, options?: Models.PageBlobResizeOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.PageBlobResizeResponse> {
    return this.client.sendOperationRequest(
      {
        blobContentLength,
        options
      },
      resizeOperationSpec,
      callback) as Promise<Models.PageBlobResizeResponse>;
  }

  /**
   * Update the sequence number of the blob
   * @param sequenceNumberAction Required if the x-ms-blob-sequence-number header is set for the
   * request. This property applies to page blobs only. This property indicates how the service
   * should modify the blob's sequence number. Possible values include: 'max', 'update', 'increment'
   * @param [options] The optional parameters
   * @returns Promise<Models.PageBlobUpdateSequenceNumberResponse>
   */
  updateSequenceNumber(sequenceNumberAction: Models.SequenceNumberActionType, options?: Models.PageBlobUpdateSequenceNumberOptionalParams): Promise<Models.PageBlobUpdateSequenceNumberResponse>;
  /**
   * @param sequenceNumberAction Required if the x-ms-blob-sequence-number header is set for the
   * request. This property applies to page blobs only. This property indicates how the service
   * should modify the blob's sequence number. Possible values include: 'max', 'update', 'increment'
   * @param callback The callback
   */
  updateSequenceNumber(sequenceNumberAction: Models.SequenceNumberActionType, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param sequenceNumberAction Required if the x-ms-blob-sequence-number header is set for the
   * request. This property applies to page blobs only. This property indicates how the service
   * should modify the blob's sequence number. Possible values include: 'max', 'update', 'increment'
   * @param options The optional parameters
   * @param callback The callback
   */
  updateSequenceNumber(sequenceNumberAction: Models.SequenceNumberActionType, options: Models.PageBlobUpdateSequenceNumberOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  updateSequenceNumber(sequenceNumberAction: Models.SequenceNumberActionType, options?: Models.PageBlobUpdateSequenceNumberOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.PageBlobUpdateSequenceNumberResponse> {
    return this.client.sendOperationRequest(
      {
        sequenceNumberAction,
        options
      },
      updateSequenceNumberOperationSpec,
      callback) as Promise<Models.PageBlobUpdateSequenceNumberResponse>;
  }

  /**
   * The Copy Incremental operation copies a snapshot of the source page blob to a destination page
   * blob. The snapshot is copied such that only the differential changes between the previously
   * copied snapshot are transferred to the destination. The copied snapshots are complete copies of
   * the original snapshot and can be read or copied from as usual. This API is supported since REST
   * version 2016-05-31.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up
   * to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it
   * would appear in a request URI. The source blob must either be public or must be authenticated
   * via a shared access signature.
   * @param [options] The optional parameters
   * @returns Promise<Models.PageBlobCopyIncrementalResponse>
   */
  copyIncremental(copySource: string, options?: Models.PageBlobCopyIncrementalOptionalParams): Promise<Models.PageBlobCopyIncrementalResponse>;
  /**
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up
   * to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it
   * would appear in a request URI. The source blob must either be public or must be authenticated
   * via a shared access signature.
   * @param callback The callback
   */
  copyIncremental(copySource: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up
   * to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it
   * would appear in a request URI. The source blob must either be public or must be authenticated
   * via a shared access signature.
   * @param options The optional parameters
   * @param callback The callback
   */
  copyIncremental(copySource: string, options: Models.PageBlobCopyIncrementalOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  copyIncremental(copySource: string, options?: Models.PageBlobCopyIncrementalOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.PageBlobCopyIncrementalResponse> {
    return this.client.sendOperationRequest(
      {
        copySource,
        options
      },
      copyIncrementalOperationSpec,
      callback) as Promise<Models.PageBlobCopyIncrementalResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const createOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds
  ],
  headerParameters: [
    Parameters.contentLength,
    Parameters.metadata,
    Parameters.blobContentLength,
    Parameters.blobSequenceNumber,
    Parameters.version,
    Parameters.requestId,
    Parameters.tier0,
    Parameters.blobType0,
    Parameters.blobContentType,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentMD5,
    Parameters.blobCacheControl,
    Parameters.blobContentDisposition,
    Parameters.leaseId0,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    201: {
      headersMapper: Mappers.PageBlobCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const uploadPagesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp12
  ],
  headerParameters: [
    Parameters.contentLength,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.range0,
    Parameters.version,
    Parameters.requestId,
    Parameters.pageWrite0,
    Parameters.leaseId0,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      required: true,
      serializedName: "body",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/octet-stream",
  responses: {
    201: {
      headersMapper: Mappers.PageBlobUploadPagesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const clearPagesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp12
  ],
  headerParameters: [
    Parameters.contentLength,
    Parameters.range0,
    Parameters.version,
    Parameters.requestId,
    Parameters.pageWrite1,
    Parameters.leaseId0,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    201: {
      headersMapper: Mappers.PageBlobClearPagesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const uploadPagesFromURLOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp12
  ],
  headerParameters: [
    Parameters.sourceUrl,
    Parameters.sourceRange0,
    Parameters.sourceContentMD5,
    Parameters.sourceContentCrc64,
    Parameters.contentLength,
    Parameters.range1,
    Parameters.version,
    Parameters.requestId,
    Parameters.pageWrite0,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.leaseId0,
    Parameters.ifSequenceNumberLessThanOrEqualTo,
    Parameters.ifSequenceNumberLessThan,
    Parameters.ifSequenceNumberEqualTo,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch
  ],
  responses: {
    201: {
      headersMapper: Mappers.PageBlobUploadPagesFromURLHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getPageRangesOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.snapshot,
    Parameters.timeoutInSeconds,
    Parameters.comp13
  ],
  headerParameters: [
    Parameters.range0,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PageList,
      headersMapper: Mappers.PageBlobGetPageRangesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const getPageRangesDiffOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.snapshot,
    Parameters.timeoutInSeconds,
    Parameters.prevsnapshot,
    Parameters.comp13
  ],
  headerParameters: [
    Parameters.range0,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PageList,
      headersMapper: Mappers.PageBlobGetPageRangesDiffHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const resizeOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.blobContentLength,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    200: {
      headersMapper: Mappers.PageBlobResizeHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const updateSequenceNumberOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp0
  ],
  headerParameters: [
    Parameters.sequenceNumberAction,
    Parameters.blobSequenceNumber,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    200: {
      headersMapper: Mappers.PageBlobUpdateSequenceNumberHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};

const copyIncrementalOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp14
  ],
  headerParameters: [
    Parameters.copySource,
    Parameters.version,
    Parameters.requestId,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    202: {
      headersMapper: Mappers.PageBlobCopyIncrementalHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError
    }
  },
  isXML: true,
  serializer
};
