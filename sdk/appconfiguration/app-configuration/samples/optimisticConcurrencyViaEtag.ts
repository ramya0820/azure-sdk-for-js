// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// This sample shows how to implement optimistic concurrency using 
// App Configuration and etags.

// NOTE: replace with import { AppConfigurationClient } from "@azure/app-configuration"
// in a standalone project
import { AppConfigurationClient } from "../src";

export async function run() {
  console.log("Running optimistic concurrency sample");

  // You will need to set this environment variable
  const connectionString = process.env["AZ_CONFIG_CONNECTION"]!;
  const client = new AppConfigurationClient(connectionString);

  const key = "optimisticConcurrencySampleKey";
  await cleanupSampleValues([key], client);

  console.log("Creating a new key");
  const setting = await client.addConfigurationSetting({ key: key, value: "Initial value" });
  console.log(`Etag for ${key} is ${setting.etag}`);

  // Each setting (on update or add) gets a unique identifier, via the .etag property.
  //
  // This etag can be passed to the server when retrieving or updating settings to prevent
  // race conditions where two independent updaters keep overwriting each other.
  // 
  // https://en.wikipedia.org/wiki/Optimistic_concurrency_control#Web_usage

  // let's simulate this with two updaters - Alpha and Beta
  console.log("Starting Alpha and Beta updates");

  // Alpha is preparing to do an update - to do this properly they retrieve the setting from the server
  let alphaSetting = await client.getConfigurationSetting({ key: key });
  
  // Beta would also like to do an update and will do the same thing as Alpha
  let betaSetting = await client.getConfigurationSetting({ key: key });
  
  console.log(`Alpha retrieves the setting and has etag ${alphaSetting.etag}`);
  console.log(`Beta retrieves the setting and has etag ${betaSetting.etag}`);

  // Since both of Alpha and Beta will attempt to update at the same time
  // they'll have to coordinate this. This is when they use the etag.
  
  // For our example we'll have Beta update first
  const betaUpdatedSetting = await client.setConfigurationSetting({
    key: key,
    value: "Beta has updated the value"
  }, {
    // onlyIfUnchanged allows Beta to say "only update the setting if the _current_ etag matches my etag"
    // which is true for Beta since nobody has modified it since Beta got it.
    onlyIfUnchanged: true
  });

  console.log(`Beta has updated the setting. The setting's etag is now ${betaUpdatedSetting.etag}`);

  // now Alpha is going to attempt to update it - note that at this point
  // the setting has been updated (by Beta) and so our etag will not match
  console.log("Alpha is unaware of Beta's update and will now attempt to update the setting as well");
  try {
    await client.setConfigurationSetting({
      key: key,
      value: "Alpha is attempting to update the value but will fail"
    }, {
      // in this case Alpha's etag is out of date - there's no way to update it
      // without retrieving the setting again. This allows Alpha a chance to 
      // potentially incorporate Beta's update into their own _or_ to just overwrite
      // it.
      //
      // the 'catch' below will now incorporate the update
      onlyIfUnchanged: true
    })
  } catch (err) {    
    if (err.statusCode === 412) {    // precondition failed
      console.log(`Alpha's update failed because the etag has changed. Alpha will now need to update and merge.`);

      console.log("Alpha gets the newly updated value and is merging in their changes.");
      const actualSetting = await client.getConfigurationSetting({ key: key });      
      
      // the setting has changed - Alpha chooses to merge their changes
      // rather than overwriting it.
      actualSetting.value = actualSetting.value + " and Alpha has updated the setting as well"

      console.log(`Alpha is setting the value again with the new etag ${actualSetting.etag}`);
      await client.setConfigurationSetting(actualSetting, {
        onlyIfUnchanged: true
      });
    }
  }

  // and now that the dust has settled the value has been updated
  const finalSetting = await client.getConfigurationSetting({ key: key });
  console.log(`Final value with Alpha and Beta's updates: ${finalSetting.value}`);
  
  await cleanupSampleValues([key], client);
}

async function cleanupSampleValues(keys: string[], client: AppConfigurationClient) {
  const existingSettings = await client.listConfigurationSettings({
    keyFilter: keys.join(',')
  });

  for await (const setting of existingSettings) {
    await client.setReadOnly(setting, false);
    await client.deleteConfigurationSetting({ key: setting.key, label: setting.label });
  }
}

// If you want to run this sample from a console
// uncomment these lines so run() will get called
// run().catch(err => {
//     console.log(`ERROR: ${err}`);
// });
