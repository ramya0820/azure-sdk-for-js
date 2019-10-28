// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import Long from "long";
import * as log from "../log";
import { generate_uuid } from "rhea-promise";
import isBuffer from "is-buffer";
import { Buffer } from "buffer";
import { ClientEntityContext } from "../../src/clientEntityContext";
import * as Constants from "../util/constants";

// This is the only dependency we have on DOM types, so rather than require
// the DOM lib we can just shim this in.
interface Navigator {
  hardwareConcurrency: number;
}
declare const navigator: Navigator;

/**
 * A constant that indicates whether the environment is node.js or browser based.
 */
export const isNode = typeof navigator === "undefined" && typeof process !== "undefined";

/**
 * @internal
 * Provides a uniue name by appending a string guid to the given string in the following format:
 * `{name}-{uuid}`.
 * @param name The nme of the entity
 */
export function getUniqueName(name: string): string {
  return `${name}-${generate_uuid()}`;
}

/**
 * @internal
 * If you try to turn a Guid into a Buffer in .NET, the bytes of the first three groups get
 * flipped within the group, but the last two groups don't get flipped, so we end up with a
 * different byte order. This is the order of bytes needed to make Service Bus recognize the token.
 *
 * @param lockToken The lock token whose bytes need to be reorded.
 * @returns Buffer - Buffer representing reordered bytes.
 */
export function reorderLockToken(lockTokenBytes: Buffer): Buffer {
  if (!lockTokenBytes || !Buffer.isBuffer(lockTokenBytes)) {
    return lockTokenBytes;
  }

  return Buffer.from([
    lockTokenBytes[3],
    lockTokenBytes[2],
    lockTokenBytes[1],
    lockTokenBytes[0],

    lockTokenBytes[5],
    lockTokenBytes[4],

    lockTokenBytes[7],
    lockTokenBytes[6],

    lockTokenBytes[8],
    lockTokenBytes[9],

    lockTokenBytes[10],
    lockTokenBytes[11],
    lockTokenBytes[12],
    lockTokenBytes[13],
    lockTokenBytes[14],
    lockTokenBytes[15]
  ]);
}

/**
 * @internal
 * Provides the time in milliseconds after which the lock renewal should occur.
 * @param lockedUntilUtc - The time until which the message is locked.
 */
export function calculateRenewAfterDuration(lockedUntilUtc: Date): number {
  const now = Date.now();
  const lockedUntil = lockedUntilUtc.getTime();
  const remainingTime = lockedUntil - now;
  log.utils("Locked until utc  : %d", lockedUntil);
  log.utils("Current time is   : %d", now);
  log.utils("Remaining time is : %d", remainingTime);
  if (remainingTime < 1000) {
    return 0;
  }
  const buffer = Math.min(remainingTime / 2, 10000); // 10 seconds
  const renewAfter = remainingTime - buffer;
  log.utils("Renew after       : %d", renewAfter);
  return renewAfter;
}

/**
 * @internal
 * Converts the .net ticks to a JS Date object.
 *
 * - The epoch for the DateTimeOffset type is `0000-01-01`, while the epoch for JS Dates is
 * `1970-01-01`.
 * - The DateTimeOffset ticks value for the date `1970-01-01` is `621355968000000000`.
 *   - Hence, to convert it to the JS epoch; we `subtract` the delta from the given value.
 * - Ticks in DateTimeOffset is `1/10000000` second, while ticks in JS Date is `1/1000` second.
 *   - Thus, we `divide` the value by `10000` to convert it to JS Date ticks.
 *
 * @param buf Input as a Buffer
 * @returns Date The JS Date object.
 */
export function convertTicksToDate(buf: number[]): Date {
  const epochMicroDiff: number = 621355968000000000;
  const longValue: Long = Long.fromBytesBE(buf);
  const timeInMS = longValue
    .sub(epochMicroDiff)
    .div(10000)
    .toNumber();
  const result = new Date(timeInMS);
  log.utils("The converted date is: %s", result.toString());
  return result;
}

/**
 * @internal
 * Returns the number of logical processors in the system.
 */
