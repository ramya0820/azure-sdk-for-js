let nock = require('nock');

module.exports.testInfo = {"now":"2019-07-25T09:25:58.691Z","tmr":"2019-07-25T09:25:58.692Z"}

nock('https://fakestorageaccount.queue.core.windows.net:443', {"encodedQueryParams":true})
  .get('/')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>3</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>4</Days></RetentionPolicy></MinuteMetrics><Cors><CorsRule><AllowedMethods>DELETE,GET,HEAD,MERGE,POST,OPTIONS,PUT</AllowedMethods><AllowedOrigins>*</AllowedOrigins><AllowedHeaders>*</AllowedHeaders><ExposedHeaders>*</ExposedHeaders><MaxAgeInSeconds>88888</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET</AllowedMethods><AllowedOrigins>example.com</AllowedOrigins><AllowedHeaders>*</AllowedHeaders><ExposedHeaders>*</ExposedHeaders><MaxAgeInSeconds>8888</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET</AllowedMethods><AllowedOrigins>example.com</AllowedOrigins><AllowedHeaders>*</AllowedHeaders><ExposedHeaders>*</ExposedHeaders><MaxAgeInSeconds>8888</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET</AllowedMethods><AllowedOrigins>example.com</AllowedOrigins><AllowedHeaders>*</AllowedHeaders><ExposedHeaders>*</ExposedHeaders><MaxAgeInSeconds>8888</MaxAgeInSeconds></CorsRule><CorsRule><AllowedMethods>GET</AllowedMethods><AllowedOrigins>example.com</AllowedOrigins><AllowedHeaders>*</AllowedHeaders><ExposedHeaders>*</ExposedHeaders><MaxAgeInSeconds>8888</MaxAgeInSeconds></CorsRule></Cors></StorageServiceProperties>", [ 'Cache-Control',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '68c5b0b5-2003-013f-75ca-42cf1f000000',
  'x-ms-version',
  '2018-03-28',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Cache-Control,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 25 Jul 2019 09:22:20 GMT',
  'Connection',
  'close' ]);

