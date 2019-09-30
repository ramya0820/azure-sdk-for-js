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

const packageName = "azure-storage-queue";
const packageVersion = "1.0.0";

export class StorageClientContext extends msRest.ServiceClient {
  url: string;
  version: string;

  /**
   * Initializes a new instance of the StorageClientContext class.
   * @param url The URL of the service account, queue or message that is the targe of the desired
   * operation.
   * @param [options] The parameter options
   */
  constructor(url: string, options?: msRest.ServiceClientOptions) {
    if (url == undefined) {
      throw new Error("'url' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.version = '2019-02-02';
    this.baseUri = "{url}";
    this.requestContentType = "application/json; charset=utf-8";
    this.url = url;
  }
}
