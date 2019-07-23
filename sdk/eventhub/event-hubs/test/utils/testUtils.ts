// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import * as dotenv from "dotenv";
dotenv.config();

export const isNode =
  !!process && !!process.version && !!process.versions && !!process.versions.node;

export enum EnvVarKeys {
  EVENTHUB_CONNECTION_STRING = "EVENTHUB_CONNECTION_STRING",
  EVENTHUB_NAME = "EVENTHUB_NAME",
  IOTHUB_CONNECTION_STRING = "IOTHUB_CONNECTION_STRING",
  EVENTHUB_AAD_TENANT_ID = "EVENTHUB_AAD_TENANT_ID",
  EVENTHUB_AAD_CLIENT_ID = "EVENTHUB_AAD_CLIENT_ID",
  EVENTHUB_AAD_CLIENT_SECRET = "EVENTHUB_AADCLIENT_SECRET"
}

function getEnvVarValue(name: string): string | undefined {
  if (isNode) {
    return process.env[name];
  } else {
    // @ts-ignore
    return window.__env__[name];
  }
}

export function getEnvVars(): { [key in EnvVarKeys]: any } {
  return {
    [EnvVarKeys.EVENTHUB_CONNECTION_STRING]: getEnvVarValue(EnvVarKeys.EVENTHUB_CONNECTION_STRING),
    [EnvVarKeys.EVENTHUB_NAME]: getEnvVarValue(EnvVarKeys.EVENTHUB_NAME),
    [EnvVarKeys.IOTHUB_CONNECTION_STRING]: getEnvVarValue(EnvVarKeys.IOTHUB_CONNECTION_STRING),
    [EnvVarKeys.EVENTHUB_AAD_TENANT_ID]: getEnvVarValue(EnvVarKeys.EVENTHUB_AAD_TENANT_ID),
    [EnvVarKeys.EVENTHUB_AAD_CLIENT_ID]: getEnvVarValue(EnvVarKeys.EVENTHUB_AAD_CLIENT_ID),
    [EnvVarKeys.EVENTHUB_AAD_CLIENT_SECRET]: getEnvVarValue(EnvVarKeys.EVENTHUB_AAD_CLIENT_SECRET)
  };
}
