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
import * as coreArm from "@azure/core-arm";

const packageName = "@azure/keyvault-secrets";
const packageVersion = "4.0.0-preview.2";

export class KeyVaultClientContext extends coreArm.AzureServiceClient {
  credentials: coreHttp.ServiceClientCredentials | coreHttp.TokenCredential;
  apiVersion?: string;

  /**
   * Initializes a new instance of the KeyVaultClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(
    credentials: coreHttp.ServiceClientCredentials | coreHttp.TokenCredential,
    options?: coreArm.AzureServiceClientOptions
  ) {
    if (credentials == undefined) {
      throw new Error("'credentials' cannot be null.");
    }

    if (!options) {
      options = {};
    }
    if (!options.userAgent) {
      const defaultUserAgent = coreArm.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.apiVersion = "7.0";
    this.acceptLanguage = "en-US";
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = "{vaultBaseUrl}";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;

    if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if (
      options.longRunningOperationRetryTimeout !== null &&
      options.longRunningOperationRetryTimeout !== undefined
    ) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}