export function getProcessorCount(): number {
  if (isNode) {
    const os = require("os");
    return os.cpus().length;
  } else {
    return navigator.hardwareConcurrency || 1;
  }
}

/**
 * @internal
 * Converts any given input to a Buffer.
 * @param input The input that needs to be converted to a Buffer.
 */
export function toBuffer(input: any): Buffer {
  let result: any;
  log.utils(
    "[utils.toBuffer] The given message body that needs to be converted to buffer is: ",
    input
  );
  if (isBuffer(input)) {
    result = input;
  } else {
    // string, undefined, null, boolean, array, object, number should end up here
    // coercing undefined to null as that will ensure that null value will be given to the
    // customer on receive.
    if (input === undefined) input = null;
    try {
      const inputStr = JSON.stringify(input);
      result = Buffer.from(inputStr, "utf8");
    } catch (err) {
      const msg =
        `An error occurred while executing JSON.stringify() on the given input ` +
        input +
        `${err instanceof Error ? err.stack : JSON.stringify(err)}`;
      log.error("[utils.toBuffer] " + msg);
      throw err instanceof Error ? err : new Error(msg);
    }
  }
  log.utils("[utils.toBuffer] The converted buffer is: %O.", result);
  return result;
}
/**
 * @internal
 * Helper function to retrieve active receiver name, if it exists.
 */
export function getAssociatedReceiverName(
  clientEntityContext: ClientEntityContext,
  sessionId?: string
): string | undefined {
  let receiverName: string | undefined;
  if (sessionId != undefined) {
    if (clientEntityContext.messageSessions[sessionId]) {
      receiverName = clientEntityContext.messageSessions[sessionId].name;
    }
  } else if (clientEntityContext.batchingReceiver) {
    receiverName = clientEntityContext.batchingReceiver.name;
  } else if (clientEntityContext.streamingReceiver) {
    receiverName = clientEntityContext.streamingReceiver.name;
  }
  return receiverName;
}

/**
 *  @ignore
 * Helper utility to retrieve `string` value from given input,
 * or undefined if not passed in.
 * @param value
 */
export function getStringOrUndefined(value: any): string | undefined {
  if (value == undefined) {
    return undefined;
  }
  return value.toString();
}

/**
 *  @ignore
 * Helper utility to retrieve `integer` value from given string,
 * or undefined if not passed in.
 * @param value
 */
export function getIntegerOrUndefined(value: any): number | undefined {
  if (value == undefined) {
    return undefined;
  }
  const result = parseInt(value.toString());
  return result == NaN ? undefined : result;
}

/**
 *  @ignore
 * Helper utility to retrieve `boolean` value from given string,
 * or undefined if not passed in.
 * @param value
 */
export function getBooleanOrUndefined(value: any): boolean | undefined {
  if (value == undefined) {
    return undefined;
  }
  return (
    value
      .toString()
      .trim()
      .toLowerCase() === "true"
  );
}

/**
 *  @ignore
 * Helper utility to check for and return JSON like object,
 * or undefined if not passed in. Treats empty string as `undefined`.
 * @param value
 */
export function getJSObjectOrUndefined(value: any): any | undefined {
  if (value == undefined) return undefined;

  if (typeof value === "string" && value.trim() === "") return undefined;

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean" ||
    typeof value === "symbol"
  ) {
    throw new TypeError(`${String(value)} expected to be in proper JSON like format, or undefined`);
  }

  return value;
}

/**
 *  @ignore
 * Helper utility to retrieve message count details from given input,
 * or undefined if not passed in.
 * @param value
 */
export function getCountDetailsOrUndefined(value: any): MessageCountDetails | undefined {
  const jsonValue: any = getJSObjectOrUndefined(value);
  if (jsonValue != undefined) {
    return {
      activeMessageCount: parseInt(jsonValue["d2p1:ActiveMessageCount"]) || 0,
      deadLetterMessageCount: parseInt(jsonValue["d2p1:DeadLetterMessageCount"]) || 0,
      scheduledMessageCount: parseInt(jsonValue["d2p1:ScheduledMessageCount"]) || 0,
      transferMessageCount: parseInt(jsonValue["d2p1:TransferMessageCount"]) || 0,
      transferDeadLetterMessageCount:
        parseInt(jsonValue["d2p1:TransferDeadLetterMessageCount"]) || 0
    };
  }
  return undefined;
}

