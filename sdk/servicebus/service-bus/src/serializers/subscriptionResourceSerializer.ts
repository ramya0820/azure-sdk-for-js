// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { HttpOperationResponse } from "@azure/core-http";
import * as Constants from "../util/constants";
import {
  serializeToAtomXmlRequest,
  deserializeAtomXmlResponse,
  AtomXmlSerializer
} from "../util/atomXmlHelper";
import {
  getStringOrUndefined,
  getIntegerOrUndefined,
  getBooleanOrUndefined,
  getCountDetailsOrUndefined,
  MessageCountDetails,
  getString,
  getInteger,
  getBoolean
} from "../util/utils";

/**
 * @ignore
 * Builds the subscription options object from the user provided options.
 * Handles the differences in casing for the property names,
 * converts values to string and ensures the right order as expected by the service
 * @param subscriptionOptions
 */
export function buildSubscriptionOptions(
  subscriptionOptions: SubscriptionOptions
): InternalSubscriptionOptions {
  return {
    LockDuration: subscriptionOptions.lockDuration,
    RequiresSession: getStringOrUndefined(subscriptionOptions.requiresSession),
    DefaultMessageTimeToLive: getStringOrUndefined(subscriptionOptions.defaultMessageTtl),
    DeadLetteringOnMessageExpiration: getStringOrUndefined(
      subscriptionOptions.deadLetteringOnMessageExpiration
    ),
    DeadLetteringOnFilterEvaluationExceptions: getStringOrUndefined(
      subscriptionOptions.deadLetteringOnFilterEvaluationExceptions
    ),
    DefaultRuleDescription: subscriptionOptions.defaultRuleDescription,
    MaxDeliveryCount: getStringOrUndefined(subscriptionOptions.maxDeliveryCount),
    EnableBatchedOperations: getStringOrUndefined(subscriptionOptions.enableBatchedOperations),
    ForwardTo: subscriptionOptions.forwardTo,
    SizeInBytes: getStringOrUndefined(subscriptionOptions.sizeInBytes),
    MaxSizeInMegabytes: getStringOrUndefined(subscriptionOptions.maxSizeInMegabytes),
    MessageCount: getStringOrUndefined(subscriptionOptions.messageCount),
    EnablePartitioning: getStringOrUndefined(subscriptionOptions.enablePartitioning),
    ForwardDeadLetteredMessagesTo: getStringOrUndefined(
      subscriptionOptions.forwardDeadLetteredMessagesTo
    ),
    AutoDeleteOnIdle: getStringOrUndefined(subscriptionOptions.autoDeleteOnIdle)
  };
}

/**
 * @ignore
 * Builds the subscription object from the raw json object gotten after deserializing
 * the response from the service
 * @param rawSubscription
 */
export function buildSubscription(rawSubscription: any): SubscriptionDetails {
  return {
    subscriptionName: getString(rawSubscription[Constants.SUBSCRIPTION_NAME], "subscriptionName"),
    topicName: getString(rawSubscription[Constants.TOPIC_NAME], "topicName"),

    lockDuration: getString(rawSubscription[Constants.LOCK_DURATION], "lockDuration"),
    sizeInBytes: getIntegerOrUndefined(rawSubscription[Constants.SIZE_IN_BYTES]),
    maxSizeInMegabytes: getIntegerOrUndefined(rawSubscription[Constants.MAX_SIZE_IN_MEGABYTES]),

    messageCount: getInteger(rawSubscription[Constants.MESSAGE_COUNT], "messageCount"),
    maxDeliveryCount: getInteger(rawSubscription[Constants.MAX_DELIVERY_COUNT], "maxDeliveryCount"),

    enablePartitioning: getBooleanOrUndefined(rawSubscription[Constants.ENABLE_PARTITIONING]),
    requiresSession: getBoolean(rawSubscription[Constants.REQUIRES_SESSION], "requiresSession"),
    enableBatchedOperations: getBoolean(
      rawSubscription[Constants.ENABLE_BATCHED_OPERATIONS],
      "enableBatchedOperations"
    ),

    defaultMessageTtl: getString(
      rawSubscription[Constants.DEFAULT_MESSAGE_TIME_TO_LIVE],
      "defaultMessageTtl"
    ),
    autoDeleteOnIdle: getString(rawSubscription[Constants.AUTO_DELETE_ON_IDLE], "autoDeleteOnIdle"),

    deadLetteringOnMessageExpiration: getBoolean(
      rawSubscription[Constants.DEAD_LETTERING_ON_MESSAGE_EXPIRATION],
      "deadLetteringOnMessageExpiration"
    ),
    deadLetteringOnFilterEvaluationExceptions: getBoolean(
      rawSubscription[Constants.DEAD_LETTERING_ON_FILTER_EVALUATION_EXCEPTIONS],
      "deadLetteringOnFilterEvaluationExceptions"
    ),
    forwardDeadLetteredMessagesTo: getStringOrUndefined(
      rawSubscription[Constants.FORWARD_DEADLETTERED_MESSAGES_TO]
    ),
    defaultRuleDescription: rawSubscription[Constants.DEFAULT_RULE_DESCRIPTION],

    messageCountDetails: getCountDetailsOrUndefined(rawSubscription[Constants.COUNT_DETAILS]),

    forwardTo: getStringOrUndefined(rawSubscription[Constants.FORWARD_TO]),
    userMetadata: rawSubscription[Constants.USER_METADATA],

    entityAvailabilityStatus: getString(
      rawSubscription[Constants.ENTITY_AVAILABILITY_STATUS],
      "entityAvailabilityStatus"
    ),
    status: getString(rawSubscription[Constants.STATUS], "status"),
    createdOn: getString(rawSubscription[Constants.CREATED_AT], "createdOn"),
    updatedOn: getString(rawSubscription[Constants.UPDATED_AT], "updatedOn"),
    accessedOn: rawSubscription[Constants.ACCESSED_AT]
  };
}

