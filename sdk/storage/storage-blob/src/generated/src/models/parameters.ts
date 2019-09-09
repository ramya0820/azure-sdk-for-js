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

export const access: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "access"
  ],
  mapper: {
    serializedName: "x-ms-blob-public-access",
    type: {
      name: "String"
    }
  }
};
export const action0: msRest.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'acquire',
    type: {
      name: "String"
    }
  }
};
export const action1: msRest.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'release',
    type: {
      name: "String"
    }
  }
};
export const action2: msRest.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'renew',
    type: {
      name: "String"
    }
  }
};
export const action3: msRest.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'break',
    type: {
      name: "String"
    }
  }
};
export const action4: msRest.OperationParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-lease-action",
    defaultValue: 'change',
    type: {
      name: "String"
    }
  }
};
export const action5: msRest.OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "action",
    defaultValue: 'setAccessControl',
    type: {
      name: "String"
    }
  }
};
export const action6: msRest.OperationQueryParameter = {
  parameterPath: "action",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "action",
    defaultValue: 'getAccessControl',
    type: {
      name: "String"
    }
  }
};
export const appendPosition: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "appendPositionAccessConditions",
    "appendPosition"
  ],
  mapper: {
    serializedName: "x-ms-blob-condition-appendpos",
    type: {
      name: "Number"
    }
  }
};
export const blobCacheControl: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobCacheControl"
  ],
  mapper: {
    serializedName: "x-ms-blob-cache-control",
    type: {
      name: "String"
    }
  }
};
export const blobContentDisposition: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentDisposition"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-disposition",
    type: {
      name: "String"
    }
  }
};
export const blobContentEncoding: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentEncoding"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-encoding",
    type: {
      name: "String"
    }
  }
};
export const blobContentLanguage: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentLanguage"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-language",
    type: {
      name: "String"
    }
  }
};
export const blobContentLength: msRest.OperationParameter = {
  parameterPath: "blobContentLength",
  mapper: {
    required: true,
    serializedName: "x-ms-blob-content-length",
    type: {
      name: "Number"
    }
  }
};
export const blobContentMD5: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentMD5"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};
export const blobContentType: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "blobHTTPHeaders",
    "blobContentType"
  ],
  mapper: {
    serializedName: "x-ms-blob-content-type",
    type: {
      name: "String"
    }
  }
};
export const blobSequenceNumber: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "blobSequenceNumber"
  ],
  mapper: {
    serializedName: "x-ms-blob-sequence-number",
    defaultValue: 0,
    type: {
      name: "Number"
    }
  }
};
export const blobType0: msRest.OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-blob-type",
    defaultValue: 'PageBlob',
    type: {
      name: "String"
    }
  }
};
export const blobType1: msRest.OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-blob-type",
    defaultValue: 'AppendBlob',
    type: {
      name: "String"
    }
  }
};
export const blobType2: msRest.OperationParameter = {
  parameterPath: "blobType",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-blob-type",
    defaultValue: 'BlockBlob',
    type: {
      name: "String"
    }
  }
};
export const blockId: msRest.OperationQueryParameter = {
  parameterPath: "blockId",
  mapper: {
    required: true,
    serializedName: "blockid",
    type: {
      name: "String"
    }
  }
};
export const breakPeriod: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "breakPeriod"
  ],
  mapper: {
    serializedName: "x-ms-lease-break-period",
    type: {
      name: "Number"
    }
  }
};
export const cacheControl: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "cacheControl"
  ],
  mapper: {
    serializedName: "x-ms-cache-control",
    type: {
      name: "String"
    }
  }
};
export const comp0: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'properties',
    type: {
      name: "String"
    }
  }
};
export const comp1: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'stats',
    type: {
      name: "String"
    }
  }
};
export const comp10: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'copy',
    type: {
      name: "String"
    }
  }
};
export const comp11: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'tier',
    type: {
      name: "String"
    }
  }
};
export const comp12: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'page',
    type: {
      name: "String"
    }
  }
};
export const comp13: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'pagelist',
    type: {
      name: "String"
    }
  }
};
export const comp14: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'incrementalcopy',
    type: {
      name: "String"
    }
  }
};
export const comp15: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'appendblock',
    type: {
      name: "String"
    }
  }
};
export const comp16: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'block',
    type: {
      name: "String"
    }
  }
};
export const comp17: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'blocklist',
    type: {
      name: "String"
    }
  }
};
export const comp2: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'list',
    type: {
      name: "String"
    }
  }
};
export const comp3: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'userdelegationkey',
    type: {
      name: "String"
    }
  }
};
export const comp4: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'batch',
    type: {
      name: "String"
    }
  }
};
export const comp5: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'metadata',
    type: {
      name: "String"
    }
  }
};
export const comp6: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'acl',
    type: {
      name: "String"
    }
  }
};
export const comp7: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'lease',
    type: {
      name: "String"
    }
  }
};
export const comp8: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'undelete',
    type: {
      name: "String"
    }
  }
};
export const comp9: msRest.OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "comp",
    defaultValue: 'snapshot',
    type: {
      name: "String"
    }
  }
};
export const contentDisposition: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "contentDisposition"
  ],
  mapper: {
    serializedName: "x-ms-content-disposition",
    type: {
      name: "String"
    }
  }
};
export const contentEncoding: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "contentEncoding"
  ],
  mapper: {
    serializedName: "x-ms-content-encoding",
    type: {
      name: "String"
    }
  }
};
export const contentLanguage: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "contentLanguage"
  ],
  mapper: {
    serializedName: "x-ms-content-language",
    type: {
      name: "String"
    }
  }
};
export const contentLength: msRest.OperationParameter = {
  parameterPath: "contentLength",
  mapper: {
    required: true,
    serializedName: "Content-Length",
    type: {
      name: "Number"
    }
  }
};
export const contentType: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "directoryHttpHeaders",
    "contentType"
  ],
  mapper: {
    serializedName: "x-ms-content-type",
    type: {
      name: "String"
    }
  }
};
export const copyActionAbortConstant: msRest.OperationParameter = {
  parameterPath: "copyActionAbortConstant",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-copy-action",
    defaultValue: 'abort',
    type: {
      name: "String"
    }
  }
};
export const copyId: msRest.OperationQueryParameter = {
  parameterPath: "copyId",
  mapper: {
    required: true,
    serializedName: "copyid",
    type: {
      name: "String"
    }
  }
};
export const copySource: msRest.OperationParameter = {
  parameterPath: "copySource",
  mapper: {
    required: true,
    serializedName: "x-ms-copy-source",
    type: {
      name: "String"
    }
  }
};
export const deleteSnapshots: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "deleteSnapshots"
  ],
  mapper: {
    serializedName: "x-ms-delete-snapshots",
    type: {
      name: "Enum",
      allowedValues: [
        "include",
        "only"
      ]
    }
  }
};
export const delimiter: msRest.OperationQueryParameter = {
  parameterPath: "delimiter",
  mapper: {
    required: true,
    serializedName: "delimiter",
    type: {
      name: "String"
    }
  }
};
export const directoryProperties: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "directoryProperties"
  ],
  mapper: {
    serializedName: "x-ms-properties",
    type: {
      name: "String"
    }
  }
};
export const duration: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "duration"
  ],
  mapper: {
    serializedName: "x-ms-lease-duration",
    type: {
      name: "Number"
    }
  }
};
export const encryptionAlgorithm: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "cpkInfo",
    "encryptionAlgorithm"
  ],
  mapper: {
    serializedName: "x-ms-encryption-algorithm",
    type: {
      name: "Enum",
      allowedValues: [
        "AES256"
      ]
    }
  }
};
export const encryptionKey: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "cpkInfo",
    "encryptionKey"
  ],
  mapper: {
    serializedName: "x-ms-encryption-key",
    type: {
      name: "String"
    }
  }
};
export const encryptionKeySha256: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "cpkInfo",
    "encryptionKeySha256"
  ],
  mapper: {
    serializedName: "x-ms-encryption-key-sha256",
    type: {
      name: "String"
    }
  }
};
export const group: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "group"
  ],
  mapper: {
    serializedName: "x-ms-group",
    type: {
      name: "String"
    }
  }
};
export const ifMatch: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "modifiedAccessConditions",
    "ifMatch"
  ],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const ifModifiedSince: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "modifiedAccessConditions",
    "ifModifiedSince"
  ],
  mapper: {
    serializedName: "If-Modified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};
export const ifNoneMatch: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "modifiedAccessConditions",
    "ifNoneMatch"
  ],
  mapper: {
    serializedName: "If-None-Match",
    type: {
      name: "String"
    }
  }
};
export const ifSequenceNumberEqualTo: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberEqualTo"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-eq",
    type: {
      name: "Number"
    }
  }
};
export const ifSequenceNumberLessThan: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberLessThan"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-lt",
    type: {
      name: "Number"
    }
  }
};
export const ifSequenceNumberLessThanOrEqualTo: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sequenceNumberAccessConditions",
    "ifSequenceNumberLessThanOrEqualTo"
  ],
  mapper: {
    serializedName: "x-ms-if-sequence-number-le",
    type: {
      name: "Number"
    }
  }
};
export const ifUnmodifiedSince: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "modifiedAccessConditions",
    "ifUnmodifiedSince"
  ],
  mapper: {
    serializedName: "If-Unmodified-Since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};
export const include0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "include"
  ],
  mapper: {
    serializedName: "include",
    type: {
      name: "Enum",
      allowedValues: [
        "metadata"
      ]
    }
  }
};
export const include1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "include"
  ],
  mapper: {
    serializedName: "include",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Enum",
          allowedValues: [
            "copy",
            "deleted",
            "metadata",
            "snapshots",
            "uncommittedblobs"
          ]
        }
      }
    }
  },
  collectionFormat: msRest.QueryCollectionFormat.Csv
};
export const leaseId0: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "leaseAccessConditions",
    "leaseId"
  ],
  mapper: {
    serializedName: "x-ms-lease-id",
    type: {
      name: "String"
    }
  }
};
export const leaseId1: msRest.OperationParameter = {
  parameterPath: "leaseId",
  mapper: {
    required: true,
    serializedName: "x-ms-lease-id",
    type: {
      name: "String"
    }
  }
};
export const listType: msRest.OperationQueryParameter = {
  parameterPath: "listType",
  mapper: {
    required: true,
    serializedName: "blocklisttype",
    defaultValue: 'committed',
    type: {
      name: "Enum",
      allowedValues: [
        "committed",
        "uncommitted",
        "all"
      ]
    }
  }
};
export const marker0: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "marker"
  ],
  mapper: {
    serializedName: "marker",
    type: {
      name: "String"
    }
  }
};
export const marker1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "marker"
  ],
  mapper: {
    serializedName: "continuation",
    type: {
      name: "String"
    }
  }
};
export const maxresults: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "maxresults"
  ],
  mapper: {
    serializedName: "maxresults",
    constraints: {
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const maxSize: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "appendPositionAccessConditions",
    "maxSize"
  ],
  mapper: {
    serializedName: "x-ms-blob-condition-maxsize",
    type: {
      name: "Number"
    }
  }
};
export const metadata: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "metadata"
  ],
  mapper: {
    serializedName: "x-ms-meta",
    type: {
      name: "Dictionary",
      value: {
        type: {
          name: "String"
        }
      }
    },
    headerCollectionPrefix: "x-ms-meta-"
  }
};
export const multipartContentType: msRest.OperationParameter = {
  parameterPath: "multipartContentType",
  mapper: {
    required: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};
export const owner: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "owner"
  ],
  mapper: {
    serializedName: "x-ms-owner",
    type: {
      name: "String"
    }
  }
};
export const pageWrite0: msRest.OperationParameter = {
  parameterPath: "pageWrite",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-page-write",
    defaultValue: 'update',
    type: {
      name: "String"
    }
  }
};
export const pageWrite1: msRest.OperationParameter = {
  parameterPath: "pageWrite",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-page-write",
    defaultValue: 'clear',
    type: {
      name: "String"
    }
  }
};
export const pathRenameMode: msRest.OperationQueryParameter = {
  parameterPath: "pathRenameMode",
  mapper: {
    serializedName: "mode",
    type: {
      name: "Enum",
      allowedValues: [
        "legacy",
        "posix"
      ]
    }
  }
};
export const posixAcl: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "posixAcl"
  ],
  mapper: {
    serializedName: "x-ms-acl",
    type: {
      name: "String"
    }
  }
};
export const posixPermissions: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "posixPermissions"
  ],
  mapper: {
    serializedName: "x-ms-permissions",
    type: {
      name: "String"
    }
  }
};
export const posixUmask: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "posixUmask"
  ],
  mapper: {
    serializedName: "x-ms-umask",
    type: {
      name: "String"
    }
  }
};
export const prefix: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "prefix"
  ],
  mapper: {
    serializedName: "prefix",
    type: {
      name: "String"
    }
  }
};
export const prevsnapshot: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "prevsnapshot"
  ],
  mapper: {
    serializedName: "prevsnapshot",
    type: {
      name: "String"
    }
  }
};
export const proposedLeaseId0: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "proposedLeaseId"
  ],
  mapper: {
    serializedName: "x-ms-proposed-lease-id",
    type: {
      name: "String"
    }
  }
};
export const proposedLeaseId1: msRest.OperationParameter = {
  parameterPath: "proposedLeaseId",
  mapper: {
    required: true,
    serializedName: "x-ms-proposed-lease-id",
    type: {
      name: "String"
    }
  }
};
export const range0: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "range"
  ],
  mapper: {
    serializedName: "x-ms-range",
    type: {
      name: "String"
    }
  }
};
export const range1: msRest.OperationParameter = {
  parameterPath: "range",
  mapper: {
    required: true,
    serializedName: "x-ms-range",
    type: {
      name: "String"
    }
  }
};
export const rangeGetContentCRC64: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "rangeGetContentCRC64"
  ],
  mapper: {
    serializedName: "x-ms-range-get-content-crc64",
    type: {
      name: "Boolean"
    }
  }
};
export const rangeGetContentMD5: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "rangeGetContentMD5"
  ],
  mapper: {
    serializedName: "x-ms-range-get-content-md5",
    type: {
      name: "Boolean"
    }
  }
};
export const recursiveDirectoryDelete: msRest.OperationQueryParameter = {
  parameterPath: "recursiveDirectoryDelete",
  mapper: {
    required: true,
    serializedName: "recursive",
    type: {
      name: "Boolean"
    }
  }
};
export const rehydratePriority: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "rehydratePriority"
  ],
  mapper: {
    serializedName: "x-ms-rehydrate-priority",
    type: {
      name: "String"
    }
  }
};
export const renameSource: msRest.OperationParameter = {
  parameterPath: "renameSource",
  mapper: {
    required: true,
    serializedName: "x-ms-rename-source",
    type: {
      name: "String"
    }
  }
};
export const requestId: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "requestId"
  ],
  mapper: {
    serializedName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};
