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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const accountName: msRest.OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    required: true,
    serializedName: "accountName",
    constraints: {
      MaxLength: 50,
      MinLength: 3,
      Pattern: /^[a-z0-9]+(-[a-z0-9]+)*/
    },
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-08-01',
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-08-01-preview',
    type: {
      name: "String"
    }
  }
};
export const apiVersion2: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2019-08-01-preview',
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const collectionName: msRest.OperationURLParameter = {
  parameterPath: "collectionName",
  mapper: {
    required: true,
    serializedName: "collectionName",
    type: {
      name: "String"
    }
  }
};
export const collectionRid: msRest.OperationURLParameter = {
  parameterPath: "collectionRid",
  mapper: {
    required: true,
    serializedName: "collectionRid",
    type: {
      name: "String"
    }
  }
};
export const containerName: msRest.OperationURLParameter = {
  parameterPath: "containerName",
  mapper: {
    required: true,
    serializedName: "containerName",
    type: {
      name: "String"
    }
  }
};
export const databaseName: msRest.OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    required: true,
    serializedName: "databaseName",
    type: {
      name: "String"
    }
  }
};
export const databaseRid: msRest.OperationURLParameter = {
  parameterPath: "databaseRid",
  mapper: {
    required: true,
    serializedName: "databaseRid",
    type: {
      name: "String"
    }
  }
};
export const filter0: msRest.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    required: true,
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const filter1: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filter"
  ],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};
export const graphName: msRest.OperationURLParameter = {
  parameterPath: "graphName",
  mapper: {
    required: true,
    serializedName: "graphName",
    type: {
      name: "String"
    }
  }
};
export const groupName: msRest.OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    required: true,
    serializedName: "groupName",
    type: {
      name: "String"
    }
  }
};
export const keyspaceName: msRest.OperationURLParameter = {
  parameterPath: "keyspaceName",
  mapper: {
    required: true,
    serializedName: "keyspaceName",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const partitionKeyRangeId: msRest.OperationURLParameter = {
  parameterPath: "partitionKeyRangeId",
  mapper: {
    required: true,
    serializedName: "partitionKeyRangeId",
    type: {
      name: "String"
    }
  }
};
export const privateEndpointConnectionName: msRest.OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    required: true,
    serializedName: "privateEndpointConnectionName",
    type: {
      name: "String"
    }
  }
};
export const region: msRest.OperationURLParameter = {
  parameterPath: "region",
  mapper: {
    required: true,
    serializedName: "region",
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
    type: {
      name: "String"
    }
  }
};
export const sourceRegion: msRest.OperationURLParameter = {
  parameterPath: "sourceRegion",
  mapper: {
    required: true,
    serializedName: "sourceRegion",
    type: {
      name: "String"
    }
  }
};
export const storedProcedureName: msRest.OperationURLParameter = {
  parameterPath: "storedProcedureName",
  mapper: {
    required: true,
    serializedName: "storedProcedureName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId0: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId1: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const tableName: msRest.OperationURLParameter = {
  parameterPath: "tableName",
  mapper: {
    required: true,
    serializedName: "tableName",
    type: {
      name: "String"
    }
  }
};
export const targetRegion: msRest.OperationURLParameter = {
  parameterPath: "targetRegion",
  mapper: {
    required: true,
    serializedName: "targetRegion",
    type: {
      name: "String"
    }
  }
};
export const triggerName: msRest.OperationURLParameter = {
  parameterPath: "triggerName",
  mapper: {
    required: true,
    serializedName: "triggerName",
    type: {
      name: "String"
    }
  }
};
export const userDefinedFunctionName: msRest.OperationURLParameter = {
  parameterPath: "userDefinedFunctionName",
  mapper: {
    required: true,
    serializedName: "userDefinedFunctionName",
    type: {
      name: "String"
    }
  }
};
