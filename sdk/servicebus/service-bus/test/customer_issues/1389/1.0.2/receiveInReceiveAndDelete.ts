import { ServiceBusMessage } from "@azure/service-bus";

const { ServiceBusClient, ReceiveMode } = require("@azure/service-bus");

const connectionString = "";

const topic = "performance-test-topic";
const subscription = "performance-test-1";

const sleep = (waitTimeInMs: number) => new Promise((resolve) => setTimeout(resolve, waitTimeInMs));

async function main() {
  let messageCounter = 0;

  const ns = ServiceBusClient.createFromConnectionString(connectionString);

  const subscriptionClient = ns.createSubscriptionClient(topic, subscription);

  const receiver = subscriptionClient.createReceiver(ReceiveMode.receiveAndDelete);

  const onMessageHandler = async (brokeredMessage: ServiceBusMessage) => {
    messageCounter++;
    console.log(`Received message: ${messageCounter}`);
    if (messageCounter === 1000) {
      console.timeEnd("receive");
    }
    // await brokeredMessage.complete();
  };
  const onErrorHandler = (err: Error) => {
    console.log("Error occurred: ", err);
  };

  try {
    console.time("receive");
    receiver.registerMessageHandler(onMessageHandler, onErrorHandler, {
      maxConcurrentCalls: 100
    });

    await sleep(500000); // arbitrary delay

    await receiver.close();
    await subscriptionClient.close();
  } finally {
    await ns.close();
  }
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});
