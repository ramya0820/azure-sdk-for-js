import { CloseReason } from "./eventProcessor";
import { ReceivedEventData } from "./eventData";
import { LastEnqueuedEventProperties } from "./eventHubReceiver";
import { EventPosition } from "./eventPosition";
import { TracingOptions } from "./util/operationOptions";

/**
 * @internal
 * @ignore
 */
export interface BasicPartitionProperties {
  /**
   * @property The fully qualified Event Hubs namespace. This is likely to be similar to
   * <yournamespace>.servicebus.windows.net
   */
  fullyQualifiedNamespace: string;
  /**
   * @property The event hub name.
   */
  eventHubName: string;
  /**
   * @property The consumer group name.
   */
  consumerGroup: string;
  /**
   * @property The identifier of the Event Hub partition.
   */
  partitionId: string;
}

/**
 * Provides a set of basic information about the partition as well as the
 * ability to checkpoint.
 */
export interface PartitionContext {
  /**
   * @property The fully qualified Event Hubs namespace. This is likely to be similar to
   * <yournamespace>.servicebus.windows.net
   */
  readonly fullyQualifiedNamespace: string;
  /**
   * @property The event hub name.
   */
  readonly eventHubName: string;
  /**
   * @property The consumer group name.
   */
  readonly consumerGroup: string;
  /**
   * @property The identifier of the Event Hub partition.
   */
  readonly partitionId: string;
  /**
   * Information on the last enqueued event in the partition that is being processed.
   * This property is only updated if the `trackLastEnqueuedEventProperties` option is set to true
   * when creating an instance of EventProcessor.
   * @readonly
   */
  readonly lastEnqueuedEventProperties?: LastEnqueuedEventProperties;
  /**
   * Updates the checkpoint using the event data.
   *
   * A checkpoint is meant to represent the last successfully processed event by the user from a particular
   * partition of a consumer group in an Event Hub instance.
   *
   * @param eventData The event that you want to update the checkpoint with.
   * @return Promise<void>
   */
  updateCheckpoint(eventData: ReceivedEventData): Promise<void>;
}

/**
 * Event handler called when events are received. The `context` parameter can be
 * used to get partition information as well as to checkpoint.
 */
export type ProcessEventsHandler = (
  events: ReceivedEventData[],
  context: PartitionContext
) => Promise<void>;

/**
 * Called when errors occur during event receiving.
 */
export type ProcessErrorHandler = (error: Error, context: PartitionContext) => Promise<void>;

/**
 * Called when we first start processing events from a partition.
 */
export type ProcessInitializeHandler = (context: PartitionContext) => Promise<void>;

/**
 * Called when we stop processing events from a partition.
 */
export type ProcessCloseHandler = (reason: CloseReason, context: PartitionContext) => Promise<void>;

/**
 * Optional event handlers that provide more context when subscribing to events.
 */
export interface SubscriptionEventHandlers {
  /**
   * Event handler called when events are received.
   */
  processEvents: ProcessEventsHandler;
  /**
   * Called when errors occur during event receiving.
   */
  processError: ProcessErrorHandler;
  /**
   * Called when we first start processing events from a partition.
   */
  processInitialize?: ProcessInitializeHandler;
  /**
   * Called when we stop processing events from a partition.
   */
  processClose?: ProcessCloseHandler;
}

/**
 * Options for subscribe.
 */
export interface SubscribeOptions extends TracingOptions {
  /**
   * @property
   * Indicates whether or not the consumer should request information on the last enqueued event on its
   * associated partition, and track that information as events are received.

   * When information about the partition's last enqueued event is being tracked, each event received 
   * from the Event Hubs service will carry metadata about the partition that it otherwise would not. This results in a small amount of
   * additional network bandwidth consumption that is generally a favorable trade-off when considered
   * against periodically making requests for partition properties using the Event Hub client.
   */
  trackLastEnqueuedEventProperties?: boolean;
  /**
   * The owner level to use as this subscription subscribes to partitions.
   */
  ownerLevel?: number;
  /**
   * The number of events to request per batch
   */
  maxBatchSize?: number;
  /**
   * The maximum amount of time to wait to build up the requested message count before
   * passing the data to user code for processing. If not provided, it defaults to 60 seconds.
   */
  maxWaitTimeInSeconds?: number;
  /**
   * The event position in a partition to start receiving events from if no checkpoint is found.
   * Pass a map of partition id to position if you would like to use different starting
   * position for each partition.
   */
  startPosition?: EventPosition | { [partitionId: string]: EventPosition };
}

/**
 * Represents the status of a subscribe() call and can be used to stop a subscription.
 */
export interface Subscription {
  /**
   * Stops the subscription from receiving more messages.
   * @returns Promise<void>
   * @throws Error if the underlying connection encounters an error while closing.
   */
  close(): Promise<void>;
  /**
   * Indicates whether the receiver is running.
   * `true` - is running; `false` otherwise.
   * @readonly
   */
  isRunning: boolean;
}