/**
 * Represents settable options on a subscription
 */
export interface SubscriptionOptions {
  /**
   * The default lock duration is applied to subscriptions that do not define a lock
   * duration. Settable only at subscription creation time.
   * This is to be specified in ISO-8601 duration format
   * such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   */
  lockDuration?: string;

  /**
   * The entity's size in bytes.
   *
   */
  sizeInBytes?: number;

  /**
   * Specifies the maximum topic size in megabytes. Any attempt to enqueue a message
   * that will cause the topic to exceed this value will fail. All messages that
   * are stored in the topic or any of its subscriptions count towards this value.
   * Multiple copies of a message that reside in one or multiple subscriptions count
   * as a single messages. For example, if message m exists once in subscription s1
   * and twice in subscription s2, m is counted as a single message.
   */
  maxSizeInMegabytes?: number;

  /**
   * The entity's message count.
   *
   */
  messageCount?: number;

  /**
   * Specifies whether the topic should be partitioned
   */
  enablePartitioning?: boolean;

  /**
   * If set to true, the subscription will be session-aware and only SessionReceiver
   * will be supported. Session-aware subscription are not supported through REST.
   * Settable only at subscription creation time.
   */
  requiresSession?: boolean;

  /**
   * Specifies if batched operations should be allowed.
   */
  enableBatchedOperations?: boolean;

  /**
   * Determines how long a message lives in the subscription. Based on whether
   * dead-lettering is enabled, a message whose TTL has expired will either be moved
   * to the subscription’s associated dead-letter sub-queue or permanently deleted.
   * This is to be specified in ISO-8601 duration format
   * such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   */
  defaultMessageTtl?: string;

  /**
   * Indicates the default rule description.
   *
   */
  defaultRuleDescription?: any;

  /**
   * Max idle time before entity is deleted.
   * This is to be specified in ISO-8601 duration format
   * such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   */
  autoDeleteOnIdle?: string;

  /**
   * If it is enabled and a message expires, the Service Bus moves the message from
   * the queue into the subscription’s dead-letter sub-queue. If disabled, message
   * will be permanently deleted from the subscription’s main queue.
   * Settable only at subscription creation time.
   */
  deadLetteringOnMessageExpiration?: boolean;

  /**
   * Determines how the Service Bus handles a message that causes an exception during
   * a subscription’s filter evaluation. If the value is set to true, the message that
   * caused the exception will be moved to the subscription’s dead-letter sub-queue.
   * Otherwise, it will be discarded. By default this parameter is set to true,
   * allowing the user a chance to investigate the cause of the exception.
   * It can occur from a malformed message or some incorrect assumptions being made
   * in the filter about the form of the message. Settable only at topic creation time.
   */
  deadLetteringOnFilterEvaluationExceptions?: boolean;

  /**
   * Relative path of the messaging entity the dead-lettered messages are to be forwarded to.
   * For e.g., Valid relative paths used in the ATOM based management API are
   *     - `<queue-name>`
   *     - `<topic-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>/Rules/<rule-name>`
   */
  forwardDeadLetteredMessagesTo?: string;

  /**
   * The maximum delivery count of messages after which if it is still not settled,
   * gets moved to the dead-letter sub-queue.
   *
   */
  maxDeliveryCount?: number;

