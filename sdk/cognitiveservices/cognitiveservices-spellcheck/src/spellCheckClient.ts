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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { SpellCheckClientContext } from "./spellCheckClientContext";

class SpellCheckClient extends SpellCheckClientContext {
  /**
   * Initializes a new instance of the SpellCheckClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.SpellCheckClientOptions) {
    super(credentials, options);
  }

  /**
   * @summary The Bing Spell Check API lets you perform contextual grammar and spell checking. Bing
   * has developed a web-based spell-checker that leverages machine learning and statistical machine
   * translation to dynamically train a constantly evolving and highly contextual algorithm. The
   * spell-checker is based on a massive corpus of web searches and documents.
   * @param text The text string to check for spelling and grammar errors. The combined length of the
   * text string, preContextText string, and postContextText string may not exceed 10,000 characters.
   * You may specify this parameter in the query string of a GET request or in the body of a POST
   * request. Because of the query string length limit, you'll typically use a POST request unless
   * you're checking only short strings.
   * @param [options] The optional parameters
   * @returns Promise<Models.SpellCheckerResponse>
   */
  spellChecker(text: string, options?: Models.SpellCheckClientSpellCheckerOptionalParams): Promise<Models.SpellCheckerResponse>;
  /**
   * @param text The text string to check for spelling and grammar errors. The combined length of the
   * text string, preContextText string, and postContextText string may not exceed 10,000 characters.
   * You may specify this parameter in the query string of a GET request or in the body of a POST
   * request. Because of the query string length limit, you'll typically use a POST request unless
   * you're checking only short strings.
   * @param callback The callback
   */
  spellChecker(text: string, callback: msRest.ServiceCallback<Models.SpellCheck>): void;
  /**
   * @param text The text string to check for spelling and grammar errors. The combined length of the
   * text string, preContextText string, and postContextText string may not exceed 10,000 characters.
   * You may specify this parameter in the query string of a GET request or in the body of a POST
   * request. Because of the query string length limit, you'll typically use a POST request unless
   * you're checking only short strings.
   * @param options The optional parameters
   * @param callback The callback
   */
  spellChecker(text: string, options: Models.SpellCheckClientSpellCheckerOptionalParams, callback: msRest.ServiceCallback<Models.SpellCheck>): void;
  spellChecker(text: string, options?: Models.SpellCheckClientSpellCheckerOptionalParams | msRest.ServiceCallback<Models.SpellCheck>, callback?: msRest.ServiceCallback<Models.SpellCheck>): Promise<Models.SpellCheckerResponse> {
    return this.sendOperationRequest(
      {
        text,
        options
      },
      spellCheckerOperationSpec,
      callback) as Promise<Models.SpellCheckerResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const spellCheckerOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "spellcheck",
  urlParameters: [
    Parameters.endpoint
  ],
  queryParameters: [
    Parameters.actionType,
    Parameters.appName,
    Parameters.countryCode,
    Parameters.clientMachineName,
    Parameters.docId,
    Parameters.market,
    Parameters.sessionId,
    Parameters.setLang,
    Parameters.userId,
    Parameters.mode,
    Parameters.preContextText,
    Parameters.postContextText,
    Parameters.text
  ],
  headerParameters: [
    Parameters.xBingApisSDK,
    Parameters.acceptLanguage,
    Parameters.pragma,
    Parameters.userAgent,
    Parameters.clientId,
    Parameters.clientIp,
    Parameters.location
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SpellCheck
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

export {
  SpellCheckClient,
  SpellCheckClientContext,
  Models as SpellCheckModels,
  Mappers as SpellCheckMappers
};