/**
 * Represents type of message count details in ATOM based management operations
 */
export type MessageCountDetails = {
  activeMessageCount: number;
  deadLetterMessageCount: number;
  scheduledMessageCount: number;
  transferMessageCount: number;
  transferDeadLetterMessageCount: number;
};

/**
 * Represents type of `AuthorizationRule` in ATOM based management operations
 */
export type AuthorizationRule = {
  claimType: string;
  claimValue: string;
  rights: { accessRights?: string[] };
  keyName: string;
  primaryKey?: string;
  secondaryKey?: string;
};

/**
 *  @ignore
 * Helper utility to retrieve array of `AuthorizationRule` from given input,
 * or undefined if not passed in.
 * @param value
 */
export function getAuthorizationRulesOrUndefined(value: any): AuthorizationRule[] | undefined {
  const authorizationRules: AuthorizationRule[] = [];
  const jsonValue: any = getJSObjectOrUndefined(value);
  if (jsonValue == undefined) {
    return undefined;
  }
  try {
    const rawAuthorizationRules = jsonValue.AuthorizationRule;
    if (Array.isArray(rawAuthorizationRules)) {
      for (let i = 0; i < rawAuthorizationRules.length; i++) {
        authorizationRules.push(buildAuthorizationRule(rawAuthorizationRules[i]));
      }
    } else {
      authorizationRules.push(buildAuthorizationRule(rawAuthorizationRules));
    }
    return authorizationRules;
  } catch (err) {
    throw new TypeError(
      `${jsonValue} expected to be in expected to be an array of AuthorizationRule instances, or undefined :: ${err.message}`
    );
  }
}

/**
 * Helper utility to build an instance of parsed authorization rule as `AuthorizationRule` from given input,
 * @param value
 */
function buildAuthorizationRule(value: any): AuthorizationRule {
  const authorizationRule: AuthorizationRule = {
    claimType: value["ClaimType"],
    claimValue: value["ClaimValue"],
    rights: {
      accessRights: value["Rights"]["AccessRights"]
    },
    keyName: value["KeyName"],
    primaryKey: value["PrimaryKey"],
    secondaryKey: value["SecondaryKey"]
  };
  return authorizationRule;
}

/**
 *  @ignore
 * Helper utility to extract output containing array of `RawAuthorizationRule` instances from given input,
 * or undefined if not passed in.
 * @param value
 */
export function getRawAuthorizationRules(authorizationRules: AuthorizationRule[] | undefined): any {
  if (!authorizationRules || !authorizationRules.length) {
    return undefined;
  }
  const rawAuthorizationRules: any[] = [];
  for (let i = 0; i < authorizationRules.length; i++) {
    rawAuthorizationRules.push(buildRawAuthorizationRule(authorizationRules[i]));
  }
  return { AuthorizationRule: rawAuthorizationRules };
}

/**
 * Helper utility to build an instance of raw authorization rule as RawAuthorizationRule from given `AuthorizationRule` input,
 * @param authorizationRule parsed Authorization Rule instance
 */
function buildRawAuthorizationRule(authorizationRule: AuthorizationRule): any {
  const rawAuthorizationRule: any = {
    ClaimType: authorizationRule.claimType,
    ClaimValue: authorizationRule.claimValue,
    Rights: {
      AccessRights: authorizationRule.rights.accessRights
    },
    KeyName: authorizationRule.keyName,
    PrimaryKey: authorizationRule.primaryKey,
    SecondaryKey: authorizationRule.secondaryKey
  };
  rawAuthorizationRule[Constants.XML_METADATA_MARKER] = {
    "p5:type": "SharedAccessAuthorizationRule",
    "xmlns:p5": "http://www.w3.org/2001/XMLSchema-instance"
  };
  return rawAuthorizationRule;
}
