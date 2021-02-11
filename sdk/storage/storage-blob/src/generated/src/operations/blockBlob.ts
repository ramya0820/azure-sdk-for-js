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
import * as Mappers from "../models/blockBlobMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a BlockBlob. */
export class BlockBlob {
  private readonly client: StorageClientContext;

  /**
   * Create a BlockBlob.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * The Upload Block Blob operation updates the content of an existing block blob. Updating an
   * existing block blob overwrites any existing metadata on the blob. Partial updates are not
   * supported with Put Blob; the content of the existing blob is overwritten with the content of the
   * new blob. To perform a partial update of the content of a block blob, use the Put Block List
   * operation.
   * @param body Initial data
   * @param contentLength The length of the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.BlockBlobUploadResponse>
   */
  upload(body: coreHttp.HttpRequestBody, contentLength: number, options?: Models.BlockBlobUploadOptionalParams): Promise<Models.BlockBlobUploadResponse>;
  /**
   * @param body Initial data
   * @param contentLength The length of the request.
   * @param callback The callback
   */
  upload(body: coreHttp.HttpRequestBody, contentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param body Initial data
   * @param contentLength The length of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  upload(body: coreHttp.HttpRequestBody, contentLength: number, options: Models.BlockBlobUploadOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  upload(body: coreHttp.HttpRequestBody, contentLength: number, options?: Models.BlockBlobUploadOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.BlockBlobUploadResponse> {
    return this.client.sendOperationRequest(
      {
        body,
        contentLength,
        options
      },
      uploadOperationSpec,
      callback) as Promise<Models.BlockBlobUploadResponse>;
  }

  /**
   * The Put Blob from URL operation creates a new Block Blob where the contents of the blob are read
   * from a given URL.  This API is supported beginning with the 2020-04-08 version. Partial updates
   * are not supported with Put Blob from URL; the content of an existing blob is overwritten with
   * the content of the new blob.  To perform partial updates to a block blob’s contents using a
   * source URL, use the Put Block from URL API in conjunction with Put Block List.
   * @param contentLength The length of the request.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up
   * to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it
   * would appear in a request URI. The source blob must either be public or must be authenticated
   * via a shared access signature.
   * @param [options] The optional parameters
   * @returns Promise<Models.BlockBlobPutBlobFromUrlResponse>
   */
  putBlobFromUrl(contentLength: number, copySource: string, options?: Models.BlockBlobPutBlobFromUrlOptionalParams): Promise<Models.BlockBlobPutBlobFromUrlResponse>;
  /**
   * @param contentLength The length of the request.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up
   * to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it
   * would appear in a request URI. The source blob must either be public or must be authenticated
   * via a shared access signature.
   * @param callback The callback
   */
  putBlobFromUrl(contentLength: number, copySource: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param contentLength The length of the request.
   * @param copySource Specifies the name of the source page blob snapshot. This value is a URL of up
   * to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it
   * would appear in a request URI. The source blob must either be public or must be authenticated
   * via a shared access signature.
   * @param options The optional parameters
   * @param callback The callback
   */
  putBlobFromUrl(contentLength: number, copySource: string, options: Models.BlockBlobPutBlobFromUrlOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  putBlobFromUrl(contentLength: number, copySource: string, options?: Models.BlockBlobPutBlobFromUrlOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.BlockBlobPutBlobFromUrlResponse> {
    return this.client.sendOperationRequest(
      {
        contentLength,
        copySource,
        options
      },
      putBlobFromUrlOperationSpec,
      callback) as Promise<Models.BlockBlobPutBlobFromUrlResponse>;
  }

  /**
   * The Stage Block operation creates a new block to be committed as part of a blob
   * @param blockId A valid Base64 string value that identifies the block. Prior to encoding, the
   * string must be less than or equal to 64 bytes in size. For a given blob, the length of the value
   * specified for the blockid parameter must be the same size for each block.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param [options] The optional parameters
   * @returns Promise<Models.BlockBlobStageBlockResponse>
   */
  stageBlock(blockId: string, contentLength: number, body: coreHttp.HttpRequestBody, options?: Models.BlockBlobStageBlockOptionalParams): Promise<Models.BlockBlobStageBlockResponse>;
  /**
   * @param blockId A valid Base64 string value that identifies the block. Prior to encoding, the
   * string must be less than or equal to 64 bytes in size. For a given blob, the length of the value
   * specified for the blockid parameter must be the same size for each block.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param callback The callback
   */
  stageBlock(blockId: string, contentLength: number, body: coreHttp.HttpRequestBody, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param blockId A valid Base64 string value that identifies the block. Prior to encoding, the
   * string must be less than or equal to 64 bytes in size. For a given blob, the length of the value
   * specified for the blockid parameter must be the same size for each block.
   * @param contentLength The length of the request.
   * @param body Initial data
   * @param options The optional parameters
   * @param callback The callback
   */
  stageBlock(blockId: string, contentLength: number, body: coreHttp.HttpRequestBody, options: Models.BlockBlobStageBlockOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  stageBlock(blockId: string, contentLength: number, body: coreHttp.HttpRequestBody, options?: Models.BlockBlobStageBlockOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.BlockBlobStageBlockResponse> {
    return this.client.sendOperationRequest(
      {
        blockId,
        contentLength,
        body,
        options
      },
      stageBlockOperationSpec,
      callback) as Promise<Models.BlockBlobStageBlockResponse>;
  }

  /**
   * The Stage Block operation creates a new block to be committed as part of a blob where the
   * contents are read from a URL.
   * @param blockId A valid Base64 string value that identifies the block. Prior to encoding, the
   * string must be less than or equal to 64 bytes in size. For a given blob, the length of the value
   * specified for the blockid parameter must be the same size for each block.
   * @param contentLength The length of the request.
   * @param sourceUrl Specify a URL to the copy source.
   * @param [options] The optional parameters
   * @returns Promise<Models.BlockBlobStageBlockFromURLResponse>
   */
  stageBlockFromURL(blockId: string, contentLength: number, sourceUrl: string, options?: Models.BlockBlobStageBlockFromURLOptionalParams): Promise<Models.BlockBlobStageBlockFromURLResponse>;
  /**
   * @param blockId A valid Base64 string value that identifies the block. Prior to encoding, the
   * string must be less than or equal to 64 bytes in size. For a given blob, the length of the value
   * specified for the blockid parameter must be the same size for each block.
   * @param contentLength The length of the request.
   * @param sourceUrl Specify a URL to the copy source.
   * @param callback The callback
   */
  stageBlockFromURL(blockId: string, contentLength: number, sourceUrl: string, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param blockId A valid Base64 string value that identifies the block. Prior to encoding, the
   * string must be less than or equal to 64 bytes in size. For a given blob, the length of the value
   * specified for the blockid parameter must be the same size for each block.
   * @param contentLength The length of the request.
   * @param sourceUrl Specify a URL to the copy source.
   * @param options The optional parameters
   * @param callback The callback
   */
  stageBlockFromURL(blockId: string, contentLength: number, sourceUrl: string, options: Models.BlockBlobStageBlockFromURLOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  stageBlockFromURL(blockId: string, contentLength: number, sourceUrl: string, options?: Models.BlockBlobStageBlockFromURLOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.BlockBlobStageBlockFromURLResponse> {
    return this.client.sendOperationRequest(
      {
        blockId,
        contentLength,
        sourceUrl,
        options
      },
      stageBlockFromURLOperationSpec,
      callback) as Promise<Models.BlockBlobStageBlockFromURLResponse>;
  }

  /**
   * The Commit Block List operation writes a blob by specifying the list of block IDs that make up
   * the blob. In order to be written as part of a blob, a block must have been successfully written
   * to the server in a prior Put Block operation. You can call Put Block List to update a blob by
   * uploading only those blocks that have changed, then committing the new and existing blocks
   * together. You can do this by specifying whether to commit a block from the committed block list
   * or from the uncommitted block list, or to commit the most recently uploaded version of the
   * block, whichever list it may belong to.
   * @param blocks
   * @param [options] The optional parameters
   * @returns Promise<Models.BlockBlobCommitBlockListResponse>
   */
  commitBlockList(blocks: Models.BlockLookupList, options?: Models.BlockBlobCommitBlockListOptionalParams): Promise<Models.BlockBlobCommitBlockListResponse>;
  /**
   * @param blocks
   * @param callback The callback
   */
  commitBlockList(blocks: Models.BlockLookupList, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param blocks
   * @param options The optional parameters
   * @param callback The callback
   */
  commitBlockList(blocks: Models.BlockLookupList, options: Models.BlockBlobCommitBlockListOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  commitBlockList(blocks: Models.BlockLookupList, options?: Models.BlockBlobCommitBlockListOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.BlockBlobCommitBlockListResponse> {
    return this.client.sendOperationRequest(
      {
        blocks,
        options
      },
      commitBlockListOperationSpec,
      callback) as Promise<Models.BlockBlobCommitBlockListResponse>;
  }

  /**
   * The Get Block List operation retrieves the list of blocks that have been uploaded as part of a
   * block blob
   * @param listType Specifies whether to return the list of committed blocks, the list of
   * uncommitted blocks, or both lists together. Possible values include: 'committed', 'uncommitted',
   * 'all'
   * @param [options] The optional parameters
   * @returns Promise<Models.BlockBlobGetBlockListResponse>
   */
  getBlockList(listType: Models.BlockListType, options?: Models.BlockBlobGetBlockListOptionalParams): Promise<Models.BlockBlobGetBlockListResponse>;
  /**
   * @param listType Specifies whether to return the list of committed blocks, the list of
   * uncommitted blocks, or both lists together. Possible values include: 'committed', 'uncommitted',
   * 'all'
   * @param callback The callback
   */
  getBlockList(listType: Models.BlockListType, callback: coreHttp.ServiceCallback<Models.BlockList>): void;
  /**
   * @param listType Specifies whether to return the list of committed blocks, the list of
   * uncommitted blocks, or both lists together. Possible values include: 'committed', 'uncommitted',
   * 'all'
   * @param options The optional parameters
   * @param callback The callback
   */
  getBlockList(listType: Models.BlockListType, options: Models.BlockBlobGetBlockListOptionalParams, callback: coreHttp.ServiceCallback<Models.BlockList>): void;
  getBlockList(listType: Models.BlockListType, options?: Models.BlockBlobGetBlockListOptionalParams | coreHttp.ServiceCallback<Models.BlockList>, callback?: coreHttp.ServiceCallback<Models.BlockList>): Promise<Models.BlockBlobGetBlockListResponse> {
    return this.client.sendOperationRequest(
      {
        listType,
        options
      },
      getBlockListOperationSpec,
      callback) as Promise<Models.BlockBlobGetBlockListResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const uploadOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds
  ],
  headerParameters: [
    Parameters.transactionalContentMD5,
    Parameters.contentLength,
    Parameters.metadata,
    Parameters.encryptionScope,
    Parameters.tier0,
    Parameters.version,
    Parameters.requestId,
    Parameters.blobTagsString,
    Parameters.blobType2,
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
    Parameters.ifNoneMatch,
    Parameters.ifTags
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
      headersMapper: Mappers.BlockBlobUploadHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobUploadHeaders
    }
  },
  isXML: true,
  serializer
};

const putBlobFromUrlOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds
  ],
  headerParameters: [
    Parameters.transactionalContentMD5,
    Parameters.contentLength,
    Parameters.metadata,
    Parameters.encryptionScope,
    Parameters.tier0,
    Parameters.version,
    Parameters.requestId,
    Parameters.sourceContentMD5,
    Parameters.blobTagsString,
    Parameters.copySource,
    Parameters.copySourceBlobProperties,
    Parameters.blobType2,
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
    Parameters.ifNoneMatch,
    Parameters.ifTags,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch,
    Parameters.sourceIfTags
  ],
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobPutBlobFromUrlHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobPutBlobFromUrlHeaders
    }
  },
  isXML: true,
  serializer
};

const stageBlockOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.blockId,
    Parameters.timeoutInSeconds,
    Parameters.comp22
  ],
  headerParameters: [
    Parameters.contentLength,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.encryptionScope,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm
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
      headersMapper: Mappers.BlockBlobStageBlockHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobStageBlockHeaders
    }
  },
  isXML: true,
  serializer
};

const stageBlockFromURLOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.blockId,
    Parameters.timeoutInSeconds,
    Parameters.comp22
  ],
  headerParameters: [
    Parameters.contentLength,
    Parameters.sourceUrl,
    Parameters.sourceRange1,
    Parameters.sourceContentMD5,
    Parameters.sourceContentCrc64,
    Parameters.encryptionScope,
    Parameters.version,
    Parameters.requestId,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.leaseId0,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch
  ],
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobStageBlockFromURLHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobStageBlockFromURLHeaders
    }
  },
  isXML: true,
  serializer
};

const commitBlockListOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp23
  ],
  headerParameters: [
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.metadata,
    Parameters.encryptionScope,
    Parameters.tier0,
    Parameters.version,
    Parameters.requestId,
    Parameters.blobTagsString,
    Parameters.blobCacheControl,
    Parameters.blobContentType,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentMD5,
    Parameters.blobContentDisposition,
    Parameters.leaseId0,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.ifTags
  ],
  requestBody: {
    parameterPath: "blocks",
    mapper: {
      ...Mappers.BlockLookupList,
      required: true
    }
  },
  contentType: "application/xml; charset=utf-8",
  responses: {
    201: {
      headersMapper: Mappers.BlockBlobCommitBlockListHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobCommitBlockListHeaders
    }
  },
  isXML: true,
  serializer
};

const getBlockListOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.snapshot,
    Parameters.listType,
    Parameters.timeoutInSeconds,
    Parameters.comp23
  ],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.ifTags
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BlockList,
      headersMapper: Mappers.BlockBlobGetBlockListHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.BlockBlobGetBlockListHeaders
    }
  },
  isXML: true,
  serializer
};
