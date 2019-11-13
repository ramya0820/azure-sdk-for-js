// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import {
  ServiceBusAtomManagementClient,
  QueueOptions,
  TopicOptions,
  SubscriptionOptions,
  RuleOptions
} from "../src";

import * as log from "../src/log";

import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import chaiExclude from "chai-exclude";
chai.use(chaiAsPromised);
chai.use(chaiExclude);
const should = chai.should();
const assert = chai.assert;

import * as dotenv from "dotenv";
dotenv.config();

import { EnvVarKeys, getEnvVars } from "./utils/envVarUtils";
const env = getEnvVars();

const serviceBusAtomManagementClient: ServiceBusAtomManagementClient = new ServiceBusAtomManagementClient(
  env[EnvVarKeys.SERVICEBUS_CONNECTION_STRING]
);

enum EntityType {
  QUEUE = "Queue",
  TOPIC = "Topic",
  SUBSCRIPTION = "Subscription",
  RULE = "Rule"
}

const alwaysBeExistingQueue = "alwaysbeexistingqueue";
const alwaysBeDeletedQueue = "alwaysbedeletedqueue";

const alwaysBeExistingTopic = "alwaysbeexistingtopic";
const alwaysBeDeletedTopic = "alwaysbedeletedtopic";

const alwaysBeExistingSubscription = "alwaysbeexistingsubscription";
const alwaysBeDeletedSubscription = "alwaysbedeletedsubscription";

const alwaysBeExistingRule = "alwaysbeexistingrule";
const alwaysBeDeletedRule = "alwaysbedeletedrule";

[
  {
    entityType: EntityType.QUEUE,
    alwaysBeExistingEntity: alwaysBeExistingQueue,
    alwaysBeDeletedEntity: alwaysBeDeletedQueue
  },
  {
    entityType: EntityType.TOPIC,
    alwaysBeExistingEntity: alwaysBeExistingTopic,
    alwaysBeDeletedEntity: alwaysBeDeletedTopic
  }
].forEach((testCase) => {
  describe(`Atom management - Clean namespace for "${testCase.entityType}"`, function(): void {
    it(`Deletes all ${testCase.entityType} entities successfully`, async () => {
      let moreToDelete = true;
      let entities;
      while (moreToDelete) {
        try {
          entities = await listEntities(testCase.entityType, undefined, undefined, undefined, 500);
          entities.forEach(async (entity: any) => {
            await deleteEntity(
              testCase.entityType,
              entity[testCase.entityType.toLowerCase() + "Name"]
            );
            log.httpAtomXml("deleted - ", entity[testCase.entityType.toLowerCase() + "Name"]);
          });
          if (entities == undefined || entities.length == 0) {
            moreToDelete = false;
          }
        } catch (err) {
          log.httpAtomXml("Ignoring clean up step - ", err);
          moreToDelete = false;
        }
      }
    });
  });
});