  /**
   * Relative path of the messaging entity the messages are to be forwarded to.
   * For e.g., Valid relative paths used in the ATOM based management API are
   *     - `<queue-name>`
   *     - `<topic-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>/Rules/<rule-name>`
   */
  forwardTo?: string;

  /**
   * The user provided metadata information associated with the subscription description.
   * Used to specify textual content such as tags, labels, etc.
   * It can take a maximum of 1024 characters only.
   */
  userMetadata?: string;
}

/**
 * @ignore
 * Internal representation of settable options on a subscription
 */
export interface InternalSubscriptionOptions {
  /**
   * The default lock duration is applied to subscriptions that do not define a lock
   * duration. Settable only at subscription creation time.
   * This is to be specified in ISO-8601 duration format
   * such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   */
  LockDuration?: string;

  /**
   * The entity's size in bytes.
   *
   */
  SizeInBytes?: string;

  /**
   * Specifies the maximum topic size in megabytes. Any attempt to enqueue a message
   * that will cause the topic to exceed this value will fail. All messages that are
   * stored in the topic or any of its subscriptions count towards this value.
   * Multiple copies of a message that reside in one or multiple subscriptions count
   * as a single messages. For example, if message m exists once in subscription s1
   * and twice in subscription s2, m is counted as a single message.
   */
  MaxSizeInMegabytes?: string;

  /**
   * The entity's message count.
   *
   */
  MessageCount?: string;

  /**
   * Specifies whether the topic should be partitioned
   */
  EnablePartitioning?: string;

  /**
   * If set to true, the subscription will be session-aware and only SessionReceiver
   * will be supported. Session-aware subscription are not supported through REST.
   * Settable only at subscription creation time.
   */
  RequiresSession?: string;

  /**
   * Specifies if batched operations should be allowed.
   */
  EnableBatchedOperations?: string;

  /**
   * Determines how long a message lives in the subscription. Based on whether
   * dead-lettering is enabled, a message whose TTL has expired will either be moved
   * to the subscription’s associated dead-letter sub-queue or permanently deleted.
   * This is to be specified in ISO-8601 duration format
   * such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   */
  DefaultMessageTimeToLive?: string;

  /**
   * Indicates the default rule description.
   *
   */
  DefaultRuleDescription?: any;

  /**
   * Max idle time before entity is deleted.
   * This is to be specified in ISO-8601 duration format
   * such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   */
  AutoDeleteOnIdle?: string;

  /**
   * If it is enabled and a message expires, the Service Bus moves the message from
   * the queue into the subscription’s dead-letter sub-queue. If disabled, message
   * will be permanently deleted from the subscription’s main queue.
   * Settable only at subscription creation time.
   */
  DeadLetteringOnMessageExpiration?: string;

  /**
   * Determines how the Service Bus handles a message that causes an exception during
   * a subscription’s filter evaluation. If the value is set to true, the message
   * that caused the exception will be moved to the subscription’s dead-letter sub-queue.
   * Otherwise, it will be discarded. By default this parameter is set to true, allowing
   * the user a chance to investigate the cause of the exception. It can occur from a
   * malformed message or some incorrect assumptions being made in the filter about the
   * form of the message. Settable only at topic creation time.
   */
  DeadLetteringOnFilterEvaluationExceptions?: string;

  /**
   * Relative path of the messaging entity the dead-lettered messages are to be forwarded to.
   * For e.g., Valid relative paths used in the ATOM based management API are
   *     - `<queue-name>`
   *     - `<topic-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>/Rules/<rule-name>`
   */
  ForwardDeadLetteredMessagesTo?: string;

  /**
   * The maximum delivery count of messages after which if it is still not settled,
   * gets moved to the dead-letter sub-queue.
   *
   */
  MaxDeliveryCount?: string;

  /**
   * Relative path of the messaging entity the messages are to be forwarded to.
   * For e.g., Valid relative paths used in the ATOM based management API are
   *     - `<queue-name>`
   *     - `<topic-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>/Rules/<rule-name>`
   */
  ForwardTo?: string;

  /**
   * The user provided metadata information associated with the subscription description.
   * Used to specify textual content such as tags, labels, etc.
   * It can take a maximum of 1024 characters only.
   */
  UserMetadata?: string;
}

/**
 * Represents all attributes of a subscription entity
 */
export interface SubscriptionDetails {
  /**
   * Name of the subscription
   */
  subscriptionName: string;

  /**
   * Name of the topic
   */
  topicName: string;

  /**
   * The default lock duration is applied to subscriptions that do not define a
   * lock duration.
   * Settable only at subscription creation time.
   * This is specified in ISO-8601 duration format
   * such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   */
  lockDuration: string;

