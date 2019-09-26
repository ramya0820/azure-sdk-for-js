/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * The resource model definition.
 */
export interface Resource extends BaseResource {
  /**
   * Resource ID
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * Resource location
   */
  location?: string;
  /**
   * Resource tags
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly tags?: { [propertyName: string]: string };
}

/**
 * Specifies the hardware settings for the HANA instance.
 */
export interface HardwareProfile {
  /**
   * Name of the hardware type (vendor and/or their product name). Possible values include:
   * 'Cisco_UCS', 'HPE'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hardwareType?: HanaHardwareTypeNamesEnum;
  /**
   * Specifies the HANA instance SKU. Possible values include: 'S72m', 'S144m', 'S72', 'S144',
   * 'S192', 'S192m', 'S192xm', 'S96', 'S384', 'S384m', 'S384xm', 'S384xxm', 'S576m', 'S576xm',
   * 'S768', 'S768m', 'S768xm', 'S960m', 'S224o', 'S224m', 'S224om', 'S224oxm', 'S224oxxm'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hanaInstanceSize?: HanaInstanceSizeNamesEnum;
}

/**
 * Specifies the disk information fo the HANA instance
 */
export interface Disk {
  /**
   * The disk name.
   */
  name?: string;
  /**
   * Specifies the size of an empty data disk in gigabytes.
   */
  diskSizeGB?: number;
  /**
   * Specifies the logical unit number of the data disk. This value is used to identify data disks
   * within the VM and therefore must be unique for each data disk attached to a VM.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lun?: number;
}

/**
 * Specifies the storage settings for the HANA instance disks.
 */
export interface StorageProfile {
  /**
   * IP Address to connect to storage.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nfsIpAddress?: string;
  /**
   * Specifies information about the operating system disk used by the hana instance.
   */
  osDisks?: Disk[];
}

/**
 * Specifies the operating system settings for the HANA instance.
 */
export interface OSProfile {
  /**
   * Specifies the host OS name of the HANA instance.
   */
  computerName?: string;
  /**
   * This property allows you to specify the type of the OS.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly osType?: string;
  /**
   * Specifies version of operating system.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly version?: string;
  /**
   * Specifies the SSH public key used to access the operating system.
   */
  sshPublicKey?: string;
}

/**
 * Specifies the IP address of the network interface.
 */
export interface IpAddress {
  /**
   * Specifies the IP address of the network interface.
   */
  ipAddress?: string;
}

/**
 * Specifies the network settings for the HANA instance disks.
 */
export interface NetworkProfile {
  /**
   * Specifies the network interfaces for the HANA instance.
   */
  networkInterfaces?: IpAddress[];
  /**
   * Specifies the circuit id for connecting to express route.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly circuitId?: string;
}

/**
 * HANA instance info on Azure (ARM properties and HANA properties)
 */
export interface HanaInstance extends Resource {
  /**
   * Specifies the hardware settings for the HANA instance.
   */
  hardwareProfile?: HardwareProfile;
  /**
   * Specifies the storage settings for the HANA instance disks.
   */
  storageProfile?: StorageProfile;
  /**
   * Specifies the operating system settings for the HANA instance.
   */
  osProfile?: OSProfile;
  /**
   * Specifies the network settings for the HANA instance.
   */
  networkProfile?: NetworkProfile;
  /**
   * Specifies the HANA instance unique ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hanaInstanceId?: string;
  /**
   * Resource power state. Possible values include: 'starting', 'started', 'stopping', 'stopped',
   * 'restarting', 'unknown'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly powerState?: HanaInstancePowerStateEnum;
  /**
   * Resource proximity placement group
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly proximityPlacementGroup?: string;
  /**
   * Hardware revision of a HANA instance
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hwRevision?: string;
  /**
   * ARM ID of another HanaInstance that will share a network with this HanaInstance
   */
  partnerNodeId?: string;
  /**
   * State of provisioning of the HanaInstance. Possible values include: 'Accepted', 'Creating',
   * 'Updating', 'Failed', 'Succeeded', 'Deleting', 'Migrating'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: HanaProvisioningStatesEnum;
}

/**
 * Detailed HANA operation information
 */
export interface Display {
  /**
   * The localized friendly form of the resource provider name. This form is also expected to
   * include the publisher/company responsible. Use Title Casing. Begin with "Microsoft" for 1st
   * party services.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * The localized friendly form of the resource type related to this action/operation. This form
   * should match the public documentation for the resource provider. Use Title Casing. For
   * examples, refer to the “name” section.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * The localized friendly name for the operation as shown to the user. This name should be
   * concise (to fit in drop downs), but clear (self-documenting). Use Title Casing and include the
   * entity/resource to which it applies.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * The localized friendly description for the operation as shown to the user. This description
   * should be thorough, yet concise. It will be used in tool-tips and detailed views.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
  /**
   * The intended executor of the operation; governs the display of the operation in the RBAC UX
   * and the audit logs UX. Default value is 'user,system'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly origin?: string;
}

/**
 * HANA operation information
 */
export interface Operation {
  /**
   * The name of the operation being performed on this particular object. This name should match
   * the action name that appears in RBAC / the event service.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Displayed HANA operation information
   */
  display?: Display;
}

/**
 * Describes the format of Error response.
 */
export interface ErrorResponse {
  /**
   * Error code
   */
  code?: string;
  /**
   * Error message indicating why the operation failed.
   */
  message?: string;
}

/**
 * Tags field of the HANA instance.
 */
export interface Tags {
  /**
   * Tags field of the HANA instance.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Details needed to monitor a Hana Instance
 */
export interface MonitoringDetails {
  /**
   * ARM ID of an Azure Subnet with access to the HANA instance.
   */
  hanaSubnet?: string;
  /**
   * Hostname of the HANA Instance blade.
   */
  hanaHostname?: string;
  /**
   * Name of the database itself.
   */
  hanaDbName?: string;
  /**
   * The port number of the tenant DB. Used to connect to the DB.
   */
  hanaDbSqlPort?: number;
  /**
   * Username for the HANA database to login to for monitoring
   */
  hanaDbUsername?: string;
  /**
   * Password for the HANA database to login for monitoring
   */
  hanaDbPassword?: string;
}

/**
 * SAP monitor info on Azure (ARM properties and SAP monitor properties)
 */
export interface SapMonitor extends Resource {
  /**
   * Specifies the SAP monitor unique ID.
   */
  hanaSubnet?: string;
  /**
   * Hostname of the HANA instance.
   */
  hanaHostname?: string;
  /**
   * Database name of the HANA instance.
   */
  hanaDbName?: string;
  /**
   * Database port of the HANA instance.
   */
  hanaDbSqlPort?: number;
  /**
   * Database username of the HANA instance.
   */
  hanaDbUsername?: string;
  /**
   * Database password of the HANA instance.
   */
  hanaDbPassword?: string;
  /**
   * State of provisioning of the HanaInstance. Possible values include: 'Accepted', 'Creating',
   * 'Updating', 'Failed', 'Succeeded', 'Deleting', 'Migrating'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: HanaProvisioningStatesEnum;
}

/**
 * An interface representing HanaManagementClientOptions.
 */
export interface HanaManagementClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * List of HANA operations
 * @extends Array<Operation>
 */
export interface OperationList extends Array<Operation> {
}

/**
 * @interface
 * The response from the List HANA Instances operation.
 * @extends Array<HanaInstance>
 */
export interface HanaInstancesListResult extends Array<HanaInstance> {
  /**
   * The URL to get the next set of HANA instances.
   */
  nextLink?: string;
}

/**
 * @interface
 * The response from the List SAP monitors operation.
 * @extends Array<SapMonitor>
 */
export interface SapMonitorListResult extends Array<SapMonitor> {
  /**
   * The URL to get the next set of SAP monitors.
   */
  nextLink?: string;
}

/**
 * Defines values for HanaHardwareTypeNamesEnum.
 * Possible values include: 'Cisco_UCS', 'HPE'
 * @readonly
 * @enum {string}
 */
export type HanaHardwareTypeNamesEnum = 'Cisco_UCS' | 'HPE';

/**
 * Defines values for HanaInstanceSizeNamesEnum.
 * Possible values include: 'S72m', 'S144m', 'S72', 'S144', 'S192', 'S192m', 'S192xm', 'S96',
 * 'S384', 'S384m', 'S384xm', 'S384xxm', 'S576m', 'S576xm', 'S768', 'S768m', 'S768xm', 'S960m',
 * 'S224o', 'S224m', 'S224om', 'S224oxm', 'S224oxxm'
 * @readonly
 * @enum {string}
 */
export type HanaInstanceSizeNamesEnum = 'S72m' | 'S144m' | 'S72' | 'S144' | 'S192' | 'S192m' | 'S192xm' | 'S96' | 'S384' | 'S384m' | 'S384xm' | 'S384xxm' | 'S576m' | 'S576xm' | 'S768' | 'S768m' | 'S768xm' | 'S960m' | 'S224o' | 'S224m' | 'S224om' | 'S224oxm' | 'S224oxxm';

/**
 * Defines values for HanaInstancePowerStateEnum.
 * Possible values include: 'starting', 'started', 'stopping', 'stopped', 'restarting', 'unknown'
 * @readonly
 * @enum {string}
 */
export type HanaInstancePowerStateEnum = 'starting' | 'started' | 'stopping' | 'stopped' | 'restarting' | 'unknown';

/**
 * Defines values for HanaProvisioningStatesEnum.
 * Possible values include: 'Accepted', 'Creating', 'Updating', 'Failed', 'Succeeded', 'Deleting',
 * 'Migrating'
 * @readonly
 * @enum {string}
 */
export type HanaProvisioningStatesEnum = 'Accepted' | 'Creating' | 'Updating' | 'Failed' | 'Succeeded' | 'Deleting' | 'Migrating';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type HanaInstancesListResponse = HanaInstancesListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstancesListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type HanaInstancesListByResourceGroupResponse = HanaInstancesListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstancesListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type HanaInstancesGetResponse = HanaInstance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstance;
    };
};

/**
 * Contains response data for the create operation.
 */
export type HanaInstancesCreateResponse = HanaInstance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstance;
    };
};

/**
 * Contains response data for the update operation.
 */
export type HanaInstancesUpdateResponse = HanaInstance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstance;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type HanaInstancesBeginCreateResponse = HanaInstance & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstance;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type HanaInstancesListNextResponse = HanaInstancesListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstancesListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type HanaInstancesListByResourceGroupNextResponse = HanaInstancesListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: HanaInstancesListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type SapMonitorsListResponse = SapMonitorListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SapMonitorListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SapMonitorsGetResponse = SapMonitor & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SapMonitor;
    };
};

/**
 * Contains response data for the create operation.
 */
export type SapMonitorsCreateResponse = SapMonitor & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SapMonitor;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SapMonitorsUpdateResponse = SapMonitor & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SapMonitor;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type SapMonitorsBeginCreateResponse = SapMonitor & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SapMonitor;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type SapMonitorsListNextResponse = SapMonitorListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SapMonitorListResult;
    };
};