[
  {
    entityType: EntityType.QUEUE,
    alwaysBeExistingEntity: alwaysBeExistingQueue,
    alwaysBeDeletedEntity: alwaysBeDeletedQueue,
    parentTopicName: undefined,
    parentSubscriptionName: undefined
  },
  {
    entityType: EntityType.TOPIC,
    alwaysBeExistingEntity: alwaysBeExistingTopic,
    alwaysBeDeletedEntity: alwaysBeDeletedTopic
  },
  {
    entityType: EntityType.SUBSCRIPTION,
    alwaysBeExistingEntity: alwaysBeExistingSubscription,
    alwaysBeDeletedEntity: alwaysBeDeletedSubscription,
    parentTopicName: alwaysBeExistingTopic
  },
  {
    entityType: EntityType.RULE,
    alwaysBeExistingEntity: alwaysBeExistingRule,
    alwaysBeDeletedEntity: alwaysBeDeletedRule,
    parentTopicName: alwaysBeExistingTopic,
    parentSubscriptionName: alwaysBeExistingSubscription
  }
].forEach((testCase) => {
  describe(`Atom management - Basic CRUD on "${testCase.entityType}" entities #RunInBrowser`, function(): void {
    it(`Lists on non-existing entities for type ${testCase.entityType} returns empty array successfully`, async () => {
      let response;
      try {
        await deleteEntity(
          testCase.entityType,
          testCase.alwaysBeExistingEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }

      response = await listEntities(
        testCase.entityType,
        testCase.parentTopicName,
        testCase.parentSubscriptionName
      );

      try {
        await createEntity(
          testCase.entityType,
          testCase.alwaysBeExistingEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }

      should.equal(Array.isArray(response), true, "Result must be any array for list requests");
      should.equal(
        response.length,
        testCase.entityType == EntityType.RULE ? 1 : 0,
        "Result must be an empty array except for rules"
      );
    });

    it(`Lists on existing entities for type ${testCase.entityType} with top 1 returns the first entity`, async () => {
      let response;

      try {
        await createEntity(
          testCase.entityType,
          testCase.alwaysBeExistingEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }
      try {
        await createEntity(
          testCase.entityType,
          testCase.alwaysBeDeletedEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }

      response = await listEntities(
        testCase.entityType,
        testCase.parentTopicName,
        testCase.parentSubscriptionName,
        undefined,
        1
      );

      try {
        await deleteEntity(
          testCase.entityType,
          testCase.alwaysBeDeletedEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }

      should.equal(Array.isArray(response), true, "Result must be any array for list requests");
      should.equal(response.length, 1, "Result must be an empty array");
      should.equal(
        response[0][testCase.entityType.toLowerCase() + "Name"],
        testCase.entityType == EntityType.RULE ? "$Default" : testCase.alwaysBeDeletedEntity,
        "Entity name mismatch"
      );
    });

    it(`Lists on existing entities for type ${testCase.entityType} with skip 1 returns entities skipping first one`, async () => {
      let response;

      try {
        await createEntity(
          testCase.entityType,
          testCase.alwaysBeExistingEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }
      try {
        await createEntity(
          testCase.entityType,
          testCase.alwaysBeDeletedEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }

      response = await listEntities(
        testCase.entityType,
        testCase.parentTopicName,
        testCase.parentSubscriptionName,
        1,
        undefined
      );

      try {
        await deleteEntity(
          testCase.entityType,
          testCase.alwaysBeDeletedEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }

      should.equal(Array.isArray(response), true, "Result must be any array for list requests");
      should.equal(
        response.length,
        testCase.entityType == EntityType.RULE ? 2 : 1,
        "Result must be an empty array"
      );
      should.equal(
        response[0][testCase.entityType.toLowerCase() + "Name"],
        testCase.entityType == EntityType.RULE
          ? testCase.alwaysBeDeletedEntity
          : testCase.alwaysBeExistingEntity,
        "Entity name mismatch"
      );
    });

    it(`Creates a non-existent ${testCase.entityType} entity successfully`, async () => {
      let response;

      try {
        response = await deleteEntity(
          testCase.entityType,
          testCase.alwaysBeExistingEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }
      response = await createEntity(
        testCase.entityType,
        testCase.alwaysBeExistingEntity,
        testCase.parentTopicName,
        testCase.parentSubscriptionName
      );
      should.equal(
        response[testCase.entityType.toLowerCase() + "Name"],
        testCase.alwaysBeExistingEntity,
        "Entity name mismatch"
      );
    });

    it(`Creating an existent ${testCase.entityType} entity throws an error`, async () => {
      let response;

      try {
        await createEntity(
          testCase.entityType,
          testCase.alwaysBeExistingEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        response = err;
      }

      should.equal(response.statusCode, 409, "Error must not be undefined");
      should.equal(
        response.message.startsWith("The messaging entity") ||
          response.message.startsWith("Entity") ||
          response.message.startsWith("SubCode") ||
          response.message.startsWith("No service"),
        true,
        `Expected error message to be a textual content but got "${response.message}"`
      );
    });

    it.skip(`Lists available ${testCase.entityType} entities successfully`, async () => {
      let response;

      response = await listEntities(
        testCase.entityType,
        testCase.parentTopicName,
        testCase.parentSubscriptionName
      );

      should.equal(Array.isArray(response), true, "Result must be any array for list requests");
    });

    it(`Updates an existent ${testCase.entityType} entity successfully`, async () => {
      let response: any;

      response = await updateEntity(
        testCase.entityType,
        testCase.alwaysBeExistingEntity,
        testCase.parentTopicName,
        testCase.parentSubscriptionName
      );
      should.equal(
        response[testCase.entityType.toLowerCase() + "Name"],
        testCase.alwaysBeExistingEntity,
        "Entity name mismatch"
      );
    });

    it(`Update on non-existent ${testCase.entityType} entity throws an error`, async () => {
      let response;

      try {
        await deleteEntity(
          testCase.entityType,
          testCase.alwaysBeDeletedEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }
      try {
        await updateEntity(
          testCase.entityType,
          testCase.alwaysBeDeletedEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        response = err;
      }

      should.equal(response.statusCode, 404, "Error must not be undefined");
      should.equal(
        response.message.startsWith("The messaging entity") ||
          response.message.startsWith("Entity") ||
          response.message.startsWith("SubCode") ||
          response.message.startsWith("No service"),
        true,
        `Expected error message to be a textual content but got "${response.message}"`
      );
    });

    it(`Gets an existent ${testCase.entityType} entity successfully`, async () => {
      let response;

      response = await getEntity(
        testCase.entityType,
        testCase.alwaysBeExistingEntity,
        testCase.parentTopicName,
        testCase.parentSubscriptionName
      );
      should.equal(
        response[testCase.entityType.toLowerCase() + "Name"],
        testCase.alwaysBeExistingEntity,
        "Entity name mismatch"
      );
    });

    it(`Deletes a non-existent ${testCase.entityType} entity returns an error`, async () => {
      let response;

      try {
        await deleteEntity(
          testCase.entityType,
          "notexisting",
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        response = err;
      }

      should.equal(response.statusCode, 404);
      should.equal(
        response.message.startsWith("The messaging entity") ||
          response.message.startsWith("Entity") ||
          response.message.startsWith("SubCode") ||
          response.message.startsWith("No service"),
        true,
        `Expected error message to be a textual content but got "${response.message}"`
      );
    });

    it(`Deletes an existent ${testCase.entityType} entity successfully`, async () => {
      let response;

      try {
        await createEntity(
          testCase.entityType,
          testCase.alwaysBeDeletedEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }
      response = await deleteEntity(
        testCase.entityType,
        testCase.alwaysBeDeletedEntity,
        testCase.parentTopicName,
        testCase.parentSubscriptionName
      );

      should.equal(response._response.status, 200);
    });

    it(`Get on non-existent ${testCase.entityType} entity throws an error`, async () => {
      let response;
      try {
        await deleteEntity(
          testCase.entityType,
          testCase.alwaysBeExistingEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }
      try {
        response = await getEntity(
          testCase.entityType,
          testCase.alwaysBeExistingEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        response = err;
      }
      try {
        await createEntity(
          testCase.entityType,
          testCase.alwaysBeExistingEntity,
          testCase.parentTopicName,
          testCase.parentSubscriptionName
        );
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }

      should.equal(response.statusCode, 404, "Error must not be undefined");
      should.equal(response.code, "404", `Code expected to be "404" but received ${response.code}`);
      should.equal(
        response.message.startsWith("The messaging entity") ||
          response.message.startsWith("Entity") ||
          response.message.startsWith("SubCode") ||
          response.message.startsWith("No service"),
        true,
        `Expected error message to be a textual content but got "${response.message}"`
      );
    });
  });
});

// Queue tests
[
  {
    testCaseTitle: "Undefined queue options",
    input: undefined,
    output: {
      authorizationRules: undefined,
      autoDeleteOnIdle: "P10675199DT2H48M5.4775807S",
      messageCountDetails: undefined,
      deadLetteringOnMessageExpiration: false,
      defaultMessageTimeToLive: "P10675199DT2H48M5.4775807S",
      duplicateDetectionHistoryTimeWindow: "PT10M",
      enableBatchedOperations: true,
      enableExpress: false,
      enablePartitioning: false,
      entityAvailabilityStatus: "Available",
      forwardDeadLetteredMessagesTo: undefined,
      isAnonymousAccessible: false,
      lockDuration: "PT1M",
      maxDeliveryCount: 10,
      maxSizeInMegabytes: 1024,
      messageCount: 0,
      queueName: alwaysBeExistingQueue,
      requiresDuplicateDetection: false,
      requiresSession: false,
      sizeInBytes: 0,
      status: "Active",
      supportOrdering: true,
      forwardTo: undefined,
      path: undefined,
      userMetadata: undefined
    }
  },
  {
    testCaseTitle: "all properties",
    input: {
      // This should be a proper URL else the service returns an error
      // forwardDeadLetteredMessagesTo: "",
      lockDuration: "PT45S",
      messageCount: 5,
      sizeInBytes: 250,
      requiresDuplicateDetection: true,
      requiresSession: true,
      defaultMessageTimeToLive: "P2D",
      deadLetteringOnMessageExpiration: true,
      duplicateDetectionHistoryTimeWindow: "PT1M",
      maxDeliveryCount: 8,
      enableBatchedOperations: false,
      autoDeleteOnIdle: "PT1H",
      authorizationRules: [
        {
          claimType: "SharedAccessKey",
          claimValue: "None",
          rights: {
            accessRights: ["Manage", "Send", "Listen"]
          },
          keyName: "allClaims_v2",
          primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
          secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
        },
        {
          claimType: "SharedAccessKey",
          claimValue: "None",
          rights: {
            accessRights: ["Manage", "Send", "Listen"]
          },
          keyName: "allClaims_v3",
          primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
          secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
        }
      ],
      enablePartitioning: true
      // maxSizeInMegabytes: 2048, // For partitioned entities, this is 16384
    },
    output: {
      duplicateDetectionHistoryTimeWindow: "PT1M",
      lockDuration: "PT45S",
      messageCount: 5,
      sizeInBytes: 250,
      defaultMessageTimeToLive: "P2D",
      deadLetteringOnMessageExpiration: true,
      enableBatchedOperations: false,
      maxDeliveryCount: 8,
      requiresDuplicateDetection: true,
      requiresSession: true,
      autoDeleteOnIdle: "PT1H",
      authorizationRules: [
        {
          claimType: "SharedAccessKey",
          claimValue: "None",
          rights: {
            accessRights: ["Manage", "Send", "Listen"]
          },
          keyName: "allClaims_v2",
          primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
          secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
        },
        {
          claimType: "SharedAccessKey",
          claimValue: "None",
          rights: {
            accessRights: ["Manage", "Send", "Listen"]
          },
          keyName: "allClaims_v3",
          primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
          secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
        }
      ],

      enablePartitioning: true,
      maxSizeInMegabytes: 16384,
      supportOrdering: false,

      forwardDeadLetteredMessagesTo: undefined,
      forwardTo: undefined,
      path: undefined,
      userMetadata: undefined,

      messageCountDetails: undefined,
      enableExpress: false,
      entityAvailabilityStatus: "Available",
      isAnonymousAccessible: false,
      status: "Active",
      queueName: alwaysBeExistingQueue
    }
  }
].forEach((testCase) => {
  describe(`Queue creation with differing options #RunInBrowser`, function(): void {
    it(`${testCase.testCaseTitle}`, async () => {
      try {
        await deleteEntity(EntityType.QUEUE, alwaysBeExistingQueue);
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }
      const response = await createEntity(
        EntityType.QUEUE,
        alwaysBeExistingQueue,
        undefined,
        undefined,
        true,
        testCase.input
      );
      should.equal(response.queueName, alwaysBeExistingQueue, "Queue name mismatch");
      assert.deepEqualExcluding(response, testCase.output, [
        "_response",
        "createdAt",
        "updatedAt",
        "accessedAt"
      ]);
    });
  });
});

// Topic tests
// Create different topic each testcase as updates to same topic/subscription does not scale on service side and gives us error -
// "Resource Conflict Occurred. Another conflicting operation may be in progress.
// If this is a retry for failed operation, background clean up is still pending. Try again later."
[
  {
    topicName: "alwaysBeExistingTopic1",
    testCaseTitle: "Undefined topic options",
    input: undefined,
    output: {
      authorizationRules: undefined,
      autoDeleteOnIdle: "P10675199DT2H48M5.4775807S",
      messageCountDetails: undefined,
      defaultMessageTimeToLive: "P10675199DT2H48M5.4775807S",
      duplicateDetectionHistoryTimeWindow: "PT10M",
      enableBatchedOperations: true,
      enableExpress: false,
      enablePartitioning: false,
      enableSubscriptionPartitioning: false,
      maxSubscriptionsPerTopic: undefined,
      maxSqlFiltersPerTopic: undefined,
      maxCorrelationFiltersPerTopic: undefined,
      entityAvailabilityStatus: "Available",
      filteringMessagesBeforePublishing: false,
      isAnonymousAccessible: false,
      isExpress: false,
      maxDeliveryCount: undefined,
      maxSizeInMegabytes: 1024,
      messageCount: undefined,
      requiresDuplicateDetection: false,
      sizeInBytes: 0,
      status: "Active",
      subscriptionCount: undefined,
      supportOrdering: true,
      topicName: "alwaysBeExistingTopic1"
    }
  },
  {
    topicName: "alwaysBeExistingTopic2",
    testCaseTitle: "all properties",
    input: {
      sizeInBytes: 100,
      messageCount: 7,
      subscriptionCount: 6,
      maxDeliveryCount: 20,
      // enableExpress: true,

      // maxSubscriptionsPerTopic: 3,
      // maxSqlFiltersPerTopic: 4,
      // maxCorrelationFiltersPerTopic: 5,
      // isExpress: true,
      // enableSubscriptionPartitioning: true,
      // filteringMessagesBeforePublishing: true,

      // maxSizeInMegabytes: 2048, // For partitioned entities, this is 16384

      requiresDuplicateDetection: true,
      defaultMessageTimeToLive: "P2D",
      duplicateDetectionHistoryTimeWindow: "PT1M",
      enableBatchedOperations: false,
      autoDeleteOnIdle: "PT1H",
      enablePartitioning: true,
      supportOrdering: false
    },
    output: {
      sizeInBytes: 100,
      messageCount: 7,
      subscriptionCount: 6,
      maxDeliveryCount: 20,
      defaultMessageTimeToLive: "P2D",
      duplicateDetectionHistoryTimeWindow: "PT1M",
      autoDeleteOnIdle: "PT1H",
      enableBatchedOperations: false,
      supportOrdering: false,
      requiresDuplicateDetection: true,

      enablePartitioning: true,
      maxSizeInMegabytes: 16384,

      maxSubscriptionsPerTopic: undefined,
      maxSqlFiltersPerTopic: undefined,
      maxCorrelationFiltersPerTopic: undefined,
      // maxSubscriptionsPerTopic: 3,
      // maxSqlFiltersPerTopic: 4,
      // maxCorrelationFiltersPerTopic: 5,

      // enableExpress: true,
      enableExpress: false,
      authorizationRules: undefined,

      isExpress: false,
      enableSubscriptionPartitioning: false,
      filteringMessagesBeforePublishing: false,
      // isExpress: true,
      // enableSubscriptionPartitioning: true,
      // filteringMessagesBeforePublishing: true,

      messageCountDetails: undefined,
      entityAvailabilityStatus: "Available",
      isAnonymousAccessible: false,
      status: "Active",
      topicName: "alwaysBeExistingTopic2"
    }
  }
].forEach((testCase) => {
  describe(`Topic creation with differing options #RunInBrowser`, function(): void {
    it(`${testCase.testCaseTitle}`, async () => {
      try {
        await deleteEntity(EntityType.TOPIC, testCase.topicName);
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }
      const response = await createEntity(
        EntityType.TOPIC,
        testCase.topicName,
        undefined,
        undefined,
        true,
        undefined,
        testCase.input
      );

      should.equal(response.topicName, testCase.topicName, "Topic name mismatch");
      assert.deepEqualExcluding(response, testCase.output, [
        "_response",
        "createdAt",
        "updatedAt",
        "accessedAt"
      ]);
    });
  });
});

// Subscription tests
[
  {
    subscriptionName: "alwaysBeExistingSubscription1",
    topicName: alwaysBeExistingTopic,
    testCaseTitle: "Undefined subscription options",
    input: undefined,
    output: {
      autoDeleteOnIdle: "P10675199DT2H48M5.4775807S",
      messageCountDetails: undefined,
      deadLetteringOnMessageExpiration: false,
      deadLetteringOnFilterEvaluationExceptions: true,
      defaultMessageTimeToLive: "P10675199DT2H48M5.4775807S",
      forwardDeadLetteredMessagesTo: undefined,
      enableBatchedOperations: true,
      forwardTo: undefined,
      userMetadata: undefined,
      defaultRuleDescription: undefined,
      enablePartitioning: undefined,
      entityAvailabilityStatus: "Available",
      lockDuration: "PT1M",
      maxDeliveryCount: 10,
      maxSizeInMegabytes: undefined,
      messageCount: 0,
      requiresSession: false,
      sizeInBytes: undefined,
      status: "Active",
      subscriptionName: "alwaysBeExistingSubscription1",
      topicName: alwaysBeExistingTopic
    }
  },
  {
    subscriptionName: "alwaysBeExistingSubscription2",
    topicName: "alwaysBeExistingTopic1",
    testCaseTitle: "all properties",
    input: {
      lockDuration: "PT5M",
      maxDeliveryCount: 20,
      // This should be a proper URL else the service returns an error
      // forwardDeadLetteredMessagesTo: "",
      defaultMessageTimeToLive: "P2D",
      autoDeleteOnIdle: "PT1H",
      deadLetteringOnFilterEvaluationExceptions: false,
      deadLetteringOnMessageExpiration: true,
      enableBatchedOperations: false,
      requiresSession: true,

      // None of below work
      defaultRuleDescription: {
        Name: "test1",
        Filter: { SqlExpression: "1=1", CompatibilityLevel: "20" }
      },

      messageCount: 5,
      enablePartitioning: true,
      maxSizeInMegabytes: 2048,
      sizeInBytes: 500
    },
    output: {
      lockDuration: "PT5M",
      maxDeliveryCount: 20,
      defaultMessageTimeToLive: "P2D",
      autoDeleteOnIdle: "PT1H",
      deadLetteringOnFilterEvaluationExceptions: false,
      deadLetteringOnMessageExpiration: true,
      enableBatchedOperations: false,
      requiresSession: true,

      forwardDeadLetteredMessagesTo: undefined,
      defaultRuleDescription: undefined,

      messageCount: 0,
      enablePartitioning: undefined,
      maxSizeInMegabytes: undefined,
      sizeInBytes: undefined,

      forwardTo: undefined,
      userMetadata: undefined,
      messageCountDetails: undefined,
      entityAvailabilityStatus: "Available",
      status: "Active",

      subscriptionName: "alwaysBeExistingSubscription2",
      topicName: "alwaysBeExistingTopic1"
    }
  }
].forEach((testCase) => {
  describe(`Subscription creation with differing options #RunInBrowser`, function(): void {
    it(`${testCase.testCaseTitle}`, async () => {
      try {
        await deleteEntity(EntityType.SUBSCRIPTION, testCase.subscriptionName, testCase.topicName);
      } catch (err) {
        log.httpAtomXml("Ignoring clean up step");
      }
      const response = await createEntity(
        EntityType.SUBSCRIPTION,
        testCase.subscriptionName,
        testCase.topicName,
        undefined,
        true,
        undefined,
        undefined,
        testCase.input
      );
      should.equal(
        response.subscriptionName,
        testCase.subscriptionName,
        "Subscription name mismatch"
      );
      assert.deepEqualExcluding(response, testCase.output, [
        "_response",
        "createdAt",
        "updatedAt",
        "accessedAt"
      ]);
    });
  });
});

// Rule tests
[
  {
    testCaseTitle: "Undefined rule options",
    ruleName: "temp_rule_1",
    subscriptionName: "alwaysBeExistingSubscription2",
    topicName: "alwaysBeExistingTopic1",
    input: undefined,
    output: {
      filter: {
        sqlExpression: "1=1",
        requiresPreprocessing: undefined,
        sqlParameters: undefined,
        compatibilityLevel: 20
      },
      action: {
        sqlExpression: undefined,
        requiresPreprocessing: undefined,
        sqlParameters: undefined,
        compatibilityLevel: undefined
      },

      ruleName: "temp_rule_1",
      subscriptionName: "alwaysBeExistingSubscription2",
      topicName: "alwaysBeExistingTopic1"
    }
  },
  {
    testCaseTitle: "Sql Filter rule options",
    ruleName: "temp_rule_2",
    subscriptionName: "alwaysBeExistingSubscription2",
    topicName: "alwaysBeExistingTopic1",
    input: {
      filter: {
        sqlExpression: "stringValue = @stringParam AND intValue = @intParam",
        sqlParameters: [
          { key: "@intParam", value: 1, type: "int" },
          { key: "@stringParam", value: "b", type: "string" }
        ]
      },
      action: { sqlExpression: "SET a='b'" }
    },
    output: {
      filter: {
        sqlExpression: "stringValue = @stringParam AND intValue = @intParam",
        sqlParameters: [
          { key: "@intParam", value: 1, type: "int" },
          { key: "@stringParam", value: "b", type: "string" }
        ],
        requiresPreprocessing: false,
        compatibilityLevel: 20
      },
      action: {
        sqlExpression: "SET a='b'",
        requiresPreprocessing: false,
        sqlParameters: undefined,
        compatibilityLevel: 20
      },

      ruleName: "temp_rule_2",
      subscriptionName: "alwaysBeExistingSubscription2",
      topicName: "alwaysBeExistingTopic1"
    }
  },
  {
    testCaseTitle: "Correlation Filter rule options",
    ruleName: "temp_rule_3",
    subscriptionName: "alwaysBeExistingSubscription2",
    topicName: "alwaysBeExistingTopic1",
    input: {
      filter: {
        correlationId: "abcd"
      },
      action: { sqlExpression: "SET sys.label='GREEN'" }
    },
    output: {
      filter: {
        correlationId: "abcd",
        contentType: "",
        label: "",
        messageId: "",
        replyTo: "",
        replyToSessionId: "",
        sessionId: "",
        to: "",
        userProperties: undefined
      },
      action: {
        sqlExpression: "SET sys.label='GREEN'",
        requiresPreprocessing: false,
        sqlParameters: undefined,
        compatibilityLevel: 20
      },

      ruleName: "temp_rule_3",
      subscriptionName: "alwaysBeExistingSubscription2",
      topicName: "alwaysBeExistingTopic1"
    }
  }
].forEach((testCase) => {
  describe(`Rule creation with differing options #RunInBrowser`, function(): void {
    it(`${testCase.testCaseTitle}`, async () => {
      const response = await createEntity(
        EntityType.RULE,
        testCase.ruleName,
        testCase.topicName,
        testCase.subscriptionName,
        true,
        undefined,
        undefined,
        undefined,
        testCase.input
      );
      should.equal(
        response.subscriptionName,
        testCase.subscriptionName,
        "Subscription name mismatch"
      );
      assert.deepEqualExcluding(response, testCase.output, [
        "_response",
        "createdAt",
        "updatedAt",
        "accessedAt"
      ]);
    });
  });
});

// Queue tests
[
  {
    testCaseTitle: "Undefined queue options",
    input: undefined,
    output: {
      testErrorMessage: `Parameter "queueOptions" must be an object of type "QueueOptions" and cannot be undefined or null.`
    }
  },
  {
    testCaseTitle: "all properties",
    input: {
      // This should be a proper URL else the service returns an error
      // forwardDeadLetteredMessagesTo: "",
      lockDuration: "PT50S",
      messageCount: 6,
      sizeInBytes: 500,

      defaultMessageTimeToLive: "P1D",
      deadLetteringOnMessageExpiration: true,
      duplicateDetectionHistoryTimeWindow: "PT2M",
      maxDeliveryCount: 5,
      enableBatchedOperations: false,
      autoDeleteOnIdle: "PT2H",
      authorizationRules: [
        {
          claimType: "SharedAccessKey",
          claimValue: "None",
          rights: {
            accessRights: ["Send"]
          },
          keyName: "allClaims_v2",
          primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
          secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
        },
        {
          claimType: "SharedAccessKey",
          claimValue: "None",
          rights: {
            accessRights: ["Listen"]
          },
          keyName: "allClaims_v3",
          primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
          secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
        }
      ],

      enablePartitioning: true,
      requiresDuplicateDetection: true,
      requiresSession: true,

      maxSizeInMegabytes: 3072
      // maxSizeInMegabytes: 2048, // For partitioned entities, this is 16384
    },
    output: {
      duplicateDetectionHistoryTimeWindow: "PT2M",
      lockDuration: "PT50S",
      messageCount: 6,
      sizeInBytes: 500,
      defaultMessageTimeToLive: "P1D",
      deadLetteringOnMessageExpiration: true,
      enableBatchedOperations: false,
      maxDeliveryCount: 5,

      autoDeleteOnIdle: "PT2H",
      authorizationRules: [
        {
          claimType: "SharedAccessKey",
          claimValue: "None",
          rights: {
            accessRights: ["Send"]
          },
          keyName: "allClaims_v2",
          primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
          secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
        },
        {
          claimType: "SharedAccessKey",
          claimValue: "None",
          rights: {
            accessRights: ["Listen"]
          },
          keyName: "allClaims_v3",
          primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
          secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
        }
      ],

      maxSizeInMegabytes: 49152,

      forwardDeadLetteredMessagesTo: undefined,
      forwardTo: undefined,
      path: undefined,
      userMetadata: undefined,

      messageCountDetails: undefined,

      enableExpress: undefined,
      entityAvailabilityStatus: undefined,
      isAnonymousAccessible: undefined,
      supportOrdering: undefined,
      status: undefined,

      requiresDuplicateDetection: true,
      requiresSession: true,
      enablePartitioning: true,
      queueName: alwaysBeExistingQueue
    }
  }
].forEach((testCase) => {
  describe(`Queue update with differing options #RunInBrowser`, function(): void {
    it(`${testCase.testCaseTitle}`, async () => {
      try {
        const response = await updateEntity(
          EntityType.QUEUE,
          alwaysBeExistingQueue,
          undefined,
          undefined,
          true,
          testCase.input
        );

        assert.deepEqualExcluding(response, testCase.output, [
          "_response",
          "createdAt",
          "updatedAt",
          "accessedAt"
        ]);
      } catch (err) {
        checkForValidErrorScenario(err, testCase.output);
      }
    });
  });
});

// Topic tests
[
  {
    topicName: "alwaysBeExistingTopic1",
    testCaseTitle: "Undefined topic options",
    input: undefined,
    output: {
      testErrorMessage: `Parameter "topicOptions" must be an object of type "TopicOptions" and cannot be undefined or null.`
    }
  },
  {
    topicName: "alwaysBeExistingTopic1",
    testCaseTitle: "all properties",
    input: {
      sizeInBytes: 200,
      messageCount: 5,
      subscriptionCount: 8,
      maxDeliveryCount: 10,
      // enableExpress: true,

      // maxSubscriptionsPerTopic: 3,
      // maxSqlFiltersPerTopic: 4,
      // maxCorrelationFiltersPerTopic: 5,
      // isExpress: true,
      // enableSubscriptionPartitioning: true,
      // filteringMessagesBeforePublishing: true,

      // maxSizeInMegabytes: 2048, // For partitioned entities, this is 16384

      requiresDuplicateDetection: false,
      defaultMessageTimeToLive: "P1D",
      duplicateDetectionHistoryTimeWindow: "PT2M",
      autoDeleteOnIdle: "PT2H",
      supportOrdering: true,

      maxSizeInMegabytes: 3072,

      enablePartitioning: true
    },
    output: {
      sizeInBytes: 200,
      messageCount: 5,
      subscriptionCount: 8,
      maxDeliveryCount: 10,
      requiresDuplicateDetection: false,
      defaultMessageTimeToLive: "P1D",
      duplicateDetectionHistoryTimeWindow: "PT2M",
      autoDeleteOnIdle: "PT2H",

      supportOrdering: true,

      maxSizeInMegabytes: 3072,

      enableBatchedOperations: true,
      enablePartitioning: true,

      maxSubscriptionsPerTopic: undefined,
      maxSqlFiltersPerTopic: undefined,
      maxCorrelationFiltersPerTopic: undefined,
      // maxSubscriptionsPerTopic: 3,
      // maxSqlFiltersPerTopic: 4,
      // maxCorrelationFiltersPerTopic: 5,

      // enableExpress: true,
      enableExpress: false,
      authorizationRules: undefined,

      isExpress: false,
      enableSubscriptionPartitioning: false,
      filteringMessagesBeforePublishing: false,
      // isExpress: true,
      // enableSubscriptionPartitioning: true,
      // filteringMessagesBeforePublishing: true,

      entityAvailabilityStatus: undefined,
      isAnonymousAccessible: undefined,
      status: undefined,

      messageCountDetails: undefined,

      topicName: "alwaysbeexistingtopic1"
    }
  }
].forEach((testCase) => {
  describe(`Topic update with differing options #RunInBrowser`, function(): void {
    it(`${testCase.testCaseTitle}`, async () => {
      try {
        const response = await updateEntity(
          EntityType.TOPIC,
          testCase.topicName,
          undefined,
          undefined,
          true,
          undefined,
          testCase.input
        );

        assert.deepEqualExcluding(response, testCase.output, [
          "_response",
          "createdAt",
          "updatedAt",
          "accessedAt"
        ]);
      } catch (err) {
        checkForValidErrorScenario(err, testCase.output);
      }
    });
  });
});

// Subscription tests
[
  {
    topicName: alwaysBeExistingTopic,
    subscriptionName: "alwaysBeExistingSubscription1",
    testCaseTitle: "Undefined subscription options",
    input: undefined,
    output: {
      testErrorMessage: `Parameter "subscriptionOptions" must be an object of type "SubscriptionOptions" and cannot be undefined or null.`
    }
  },
  {
    topicName: alwaysBeExistingTopic,
    subscriptionName: "alwaysbeExistingSubscription1",
    testCaseTitle: "all properties",
    input: {
      lockDuration: "PT3M",
      maxDeliveryCount: 10,
      // This should be a proper URL else the service returns an error
      // forwardDeadLetteredMessagesTo: "",
      defaultMessageTimeToLive: "P1D",
      autoDeleteOnIdle: "PT2H",
      deadLetteringOnFilterEvaluationExceptions: true,
      deadLetteringOnMessageExpiration: false,
      enableBatchedOperations: true,

      defaultRuleDescription: {
        Name: "test1",
        Filter: { SqlExpression: "1=1", CompatibilityLevel: "20" }
      },

      messageCount: 5,
      maxSizeInMegabytes: 2048,
      sizeInBytes: 500,

      requiresSession: false,
      enablePartitioning: true
    },
    output: {
      lockDuration: "PT3M",
      maxDeliveryCount: 10,
      defaultMessageTimeToLive: "P1D",
      autoDeleteOnIdle: "PT2H",
      deadLetteringOnFilterEvaluationExceptions: true,
      deadLetteringOnMessageExpiration: false,
      enableBatchedOperations: true,

      forwardDeadLetteredMessagesTo: undefined,
      defaultRuleDescription: undefined,

      messageCount: 0,
      maxSizeInMegabytes: undefined,
      sizeInBytes: undefined,

      requiresSession: false,
      enablePartitioning: undefined,

      forwardTo: undefined,
      userMetadata: undefined,
      messageCountDetails: undefined,
      entityAvailabilityStatus: "Available",
      status: "Active",

      subscriptionName: "alwaysbeExistingSubscription1",
      topicName: alwaysBeExistingTopic
    }
  }
].forEach((testCase) => {
  describe(`Subscription update with differing options #RunInBrowser`, function(): void {
    it(`${testCase.testCaseTitle}`, async () => {
      try {
        const response = await updateEntity(
          EntityType.SUBSCRIPTION,
          testCase.subscriptionName,
          testCase.topicName,
          undefined,
          true,
          undefined,
          undefined,
          testCase.input
        );

        assert.deepEqualExcluding(response, testCase.output, [
          "_response",
          "createdAt",
          "updatedAt",
          "accessedAt"
        ]);
      } catch (err) {
        checkForValidErrorScenario(err, testCase.output);
      }
    });
  });
});

// Rule tests
[
  {
    testCaseTitle: "Undefined rule options",
    ruleName: "temp_rule_2",
    subscriptionName: "alwaysBeExistingSubscription2",
    topicName: "alwaysBeExistingTopic1",
    input: undefined,
    output: {
      testErrorMessage: `Parameter "ruleOptions" must be an object of type "RuleOptions" and cannot be undefined or null.`
    }
  },
  {
    testCaseTitle: "Sql Filter rule options",
    ruleName: "temp_rule_2",
    subscriptionName: "alwaysBeExistingSubscription2",
    topicName: "alwaysBeExistingTopic1",
    input: {
      filter: {
        sqlExpression: "stringValue = @stringParam",
        sqlParameters: [{ key: "@stringParam", value: "b", type: "string" }]
      },
      action: { sqlExpression: "SET a='c'" }
    },
    output: {
      filter: {
        sqlExpression: "stringValue = @stringParam",
        sqlParameters: [{ key: "@stringParam", value: "b", type: "string" }],
        requiresPreprocessing: false,
        compatibilityLevel: 20
      },
      action: {
        sqlExpression: "SET a='c'",
        requiresPreprocessing: false,
        sqlParameters: undefined,
        compatibilityLevel: 20
      },

      ruleName: "temp_rule_2",
      subscriptionName: "alwaysBeExistingSubscription2",
      topicName: "alwaysBeExistingTopic1"
    }
  },
  {
    testCaseTitle: "Correlation Filter rule options",
    ruleName: "temp_rule_3",
    subscriptionName: "alwaysBeExistingSubscription2",
    topicName: "alwaysBeExistingTopic1",
    input: {
      filter: {
        correlationId: "defg"
      },
      action: { sqlExpression: "SET sys.label='RED'" }
    },
    output: {
      filter: {
        correlationId: "defg",
        contentType: "",
        label: "",
        messageId: "",
        replyTo: "",
        replyToSessionId: "",
        sessionId: "",
        to: "",
        userProperties: undefined
      },
      action: {
        sqlExpression: "SET sys.label='RED'",
        requiresPreprocessing: false,
        sqlParameters: undefined,
        compatibilityLevel: 20
      },

      ruleName: "temp_rule_3",
      subscriptionName: "alwaysBeExistingSubscription2",
      topicName: "alwaysBeExistingTopic1"
    }
  }
].forEach((testCase) => {
  describe(`Rule update with differing options #RunInBrowser`, function(): void {
    it(`${testCase.testCaseTitle}`, async () => {
      try {
        const response = await updateEntity(
          EntityType.RULE,
          testCase.ruleName,
          testCase.topicName,
          testCase.subscriptionName,
          true,
          undefined,
          undefined,
          undefined,
          testCase.input
        );
        assert.deepEqualExcluding(response, testCase.output, [
          "_response",
          "createdAt",
          "updatedAt",
          "accessedAt"
        ]);
      } catch (err) {
        checkForValidErrorScenario(err, testCase.output);
      }
    });
  });
});

function checkForValidErrorScenario(err: any, expectedtestOutput: any) {
  let isErrorExpected = false;

  if (expectedtestOutput.testErrorMessage) {
    isErrorExpected = true;
    should.equal(
      err.message && err.message.startsWith(expectedtestOutput.testErrorMessage),
      true,
      `Expected error message to start with "${expectedtestOutput.testErrorMessage}" but received "${err}"`
    );
  }

  if (expectedtestOutput.testErrorCode) {
    isErrorExpected = true;
    should.equal(
      err.code && err.code.startsWith(expectedtestOutput.testErrorCode),
      true,
      `Expected error code to start with "${expectedtestOutput.testErrorCode}" but received "${err.code}"`
    );
  }

  if (!isErrorExpected) {
    throw err;
  }
}

async function createEntity(
  testEntityType: EntityType,
  entityPath: string,
  topicPath?: string,
  subscriptionPath?: string,
  overrideOptions?: boolean, // If this is false, then the default options will be populated as used for basic testing.
  queueOptions?: QueueOptions,
  topicOptions?: TopicOptions,
  subscriptionOptions?: SubscriptionOptions,
  ruleOptions?: RuleOptions
): Promise<any> {
  if (!overrideOptions) {
    if (queueOptions == undefined) {
      queueOptions = {
        lockDuration: "PT1M",
        authorizationRules: [
          {
            claimType: "SharedAccessKey",
            claimValue: "None",
            rights: {
              accessRights: ["Manage", "Send", "Listen"]
            },
            keyName: "allClaims_v1",
            primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
            secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
          }
        ]
      };
    }

    if (topicOptions == undefined) {
      topicOptions = {
        maxDeliveryCount: 10
      };
    }

    if (subscriptionOptions == undefined) {
      subscriptionOptions = {
        lockDuration: "PT1M",
        maxDeliveryCount: 10
      };
    }

    if (ruleOptions == undefined) {
      ruleOptions = {
        filter: {
          sqlExpression: "stringValue = @stringParam AND intValue = @intParam",
          sqlParameters: [
            { key: "@intParam", value: 1, type: "int" },
            { key: "@stringParam", value: "b", type: "string" }
          ]
        },
        action: { sqlExpression: "SET a='b'" }
      };
    }
  }

  switch (testEntityType) {
    case EntityType.QUEUE:
      const queueResponse = await serviceBusAtomManagementClient.createQueue(
        entityPath,
        queueOptions
      );
      return queueResponse;
    case EntityType.TOPIC:
      const topicResponse = await serviceBusAtomManagementClient.createTopic(
        entityPath,
        topicOptions
      );
      return topicResponse;
    case EntityType.SUBSCRIPTION:
      if (!topicPath) {
        throw new Error(
          "TestError: Topic path must be passed when invoking tests on subscriptions"
        );
      }
      const subscriptionResponse = await serviceBusAtomManagementClient.createSubscription(
        topicPath,
        entityPath,
        subscriptionOptions
      );
      return subscriptionResponse;
    case EntityType.RULE:
      if (!topicPath || !subscriptionPath) {
        throw new Error(
          "TestError: Topic path AND subscription path must be passed when invoking tests on rules"
        );
      }
      const ruleResponse = await serviceBusAtomManagementClient.createRule(
        topicPath,
        subscriptionPath,
        entityPath,
        ruleOptions
      );
      return ruleResponse;
  }
  throw new Error("TestError: Unrecognized EntityType");
}

async function getEntity(
  testEntityType: EntityType,
  entityPath: string,
  topicPath?: string,
  subscriptionPath?: string
): Promise<any> {
  switch (testEntityType) {
    case EntityType.QUEUE:
      const queueResponse = await serviceBusAtomManagementClient.getQueueDetails(entityPath);
      return queueResponse;
    case EntityType.TOPIC:
      const topicResponse = await serviceBusAtomManagementClient.getTopicDetails(entityPath);
      return topicResponse;
    case EntityType.SUBSCRIPTION:
      if (!topicPath) {
        throw new Error(
          "TestError: Topic path must be passed when invoking tests on subscriptions"
        );
      }
      const subscriptionResponse = await serviceBusAtomManagementClient.getSubscriptionDetails(
        topicPath,
        entityPath
      );
      return subscriptionResponse;
    case EntityType.RULE:
      if (!topicPath || !subscriptionPath) {
        throw new Error(
          "TestError: Topic path AND subscription path must be passed when invoking tests on rules"
        );
      }
      const ruleResponse = await serviceBusAtomManagementClient.getRule(
        topicPath,
        subscriptionPath,
        entityPath
      );
      return ruleResponse;
  }
  throw new Error("TestError: Unrecognized EntityType");
}

async function updateEntity(
  testEntityType: EntityType,
  entityPath: string,
  topicPath?: string,
  subscriptionPath?: string,
  overrideOptions?: boolean, // If this is false, then the default options will be populated as used for basic testing.
  queueOptions?: QueueOptions,
  topicOptions?: TopicOptions,
  subscriptionOptions?: SubscriptionOptions,
  ruleOptions?: RuleOptions
): Promise<any> {
  if (!overrideOptions) {
    if (queueOptions == undefined) {
      queueOptions = {
        lockDuration: "PT1M",
        authorizationRules: [
          {
            claimType: "SharedAccessKey",
            claimValue: "None",
            rights: {
              accessRights: ["Manage", "Send", "Listen"]
            },
            keyName: "allClaims_v1",
            primaryKey: "pNSRzKKm2vfdbCuTXMa9gOMHD66NwCTxJi4KWJX/TDc=",
            secondaryKey: "UreXLPWiP6Murmsq2HYiIXs23qAvWa36ZOL3gb9rXLs="
          }
        ]
      };
    }

    if (topicOptions == undefined) {
      topicOptions = {
        maxDeliveryCount: 10
      };
    }

    if (subscriptionOptions == undefined) {
      subscriptionOptions = {
        lockDuration: "PT1M",
        maxDeliveryCount: 10
      };
    }

    if (ruleOptions == undefined) {
      ruleOptions = {
        filter: {
          sqlExpression: "stringValue = @stringParam AND intValue = @intParam",
          sqlParameters: [
            { key: "@intParam", value: 1, type: "int" },
            { key: "@stringParam", value: "b", type: "string" }
          ]
        },
        action: { sqlExpression: "SET a='b'" }
      };
    }
  }

  switch (testEntityType) {
    case EntityType.QUEUE:
      const queueResponse = await serviceBusAtomManagementClient.updateQueue(
        entityPath,
        // @ts-ignore
        queueOptions
      );
      return queueResponse;
    case EntityType.TOPIC:
      const topicResponse = await serviceBusAtomManagementClient.updateTopic(
        entityPath,
        // @ts-ignore
        topicOptions
      );
      return topicResponse;
    case EntityType.SUBSCRIPTION:
      if (!topicPath) {
        throw new Error(
          "TestError: Topic path must be passed when invoking tests on subscriptions"
        );
      }
      const subscriptionResponse = await serviceBusAtomManagementClient.updateSubscription(
        topicPath,
        entityPath,
        // @ts-ignore
        subscriptionOptions
      );
      return subscriptionResponse;
    case EntityType.RULE:
      if (!topicPath || !subscriptionPath) {
        throw new Error(
          "TestError: Topic path AND subscription path must be passed when invoking tests on rules"
        );
      }
      const ruleResponse = await serviceBusAtomManagementClient.updateRule(
        topicPath,
        subscriptionPath,
        entityPath,
        // @ts-ignore
        ruleOptions
      );
      return ruleResponse;
  }
  throw new Error("TestError: Unrecognized EntityType");
}

async function deleteEntity(
  testEntityType: EntityType,
  entityPath: string,
  topicPath?: string,
  subscriptionPath?: string
): Promise<any> {
  switch (testEntityType) {
    case EntityType.QUEUE:
      const queueResponse = await serviceBusAtomManagementClient.deleteQueue(entityPath);
      return queueResponse;
    case EntityType.TOPIC:
      const topicResponse = await serviceBusAtomManagementClient.deleteTopic(entityPath);
      return topicResponse;
    case EntityType.SUBSCRIPTION:
      if (!topicPath) {
        throw new Error(
          "TestError: Topic path must be passed when invoking tests on subscriptions"
        );
      }
      const subscriptionResponse = await serviceBusAtomManagementClient.deleteSubscription(
        topicPath,
        entityPath
      );
      return subscriptionResponse;
    case EntityType.RULE:
      if (!topicPath || !subscriptionPath) {
        throw new Error(
          "TestError: Topic path AND subscription path must be passed when invoking tests on rules"
        );
      }
      const ruleResponse = await serviceBusAtomManagementClient.deleteRule(
        topicPath,
        subscriptionPath,
        entityPath
      );
      return ruleResponse;
  }
  throw new Error("TestError: Unrecognized EntityType");
}

async function listEntities(
  testEntityType: EntityType,
  topicPath?: string,
  subscriptionPath?: string,
  skip?: number,
  top?: number
): Promise<any> {
  switch (testEntityType) {
    case EntityType.QUEUE:
      const queueResponse = await serviceBusAtomManagementClient.listQueues({
        skip: skip,
        top: top
      });
      return queueResponse;
    case EntityType.TOPIC:
      const topicResponse = await serviceBusAtomManagementClient.listTopics({
        skip: skip,
        top: top
      });
      return topicResponse;
    case EntityType.SUBSCRIPTION:
      if (!topicPath) {
        throw new Error(
          "TestError: Topic path must be passed when invoking tests on subscriptions"
        );
      }
      const subscriptionResponse = await serviceBusAtomManagementClient.listSubscriptions(
        topicPath,
        { skip: skip, top: top }
      );
      return subscriptionResponse;
    case EntityType.RULE:
      if (!topicPath || !subscriptionPath) {
        throw new Error(
          "TestError: Topic path AND subscription path must be passed when invoking tests on rules"
        );
      }
      const ruleResponse = await serviceBusAtomManagementClient.listRules(
        topicPath,
        subscriptionPath,
        { skip: skip, top: top }
      );
      return ruleResponse;
  }
  throw new Error("TestError: Unrecognized EntityType");
}