  /**
   * The entity's size in bytes.
   *
   */
  sizeInBytes?: number;

  /**
   * Specifies the maximum topic size in megabytes. Any attempt to enqueue a message
   * that will cause the topic to exceed this value will fail. All messages that are
   * stored in the topic or any of its subscriptions count towards this value.
   * Multiple copies of a message that reside in one or multiple subscriptions
   * count as a single messages. For example, if message m exists once in subscription
   * s1 and twice in subscription s2, m is counted as a single message.
   */
  maxSizeInMegabytes?: number;

  /**
   * The entity's message count.
   *
   */
  messageCount: number;

  /**
   * Specifies whether the topic should be partitioned
   */
  enablePartitioning?: boolean;

  /**
   * If set to true, the subscription will be session-aware and only SessionReceiver
   * will be supported. Session-aware subscription are not supported through REST.
   * Settable only at subscription creation time.
   */
  requiresSession: boolean;

  /**
   * Specifies if batched operations should be allowed.
   */
  enableBatchedOperations: boolean;

  /**
   * Determines how long a message lives in the subscription. Based on whether
   * dead-lettering is enabled, a message whose TTL has expired will either be moved
   * to the subscription’s associated dead-letter sub-queue or permanently deleted.
   * This is to be specified in ISO-8601 duration format
   * such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   */
  defaultMessageTtl?: string;

  /**
   * Indicates the default rule description.
   *
   */
  defaultRuleDescription?: any;

  /**
   * Max idle time before entity is deleted.
   * This is to be specified in ISO-8601 duration format
   * such as "PT1M" for 1 minute, "PT5S" for 5 seconds.
   */
  autoDeleteOnIdle: string;

  /**
   * If it is enabled and a message expires, the Service Bus moves the message from
   * the queue into the subscription’s dead-letter sub-queue. If disabled, message
   * will be permanently deleted from the subscription’s main queue. Settable only
   * at subscription creation time.
   */
  deadLetteringOnMessageExpiration: boolean;

  /**
   * Determines how the Service Bus handles a message that causes an exception
   * during a subscription’s filter evaluation. If the value is set to true,
   * the message that caused the exception will be moved to the subscription’s
   * dead-letter sub-queue. Otherwise, it will be discarded. By default this
   * parameter is set to true, allowing the user a chance to investigate the
   * cause of the exception. It can occur from a malformed message or some
   * incorrect assumptions being made in the filter about the form of the message.
   * Settable only at topic creation time.
   */
  deadLetteringOnFilterEvaluationExceptions: boolean;

  /**
   * Relative path of the messaging entity the dead-lettered messages are to be forwarded to.
   * For e.g., Valid relative paths used in the ATOM based management API are
   *     - `<queue-name>`
   *     - `<topic-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>/Rules/<rule-name>`
   */
  forwardDeadLetteredMessagesTo?: string;

  /**
   * The maximum delivery count of messages after which if it is still not settled,
   * gets moved to the dead-letter sub-queue.
   *
   */
  maxDeliveryCount: number;

  /**
   * Relative path of the messaging entity the messages are to be forwarded to.
   * For e.g., Valid relative paths used in the ATOM based management API are
   *     - `<queue-name>`
   *     - `<topic-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>`
   *     - `<topic-name>/Subscriptions/<subscription-name>/Rules/<rule-name>`
   */
  forwardTo?: string;

  /**
   * The user provided metadata information associated with the subscription description.
   * Used to specify textual content such as tags, labels, etc.
   * It can take a maximum of 1024 characters only.
   */
  userMetadata?: string;

  /**
   * Message count details
   */
  messageCountDetails?: MessageCountDetails;

  /**
   * Entity availability status
   */
  entityAvailabilityStatus: string;

  /**
   * Queue entity status
   */
  status: string;

  /**
   * Created at timestamp
   */
  createdOn: string;

  /**
   * Updated at timestamp
   */
  updatedOn: string;

  /**
   * Accessed at timestamp
   */
  accessedOn?: string;
}

/**
 * @ignore
 * SubscriptionResourceSerializer for serializing / deserializing Subscription entities
 */
export class SubscriptionResourceSerializer implements AtomXmlSerializer {
  serialize(resource: InternalSubscriptionOptions): object {
    return serializeToAtomXmlRequest("SubscriptionDescription", resource);
  }

  async deserialize(response: HttpOperationResponse): Promise<HttpOperationResponse> {
    return deserializeAtomXmlResponse(["TopicName", "SubscriptionName"], response);
  }
}
