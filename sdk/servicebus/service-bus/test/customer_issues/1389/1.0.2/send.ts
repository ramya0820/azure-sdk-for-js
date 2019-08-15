const { ServiceBusClient, delay } = require("@azure/service-bus");

const connectionString = "";

async function main() {
  const ns = ServiceBusClient.createFromConnectionString(connectionString);
  const topicClient = ns.createTopicClient("performance-test-topic");

  try {
    let sender = topicClient.createSender();
    let messageCount = 0;
    let batch = 0;
    while (1) {
      try {
        batch++;
        console.time("send");

        const promises = [];
        for (let index = 1; index <= 10000; index++) {
          messageCount++;
          const message = {
            body: `${index}`,
            label: "test"
          };
          promises.push(sender.send(message));
        }

        await Promise.all(promises);
        console.timeEnd("send");

        console.log("Number of batches sent: ", batch);
        // await delay(2000);
      } catch (err) {
        console.log("messages sent - ", messageCount);
        if (err.name === "SenderBusyError") {
          await delay(2000);
          await sender.close();
          sender = await topicClient.createSender();
        }
      }
    }
    await sender.close();
    await topicClient.close();
  } finally {
    await ns.close();
  }
}

main().catch((err) => {
  console.log("Error occurred: ", err);
});
