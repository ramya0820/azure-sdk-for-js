import { ServiceBusMessage } from "@azure/service-bus";

const { ServiceBusClient, ReceiveMode } = require("@azure/service-bus");

async function main(): Promise<void> {
  const connectionString = "";
  const sbc = ServiceBusClient.createFromConnectionString(connectionString);
  const client = sbc.createSubscriptionClient("performance-test-topic", "performance-test-2");

  let allMessageCounter = 0;
  console.time("receive");
  let receiver = client.createReceiver(ReceiveMode.peekLock);
  try {
    while (1) {
      const messages = await receiver.receiveMessages(250);

      messages.forEach(async (msg: ServiceBusMessage) => {
        allMessageCounter++;
        console.log("received msg: ", allMessageCounter);
        await msg.complete();
      });
    }
  } finally {
    console.timeEnd("receive");
    await receiver.close();
  }
}

main().catch((err) => {
  console.log(err);
});
