// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpOperationResponse } from "../httpOperationResponse";
import { WebResource } from "../webResource";
import {
  BaseRequestPolicy,
  RequestPolicy,
  RequestPolicyFactory,
  RequestPolicyOptions
} from "./requestPolicy";
import { AtomXmlSerializer } from "../util/atomXmlHelper";

/**
 * Create a new serialization RequestPolicyCreator that will serialize/deserialize
 * HTTP request bodies as they pass through the HTTP pipeline.
 */
export function atomSerializationPolicy(): RequestPolicyFactory {
  return {
    create: (nextPolicy: RequestPolicy, options: RequestPolicyOptions) => {
      return new AtomSerializationPolicy(nextPolicy, options);
    }
  };
}

/**
 * A RequestPolicy that will
 *  - serialize HTTP requests with input in JSON to ATOM based XML requests, and
 *  - deserialize the ATOM based XML responses as they pass through the HTTP pipeline.
 */
export class AtomSerializationPolicy extends BaseRequestPolicy {
  constructor(nextPolicy: RequestPolicy, options: RequestPolicyOptions) {
    super(nextPolicy, options);
  }

  public async sendRequest(request: WebResource): Promise<HttpOperationResponse> {
    if (
      request.atomXmlOperationSpec == undefined ||
      request.atomXmlOperationSpec.serializer == undefined
    ) {
      throw new Error(
        "atomXmlOperationSpec and atomXmlOperationSpec.serializer must be supplied on the requests when using this policy."
      );
    }

    const serializer: AtomXmlSerializer = request.atomXmlOperationSpec.serializer;

    if (request.body) {
      request.body = serializer.serialize(JSON.parse(request.body));
    }

    const response: HttpOperationResponse = await this._nextPolicy.sendRequest(request);

    return await serializer.deserialize(response, request.atomXmlOperationSpec.shouldParseResponse);
  }
}
