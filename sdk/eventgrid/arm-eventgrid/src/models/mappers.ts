/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const InputSchemaMapping: msRest.CompositeMapper = {
  serializedName: "InputSchemaMapping",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "inputSchemaMappingType",
      clientName: "inputSchemaMappingType"
    },
    uberParent: "InputSchemaMapping",
    className: "InputSchemaMapping",
    modelProperties: {
      inputSchemaMappingType: {
        required: true,
        serializedName: "inputSchemaMappingType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const JsonField: msRest.CompositeMapper = {
  serializedName: "JsonField",
  type: {
    name: "Composite",
    className: "JsonField",
    modelProperties: {
      sourceField: {
        serializedName: "sourceField",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const JsonFieldWithDefault: msRest.CompositeMapper = {
  serializedName: "JsonFieldWithDefault",
  type: {
    name: "Composite",
    className: "JsonFieldWithDefault",
    modelProperties: {
      sourceField: {
        serializedName: "sourceField",
        type: {
          name: "String"
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const JsonInputSchemaMapping: msRest.CompositeMapper = {
  serializedName: "Json",
  type: {
    name: "Composite",
    polymorphicDiscriminator: InputSchemaMapping.type.polymorphicDiscriminator,
    uberParent: "InputSchemaMapping",
    className: "JsonInputSchemaMapping",
    modelProperties: {
      ...InputSchemaMapping.type.modelProperties,
      id: {
        serializedName: "properties.id",
        type: {
          name: "Composite",
          className: "JsonField"
        }
      },
      topic: {
        serializedName: "properties.topic",
        type: {
          name: "Composite",
          className: "JsonField"
        }
      },
      eventTime: {
        serializedName: "properties.eventTime",
        type: {
          name: "Composite",
          className: "JsonField"
        }
      },
      eventType: {
        serializedName: "properties.eventType",
        type: {
          name: "Composite",
          className: "JsonFieldWithDefault"
        }
      },
      subject: {
        serializedName: "properties.subject",
        type: {
          name: "Composite",
          className: "JsonFieldWithDefault"
        }
      },
      dataVersion: {
        serializedName: "properties.dataVersion",
        type: {
          name: "Composite",
          className: "JsonFieldWithDefault"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Domain: msRest.CompositeMapper = {
  serializedName: "Domain",
  type: {
    name: "Composite",
    className: "Domain",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      endpoint: {
        readOnly: true,
        serializedName: "properties.endpoint",
        type: {
          name: "String"
        }
      },
      inputSchema: {
        serializedName: "properties.inputSchema",
        defaultValue: 'EventGridSchema',
        type: {
          name: "String"
        }
      },
      inputSchemaMapping: {
        serializedName: "properties.inputSchemaMapping",
        type: {
          name: "Composite",
          className: "InputSchemaMapping"
        }
      },
      metricResourceId: {
        readOnly: true,
        serializedName: "properties.metricResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DomainUpdateParameters: msRest.CompositeMapper = {
  serializedName: "DomainUpdateParameters",
  type: {
    name: "Composite",
    className: "DomainUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DomainSharedAccessKeys: msRest.CompositeMapper = {
  serializedName: "DomainSharedAccessKeys",
  type: {
    name: "Composite",
    className: "DomainSharedAccessKeys",
    modelProperties: {
      key1: {
        serializedName: "key1",
        type: {
          name: "String"
        }
      },
      key2: {
        serializedName: "key2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DomainRegenerateKeyRequest: msRest.CompositeMapper = {
  serializedName: "DomainRegenerateKeyRequest",
  type: {
    name: "Composite",
    className: "DomainRegenerateKeyRequest",
    modelProperties: {
      keyName: {
        required: true,
        serializedName: "keyName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DomainTopic: msRest.CompositeMapper = {
  serializedName: "DomainTopic",
  type: {
    name: "Composite",
    className: "DomainTopic",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventSubscriptionDestination: msRest.CompositeMapper = {
  serializedName: "EventSubscriptionDestination",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "endpointType",
      clientName: "endpointType"
    },
    uberParent: "EventSubscriptionDestination",
    className: "EventSubscriptionDestination",
    modelProperties: {
      endpointType: {
        required: true,
        serializedName: "endpointType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AdvancedFilter: msRest.CompositeMapper = {
  serializedName: "AdvancedFilter",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "operatorType",
      clientName: "operatorType"
    },
    uberParent: "AdvancedFilter",
    className: "AdvancedFilter",
    modelProperties: {
      key: {
        serializedName: "key",
        type: {
          name: "String"
        }
      },
      operatorType: {
        required: true,
        serializedName: "operatorType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventSubscriptionFilter: msRest.CompositeMapper = {
  serializedName: "EventSubscriptionFilter",
  type: {
    name: "Composite",
    className: "EventSubscriptionFilter",
    modelProperties: {
      subjectBeginsWith: {
        serializedName: "subjectBeginsWith",
        type: {
          name: "String"
        }
      },
      subjectEndsWith: {
        serializedName: "subjectEndsWith",
        type: {
          name: "String"
        }
      },
      includedEventTypes: {
        serializedName: "includedEventTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      isSubjectCaseSensitive: {
        serializedName: "isSubjectCaseSensitive",
        defaultValue: false,
        type: {
          name: "Boolean"
        }
      },
      advancedFilters: {
        serializedName: "advancedFilters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AdvancedFilter"
            }
          }
        }
      }
    }
  }
};

export const RetryPolicy: msRest.CompositeMapper = {
  serializedName: "RetryPolicy",
  type: {
    name: "Composite",
    className: "RetryPolicy",
    modelProperties: {
      maxDeliveryAttempts: {
        serializedName: "maxDeliveryAttempts",
        type: {
          name: "Number"
        }
      },
      eventTimeToLiveInMinutes: {
        serializedName: "eventTimeToLiveInMinutes",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DeadLetterDestination: msRest.CompositeMapper = {
  serializedName: "DeadLetterDestination",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "endpointType",
      clientName: "endpointType"
    },
    uberParent: "DeadLetterDestination",
    className: "DeadLetterDestination",
    modelProperties: {
      endpointType: {
        required: true,
        serializedName: "endpointType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NumberInAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "NumberIn",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "NumberInAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const StorageBlobDeadLetterDestination: msRest.CompositeMapper = {
  serializedName: "StorageBlob",
  type: {
    name: "Composite",
    polymorphicDiscriminator: DeadLetterDestination.type.polymorphicDiscriminator,
    uberParent: "DeadLetterDestination",
    className: "StorageBlobDeadLetterDestination",
    modelProperties: {
      ...DeadLetterDestination.type.modelProperties,
      resourceId: {
        serializedName: "properties.resourceId",
        type: {
          name: "String"
        }
      },
      blobContainerName: {
        serializedName: "properties.blobContainerName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NumberNotInAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "NumberNotIn",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "NumberNotInAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const NumberLessThanAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "NumberLessThan",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "NumberLessThanAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const NumberGreaterThanAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "NumberGreaterThan",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "NumberGreaterThanAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const NumberLessThanOrEqualsAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "NumberLessThanOrEquals",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "NumberLessThanOrEqualsAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const NumberGreaterThanOrEqualsAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "NumberGreaterThanOrEquals",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "NumberGreaterThanOrEqualsAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BoolEqualsAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "BoolEquals",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "BoolEqualsAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      value: {
        serializedName: "value",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const StringInAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "StringIn",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "StringInAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const StringNotInAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "StringNotIn",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "StringNotInAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const StringBeginsWithAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "StringBeginsWith",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "StringBeginsWithAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const StringEndsWithAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "StringEndsWith",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "StringEndsWithAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const StringContainsAdvancedFilter: msRest.CompositeMapper = {
  serializedName: "StringContains",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AdvancedFilter.type.polymorphicDiscriminator,
    uberParent: "AdvancedFilter",
    className: "StringContainsAdvancedFilter",
    modelProperties: {
      ...AdvancedFilter.type.modelProperties,
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const WebHookEventSubscriptionDestination: msRest.CompositeMapper = {
  serializedName: "WebHook",
  type: {
    name: "Composite",
    polymorphicDiscriminator: EventSubscriptionDestination.type.polymorphicDiscriminator,
    uberParent: "EventSubscriptionDestination",
    className: "WebHookEventSubscriptionDestination",
    modelProperties: {
      ...EventSubscriptionDestination.type.modelProperties,
      endpointUrl: {
        serializedName: "properties.endpointUrl",
        type: {
          name: "String"
        }
      },
      endpointBaseUrl: {
        readOnly: true,
        serializedName: "properties.endpointBaseUrl",
        type: {
          name: "String"
        }
      },
      maxEventsPerBatch: {
        serializedName: "properties.maxEventsPerBatch",
        type: {
          name: "Number"
        }
      },
      preferredBatchSizeInKilobytes: {
        serializedName: "properties.preferredBatchSizeInKilobytes",
        type: {
          name: "Number"
        }
      },
      azureActiveDirectoryApplicationIdOrUri: {
        serializedName: "properties.azureActiveDirectoryApplicationIdOrUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventHubEventSubscriptionDestination: msRest.CompositeMapper = {
  serializedName: "EventHub",
  type: {
    name: "Composite",
    polymorphicDiscriminator: EventSubscriptionDestination.type.polymorphicDiscriminator,
    uberParent: "EventSubscriptionDestination",
    className: "EventHubEventSubscriptionDestination",
    modelProperties: {
      ...EventSubscriptionDestination.type.modelProperties,
      resourceId: {
        serializedName: "properties.resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageQueueEventSubscriptionDestination: msRest.CompositeMapper = {
  serializedName: "StorageQueue",
  type: {
    name: "Composite",
    polymorphicDiscriminator: EventSubscriptionDestination.type.polymorphicDiscriminator,
    uberParent: "EventSubscriptionDestination",
    className: "StorageQueueEventSubscriptionDestination",
    modelProperties: {
      ...EventSubscriptionDestination.type.modelProperties,
      resourceId: {
        serializedName: "properties.resourceId",
        type: {
          name: "String"
        }
      },
      queueName: {
        serializedName: "properties.queueName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HybridConnectionEventSubscriptionDestination: msRest.CompositeMapper = {
  serializedName: "HybridConnection",
  type: {
    name: "Composite",
    polymorphicDiscriminator: EventSubscriptionDestination.type.polymorphicDiscriminator,
    uberParent: "EventSubscriptionDestination",
    className: "HybridConnectionEventSubscriptionDestination",
    modelProperties: {
      ...EventSubscriptionDestination.type.modelProperties,
      resourceId: {
        serializedName: "properties.resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceBusQueueEventSubscriptionDestination: msRest.CompositeMapper = {
  serializedName: "ServiceBusQueue",
  type: {
    name: "Composite",
    polymorphicDiscriminator: EventSubscriptionDestination.type.polymorphicDiscriminator,
    uberParent: "EventSubscriptionDestination",
    className: "ServiceBusQueueEventSubscriptionDestination",
    modelProperties: {
      ...EventSubscriptionDestination.type.modelProperties,
      resourceId: {
        serializedName: "properties.resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServiceBusTopicEventSubscriptionDestination: msRest.CompositeMapper = {
  serializedName: "ServiceBusTopic",
  type: {
    name: "Composite",
    polymorphicDiscriminator: EventSubscriptionDestination.type.polymorphicDiscriminator,
    uberParent: "EventSubscriptionDestination",
    className: "ServiceBusTopicEventSubscriptionDestination",
    modelProperties: {
      ...EventSubscriptionDestination.type.modelProperties,
      resourceId: {
        serializedName: "properties.resourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureFunctionEventSubscriptionDestination: msRest.CompositeMapper = {
  serializedName: "AzureFunction",
  type: {
    name: "Composite",
    polymorphicDiscriminator: EventSubscriptionDestination.type.polymorphicDiscriminator,
    uberParent: "EventSubscriptionDestination",
    className: "AzureFunctionEventSubscriptionDestination",
    modelProperties: {
      ...EventSubscriptionDestination.type.modelProperties,
      resourceId: {
        serializedName: "properties.resourceId",
        type: {
          name: "String"
        }
      },
      maxEventsPerBatch: {
        serializedName: "properties.maxEventsPerBatch",
        type: {
          name: "Number"
        }
      },
      preferredBatchSizeInKilobytes: {
        serializedName: "properties.preferredBatchSizeInKilobytes",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const EventSubscription: msRest.CompositeMapper = {
  serializedName: "EventSubscription",
  type: {
    name: "Composite",
    className: "EventSubscription",
    modelProperties: {
      ...Resource.type.modelProperties,
      topic: {
        readOnly: true,
        serializedName: "properties.topic",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      destination: {
        serializedName: "properties.destination",
        type: {
          name: "Composite",
          className: "EventSubscriptionDestination"
        }
      },
      filter: {
        serializedName: "properties.filter",
        type: {
          name: "Composite",
          className: "EventSubscriptionFilter"
        }
      },
      labels: {
        serializedName: "properties.labels",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      expirationTimeUtc: {
        serializedName: "properties.expirationTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      eventDeliverySchema: {
        serializedName: "properties.eventDeliverySchema",
        type: {
          name: "String"
        }
      },
      retryPolicy: {
        serializedName: "properties.retryPolicy",
        type: {
          name: "Composite",
          className: "RetryPolicy"
        }
      },
      deadLetterDestination: {
        serializedName: "properties.deadLetterDestination",
        type: {
          name: "Composite",
          className: "DeadLetterDestination"
        }
      }
    }
  }
};

export const EventSubscriptionUpdateParameters: msRest.CompositeMapper = {
  serializedName: "EventSubscriptionUpdateParameters",
  type: {
    name: "Composite",
    className: "EventSubscriptionUpdateParameters",
    modelProperties: {
      destination: {
        serializedName: "destination",
        type: {
          name: "Composite",
          className: "EventSubscriptionDestination"
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "Composite",
          className: "EventSubscriptionFilter"
        }
      },
      labels: {
        serializedName: "labels",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      expirationTimeUtc: {
        serializedName: "expirationTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      eventDeliverySchema: {
        serializedName: "eventDeliverySchema",
        type: {
          name: "String"
        }
      },
      retryPolicy: {
        serializedName: "retryPolicy",
        type: {
          name: "Composite",
          className: "RetryPolicy"
        }
      },
      deadLetterDestination: {
        serializedName: "deadLetterDestination",
        type: {
          name: "Composite",
          className: "DeadLetterDestination"
        }
      }
    }
  }
};

export const EventSubscriptionFullUrl: msRest.CompositeMapper = {
  serializedName: "EventSubscriptionFullUrl",
  type: {
    name: "Composite",
    className: "EventSubscriptionFullUrl",
    modelProperties: {
      endpointUrl: {
        serializedName: "endpointUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationInfo: msRest.CompositeMapper = {
  serializedName: "OperationInfo",
  type: {
    name: "Composite",
    className: "OperationInfo",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationInfo"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const Topic: msRest.CompositeMapper = {
  serializedName: "Topic",
  type: {
    name: "Composite",
    className: "Topic",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      endpoint: {
        readOnly: true,
        serializedName: "properties.endpoint",
        type: {
          name: "String"
        }
      },
      inputSchema: {
        serializedName: "properties.inputSchema",
        defaultValue: 'EventGridSchema',
        type: {
          name: "String"
        }
      },
      inputSchemaMapping: {
        serializedName: "properties.inputSchemaMapping",
        type: {
          name: "Composite",
          className: "InputSchemaMapping"
        }
      },
      metricResourceId: {
        readOnly: true,
        serializedName: "properties.metricResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TopicUpdateParameters: msRest.CompositeMapper = {
  serializedName: "TopicUpdateParameters",
  type: {
    name: "Composite",
    className: "TopicUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const TopicSharedAccessKeys: msRest.CompositeMapper = {
  serializedName: "TopicSharedAccessKeys",
  type: {
    name: "Composite",
    className: "TopicSharedAccessKeys",
    modelProperties: {
      key1: {
        serializedName: "key1",
        type: {
          name: "String"
        }
      },
      key2: {
        serializedName: "key2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TopicRegenerateKeyRequest: msRest.CompositeMapper = {
  serializedName: "TopicRegenerateKeyRequest",
  type: {
    name: "Composite",
    className: "TopicRegenerateKeyRequest",
    modelProperties: {
      keyName: {
        required: true,
        serializedName: "keyName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventType: msRest.CompositeMapper = {
  serializedName: "EventType",
  type: {
    name: "Composite",
    className: "EventType",
    modelProperties: {
      ...Resource.type.modelProperties,
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      schemaUrl: {
        serializedName: "properties.schemaUrl",
        type: {
          name: "String"
        }
      },
      isInDefaultSet: {
        serializedName: "properties.isInDefaultSet",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const TopicTypeInfo: msRest.CompositeMapper = {
  serializedName: "TopicTypeInfo",
  type: {
    name: "Composite",
    className: "TopicTypeInfo",
    modelProperties: {
      ...Resource.type.modelProperties,
      provider: {
        serializedName: "properties.provider",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      resourceRegionType: {
        serializedName: "properties.resourceRegionType",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      supportedLocations: {
        serializedName: "properties.supportedLocations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DomainsListResult: msRest.CompositeMapper = {
  serializedName: "DomainsListResult",
  type: {
    name: "Composite",
    className: "DomainsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Domain"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DomainTopicsListResult: msRest.CompositeMapper = {
  serializedName: "DomainTopicsListResult",
  type: {
    name: "Composite",
    className: "DomainTopicsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DomainTopic"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventSubscriptionsListResult: msRest.CompositeMapper = {
  serializedName: "EventSubscriptionsListResult",
  type: {
    name: "Composite",
    className: "EventSubscriptionsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EventSubscription"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationsListResult: msRest.CompositeMapper = {
  serializedName: "OperationsListResult",
  type: {
    name: "Composite",
    className: "OperationsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const TopicsListResult: msRest.CompositeMapper = {
  serializedName: "TopicsListResult",
  type: {
    name: "Composite",
    className: "TopicsListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Topic"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventTypesListResult: msRest.CompositeMapper = {
  serializedName: "EventTypesListResult",
  type: {
    name: "Composite",
    className: "EventTypesListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EventType"
            }
          }
        }
      }
    }
  }
};

export const TopicTypesListResult: msRest.CompositeMapper = {
  serializedName: "TopicTypesListResult",
  type: {
    name: "Composite",
    className: "TopicTypesListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TopicTypeInfo"
            }
          }
        }
      }
    }
  }
};

export const discriminators = {
  'InputSchemaMapping' : InputSchemaMapping,
  'InputSchemaMapping.Json' : JsonInputSchemaMapping,
  'EventSubscriptionDestination' : EventSubscriptionDestination,
  'AdvancedFilter' : AdvancedFilter,
  'DeadLetterDestination' : DeadLetterDestination,
  'AdvancedFilter.NumberIn' : NumberInAdvancedFilter,
  'DeadLetterDestination.StorageBlob' : StorageBlobDeadLetterDestination,
  'AdvancedFilter.NumberNotIn' : NumberNotInAdvancedFilter,
  'AdvancedFilter.NumberLessThan' : NumberLessThanAdvancedFilter,
  'AdvancedFilter.NumberGreaterThan' : NumberGreaterThanAdvancedFilter,
  'AdvancedFilter.NumberLessThanOrEquals' : NumberLessThanOrEqualsAdvancedFilter,
  'AdvancedFilter.NumberGreaterThanOrEquals' : NumberGreaterThanOrEqualsAdvancedFilter,
  'AdvancedFilter.BoolEquals' : BoolEqualsAdvancedFilter,
  'AdvancedFilter.StringIn' : StringInAdvancedFilter,
  'AdvancedFilter.StringNotIn' : StringNotInAdvancedFilter,
  'AdvancedFilter.StringBeginsWith' : StringBeginsWithAdvancedFilter,
  'AdvancedFilter.StringEndsWith' : StringEndsWithAdvancedFilter,
  'AdvancedFilter.StringContains' : StringContainsAdvancedFilter,
  'EventSubscriptionDestination.WebHook' : WebHookEventSubscriptionDestination,
  'EventSubscriptionDestination.EventHub' : EventHubEventSubscriptionDestination,
  'EventSubscriptionDestination.StorageQueue' : StorageQueueEventSubscriptionDestination,
  'EventSubscriptionDestination.HybridConnection' : HybridConnectionEventSubscriptionDestination,
  'EventSubscriptionDestination.ServiceBusQueue' : ServiceBusQueueEventSubscriptionDestination,
  'EventSubscriptionDestination.ServiceBusTopic' : ServiceBusTopicEventSubscriptionDestination,
  'EventSubscriptionDestination.AzureFunction' : AzureFunctionEventSubscriptionDestination

};
