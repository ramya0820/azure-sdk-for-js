// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Constants,
  serializeJsonToAtomXml,
  HttpOperationResponse,
  buildAtomError
} from "@azure/core-http";

/**
 * @ignore
 * Type representing the JSON representation of XML request data
 */
interface XMLRequestInJSON {
  [key: string]: {
    $: { xmlns: string };
    [key: string]: any;
  };
}

/**
 * @ignore
 * Type representing the JSON representation of XML response data
 */
interface XMLResponseInJSON {
  [key: string]: any;
}

/**
 * Serializes input information to construct the Atom XML request
 * @param resourceName
 * @param resource
 * @param properties
 * @param xmlNamespace
 */
export function serializeToAtomXmlRequest(
  resourceName: string,
  resource: any,
  properties: string[],
  xmlNamespace: string
): string {
  const content: XMLRequestInJSON = {};
  content[resourceName] = {
    $: {
      xmlns: xmlNamespace
    }
  };

  if (resource) {
    // Sort properties according to what is allowed by the service
    properties.forEach((property: string) => {
      if (resource[property] !== undefined) {
        content[resourceName][property] = resource[property];
      }
    });
  }

  return serializeJsonToAtomXml(content);
}

/**
 * Transforms response to contain the parsed data.
 * @param nameProperties The set of 'name' properties to be constructed on the
 * resultant object e.g., QueueName, TopicName, etc.
 * @param response
 * @param shouldParseResponse
 */
export async function deserializeAtomXmlResponse(
  nameProperties: string[],
  response: HttpOperationResponse
): Promise<HttpOperationResponse> {
  let errorBody: any;

  // If received data is a non-valid HTTP response, the body is expected to contain error information
  if (response.status < 200 || response.status >= 300) {
    errorBody = response.parsedBody;
    if (errorBody == undefined) {
      const HttpResponseCodes = Constants.HttpResponseCodes;
      const statusCode = response.status;
      if (isKnownResponseCode(statusCode)) {
        throw buildAtomError(
          {
            code: HttpResponseCodes[statusCode]
          },
          response
        );
      } else {
        throw buildAtomError(
          {
            code: `UnrecognizedHttpResponseStatus: ${statusCode}`
          },
          response
        );
      }
    } else {
      throw buildAtomError(errorBody, response);
    }
  }

  response.parsedBody = parseAtomResult(response.parsedBody, nameProperties);
  return response;
}

/**
 * @ignore
 * Utility to deserialize the given JSON content even further based on
 * if it's a single `entry` or `feed`
 * @param {object} atomResponseInJson
 * @nameProperties The set of 'name' properties to be constructed on the
 * resultant object e.g., QueueName, TopicName, etc.
 * */
function parseAtomResult(
  atomResponseInJson: any,
  nameProperties: string[]
): XMLResponseInJSON[] | XMLResponseInJSON | undefined {
  let result: any;
  if (!atomResponseInJson) {
    return;
  }

  if (atomResponseInJson.feed) {
    result = parseFeedResult(atomResponseInJson.feed);
  } else if (atomResponseInJson.entry) {
    result = parseEntryResult(atomResponseInJson.entry);
  }

  if (result) {
    if (Array.isArray(result)) {
      result.forEach((entry: XMLResponseInJSON) => {
        setName(entry, nameProperties);
      });
    } else {
      setName(result, nameProperties);
    }
    return result;
  }

  throw new Error("Unrecognized result: " + JSON.stringify(atomResponseInJson));
}

/**
 * @ignore
 * Utility to help parse given `entry` result
 * @param entry
 */
function parseEntryResult(entry: any): XMLResponseInJSON | undefined {
  let result: XMLResponseInJSON;

  if (
    typeof entry !== "object" ||
    entry == null ||
    typeof entry.content !== "object" ||
    entry.content == null
  ) {
    return undefined;
  }

  const contentElementNames = Object.keys(entry.content).filter(function(key) {
    return key !== Constants.XML_METADATA_MARKER;
  });

  if (contentElementNames && contentElementNames[0]) {
    const contentRootElementName = contentElementNames[0];
    delete entry.content[contentRootElementName][Constants.XML_METADATA_MARKER];
    result = entry.content[contentRootElementName];

    if (result) {
      if (entry[Constants.XML_METADATA_MARKER]) {
        result[Constants.ATOM_METADATA_MARKER] = entry[Constants.XML_METADATA_MARKER];
      } else {
        result[Constants.ATOM_METADATA_MARKER] = {};
      }

      result[Constants.ATOM_METADATA_MARKER]["ContentRootElement"] = contentRootElementName;

      Object.keys(entry).forEach((property: string) => {
        if (property !== "content" && property !== Constants.XML_METADATA_MARKER) {
          result[Constants.ATOM_METADATA_MARKER][property] = entry[property];
        }
      });

      return result;
    }
  }

  return undefined;
}

/**
 * @ignore
 * Utility to help parse given `feed` result
 * @param feed
 */
function parseFeedResult(feed: any): XMLResponseInJSON[] {
  const result = [];
  if (typeof feed === "object" && feed != null && feed.entry) {
    if (Array.isArray(feed.entry)) {
      feed.entry.forEach((entry: any) => {
        const parsedEntryResult = parseEntryResult(entry);
        if (parsedEntryResult) {
          result.push(parsedEntryResult);
        }
      });
    } else {
      const parsedEntryResult = parseEntryResult(feed.entry);
      if (parsedEntryResult) {
        result.push(parsedEntryResult);
      }
    }
  }
  return result;
}

function isKnownResponseCode(
  statusCode: number
): statusCode is keyof typeof Constants.HttpResponseCodes {
  return !!(Constants.HttpResponseCodes as { [statusCode: number]: string })[statusCode];
}

/**
 * @ignore
 * Extracts the applicable entity name(s) from the URL based on the known structure
 * and instantiates the corresponding name properties to the deserialized response
 *
 * For instance, following is the URL structure for when creating a rule
 * `<namespace-component>/<topic-name>/Subscriptions/<subscription-name>/Rules/<rule-name>`
 *
 * @param entry
 * @param nameProperties
 */
function setName(entry: XMLResponseInJSON, nameProperties: any): any {
  if (entry[Constants.ATOM_METADATA_MARKER]) {
    const parsedUrl = new URL(entry[Constants.ATOM_METADATA_MARKER].id);

    const parts = parsedUrl.pathname!.split("/");

    for (let i = 0; i * 2 < parts.length - 1; i++) {
      entry[nameProperties[i]] = parts[i * 2 + 1];
    }
  }
}