export const resource: msRest.OperationQueryParameter = {
  parameterPath: "resource",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "resource",
    defaultValue: 'directory',
    type: {
      name: "String"
    }
  }
};
export const restype0: msRest.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'service',
    type: {
      name: "String"
    }
  }
};
export const restype1: msRest.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'account',
    type: {
      name: "String"
    }
  }
};
export const restype2: msRest.OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "restype",
    defaultValue: 'container',
    type: {
      name: "String"
    }
  }
};
export const sequenceNumberAction: msRest.OperationParameter = {
  parameterPath: "sequenceNumberAction",
  mapper: {
    required: true,
    serializedName: "x-ms-sequence-number-action",
    type: {
      name: "Enum",
      allowedValues: [
        "max",
        "update",
        "increment"
      ]
    }
  }
};
export const snapshot: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "snapshot"
  ],
  mapper: {
    serializedName: "snapshot",
    type: {
      name: "String"
    }
  }
};
export const sourceContentCrc64: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sourceContentCrc64"
  ],
  mapper: {
    serializedName: "x-ms-source-content-crc64",
    type: {
      name: "ByteArray"
    }
  }
};
export const sourceContentMD5: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sourceContentMD5"
  ],
  mapper: {
    serializedName: "x-ms-source-content-md5",
    type: {
      name: "ByteArray"
    }
  }
};
export const sourceIfMatch: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfMatch"
  ],
  mapper: {
    serializedName: "x-ms-source-if-match",
    type: {
      name: "String"
    }
  }
};
export const sourceIfModifiedSince: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfModifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-modified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};
export const sourceIfNoneMatch: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfNoneMatch"
  ],
  mapper: {
    serializedName: "x-ms-source-if-none-match",
    type: {
      name: "String"
    }
  }
};
export const sourceIfUnmodifiedSince: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sourceModifiedAccessConditions",
    "sourceIfUnmodifiedSince"
  ],
  mapper: {
    serializedName: "x-ms-source-if-unmodified-since",
    type: {
      name: "DateTimeRfc1123"
    }
  }
};
export const sourceLeaseId: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sourceLeaseId"
  ],
  mapper: {
    serializedName: "x-ms-source-lease-id",
    type: {
      name: "String"
    }
  }
};
export const sourceRange0: msRest.OperationParameter = {
  parameterPath: "sourceRange",
  mapper: {
    required: true,
    serializedName: "x-ms-source-range",
    type: {
      name: "String"
    }
  }
};
export const sourceRange1: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "sourceRange"
  ],
  mapper: {
    serializedName: "x-ms-source-range",
    type: {
      name: "String"
    }
  }
};
export const sourceUrl: msRest.OperationParameter = {
  parameterPath: "sourceUrl",
  mapper: {
    required: true,
    serializedName: "x-ms-copy-source",
    type: {
      name: "String"
    }
  }
};
export const tier0: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "tier"
  ],
  mapper: {
    serializedName: "x-ms-access-tier",
    type: {
      name: "String"
    }
  }
};
export const tier1: msRest.OperationParameter = {
  parameterPath: "tier",
  mapper: {
    required: true,
    serializedName: "x-ms-access-tier",
    type: {
      name: "String"
    }
  }
};
export const timeout: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "timeout"
  ],
  mapper: {
    serializedName: "timeout",
    constraints: {
      InclusiveMinimum: 0
    },
    type: {
      name: "Number"
    }
  }
};
export const transactionalContentCrc64: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "transactionalContentCrc64"
  ],
  mapper: {
    serializedName: "x-ms-content-crc64",
    type: {
      name: "ByteArray"
    }
  }
};
export const transactionalContentMD5: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "transactionalContentMD5"
  ],
  mapper: {
    serializedName: "Content-MD5",
    type: {
      name: "ByteArray"
    }
  }
};
export const upn: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "upn"
  ],
  mapper: {
    serializedName: "upn",
    type: {
      name: "Boolean"
    }
  }
};
export const url: msRest.OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    required: true,
    serializedName: "url",
    defaultValue: '',
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const version: msRest.OperationParameter = {
  parameterPath: "version",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-version",
    defaultValue: '2019-02-02',
    type: {
      name: "String"
    }
  }
};
export const xMsRequiresSync: msRest.OperationParameter = {
  parameterPath: "xMsRequiresSync",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "x-ms-requires-sync",
    defaultValue: 'true',
    type: {
      name: "String"
    }
  }
};
