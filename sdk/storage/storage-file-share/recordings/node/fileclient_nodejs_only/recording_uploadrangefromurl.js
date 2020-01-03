let nock = require('nock');

module.exports.testInfo = {"share":"share156816852346704041","dir":"dir156816852387500191","file":"file156816852428708264","now":"2019-09-11T02:22:05.129Z","file2":"file2156816852513107836"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156816852346704041')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:03 GMT',
  'ETag',
  '"0x8D7365ED5CD3BE6"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8f39000c-f01a-0041-4147-684eef000000',
  'x-ms-client-request-id',
  '5864e894-0deb-4eee-aa11-2be42613cfc8',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 11 Sep 2019 02:22:03 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156816852346704041/dir156816852387500191')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:04 GMT',
  'ETag',
  '"0x8D7365ED60C27D3"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '252c6888-d01a-0019-1f47-684a94000000',
  'x-ms-client-request-id',
  '8f390c12-05d7-48f3-959b-a792474f6118',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-11T02:22:04.2161107Z',
  'x-ms-file-last-write-time',
  '2019-09-11T02:22:04.2161107Z',
  'x-ms-file-creation-time',
  '2019-09-11T02:22:04.2161107Z',
  'x-ms-file-permission-key',
  '15292852142319295125*13609941760923454748',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 11 Sep 2019 02:22:03 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156816852346704041/dir156816852387500191/file156816852428708264')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:04 GMT',
  'ETag',
  '"0x8D7365ED64B1106"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '76d71c99-301a-0057-1c47-688f71000000',
  'x-ms-client-request-id',
  '8fc28ed1-87e4-4159-b29e-38fdbd9f9e9a',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-11T02:22:04.6284038Z',
  'x-ms-file-last-write-time',
  '2019-09-11T02:22:04.6284038Z',
  'x-ms-file-creation-time',
  '2019-09-11T02:22:04.6284038Z',
  'x-ms-file-permission-key',
  '1459396823544571282*13609941760923454748',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 11 Sep 2019 02:22:04 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156816852346704041/dir156816852387500191/file156816852428708264', "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'M7JgimpVGenaItzrpXsK3g==',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:05 GMT',
  'ETag',
  '"0x8D7365ED68C6BAF"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'b3b05283-101a-004b-2347-685766000000',
  'x-ms-client-request-id',
  'e92a45d2-7fba-4a05-98dc-d39fa4fdf35c',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 11 Sep 2019 02:22:04 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156816852346704041/dir156816852387500191/file2156816852513107836')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:05 GMT',
  'ETag',
  '"0x8D7365ED6CB54DD"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '41be392b-801a-006c-1147-68cd2f000000',
  'x-ms-client-request-id',
  '2b8aac9e-9ca1-4e4d-9c8a-a7c290d274f6',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-11T02:22:05.4690013Z',
  'x-ms-file-last-write-time',
  '2019-09-11T02:22:05.4690013Z',
  'x-ms-file-creation-time',
  '2019-09-11T02:22:05.4690013Z',
  'x-ms-file-permission-key',
  '1459396823544571282*13609941760923454748',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835163608398430208',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 11 Sep 2019 02:22:04 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156816852346704041/dir156816852387500191/file2156816852513107836')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:06 GMT',
  'ETag',
  '"0x8D7365ED7267DC6"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '42858b30-101a-0004-4847-68937e000000',
  'x-ms-client-request-id',
  '7365b7aa-a815-4df2-a2bf-294319a869c9',
  'x-ms-version',
  '2019-02-02',
  'x-ms-content-crc64',
  'u661BimQ84c=',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 11 Sep 2019 02:22:05 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156816852346704041/dir156816852387500191/file2156816852513107836')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:06 GMT',
  'ETag',
  '"0x8D7365ED77C0055"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'e71ce583-001a-0039-5547-682658000000',
  'x-ms-client-request-id',
  '28132c5c-b722-4ecd-88f9-bf34045a310d',
  'x-ms-version',
  '2019-02-02',
  'x-ms-content-crc64',
  'zGf3rvhKPeA=',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Wed, 11 Sep 2019 02:22:06 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share156816852346704041/dir156816852387500191/file2156816852513107836')
  .reply(206, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", [ 'Content-Length',
  '512',
  'Content-Type',
  'application/octet-stream',
  'Content-Range',
  'bytes 0-511/1024',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:06 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365ED77C0055"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd31b2488-f01a-002c-3d47-68e4c1000000',
  'x-ms-client-request-id',
  '7fd39256-322a-4119-a83c-174557b1be42',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-11T02:22:05.4690013Z',
  'x-ms-file-last-write-time',
  '2019-09-11T02:22:05.4690013Z',
  'x-ms-file-creation-time',
  '2019-09-11T02:22:05.4690013Z',
  'x-ms-file-permission-key',
  '1459396823544571282*13609941760923454748',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835163608398430208',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Range,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:22:06 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share156816852346704041/dir156816852387500191/file2156816852513107836')
  .reply(206, "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", [ 'Content-Length',
  '512',
  'Content-Type',
  'application/octet-stream',
  'Content-Range',
  'bytes 512-1023/1024',
  'Last-Modified',
  'Wed, 11 Sep 2019 02:22:06 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D7365ED77C0055"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '18b2d69a-c01a-0006-3c47-689184000000',
  'x-ms-client-request-id',
  '130e3ce6-1c36-4cc8-aac8-6b49ef94085c',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-11T02:22:05.4690013Z',
  'x-ms-file-last-write-time',
  '2019-09-11T02:22:05.4690013Z',
  'x-ms-file-creation-time',
  '2019-09-11T02:22:05.4690013Z',
  'x-ms-file-permission-key',
  '1459396823544571282*13609941760923454748',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835163608398430208',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Range,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Wed, 11 Sep 2019 02:22:06 GMT' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share156816852346704041')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '4021a372-e01a-001a-6447-684993000000',
  'x-ms-client-request-id',
  'f345faec-727c-4a10-8982-52103d7e7a88',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Wed, 11 Sep 2019 02:22:07 GMT' ]);

