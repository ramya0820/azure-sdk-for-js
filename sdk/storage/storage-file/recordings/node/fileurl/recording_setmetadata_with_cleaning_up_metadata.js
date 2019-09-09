let nock = require('nock');

module.exports.testInfo = {"share":"share156775318822105288","dir":"dir156775318862608209","file":"file156775318903308816"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775318822105288')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:48 GMT',
  'ETag',
  '"0x8D73297CEAAB5B7"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a9a6d644-b01a-003f-0180-643f20000000',
  'x-ms-client-request-id',
  'ec123a85-dd49-4cc6-939d-e32e8473029f',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Fri, 06 Sep 2019 06:59:47 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775318822105288/dir156775318862608209')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:48 GMT',
  'ETag',
  '"0x8D73297CEE90172"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '2a29ca40-701a-00fb-5780-644a19000000',
  'x-ms-client-request-id',
  'cc4e7b16-5130-48e8-8537-b3d9d93a3339',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-06T06:59:48.9041778Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:48.9041778Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:48.9041778Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 06:59:48 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775318822105288/dir156775318862608209/file156775318903308816')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:49 GMT',
  'ETag',
  '"0x8D73297CF26DCC7"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '549786fe-301a-014c-3b80-6499be000000',
  'x-ms-client-request-id',
  '818447b1-6376-42cc-b758-33f11b9a5c41',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-06T06:59:49.3095623Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:49.3095623Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:49.3095623Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 06:59:48 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775318822105288/dir156775318862608209/file156775318903308816')
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:49 GMT',
  'ETag',
  '"0x8D73297CF6ECCBB"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '79054352-801a-00ff-6480-64c71e000000',
  'x-ms-client-request-id',
  'a5521d1f-fd17-48c3-89fd-950f83e54427',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 06:59:49 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share156775318822105288/dir156775318862608209/file156775318903308816')
  .reply(200, "", [ 'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:49 GMT',
  'ETag',
  '"0x8D73297CF6ECCBB"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '4c83cbc2-701a-012f-0680-640445000000',
  'x-ms-client-request-id',
  'c5dc248f-615b-40e5-8024-c78f88137f5f',
  'x-ms-version',
  '2019-02-02',
  'x-ms-meta-a',
  'a',
  'x-ms-meta-b',
  'b',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-06T06:59:49.7810107Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:49.3095623Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:49.3095623Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-meta-a,x-ms-meta-b,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Fri, 06 Sep 2019 06:59:49 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156775318822105288/dir156775318862608209/file156775318903308816')
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:50 GMT',
  'ETag',
  '"0x8D73297CFED6A5D"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '001adb29-701a-0100-7380-64098e000000',
  'x-ms-client-request-id',
  'd17f5b11-10c3-40ca-be0b-439c4cf2016a',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Fri, 06 Sep 2019 06:59:50 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share156775318822105288/dir156775318862608209/file156775318903308816')
  .reply(200, "", [ 'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Fri, 06 Sep 2019 06:59:50 GMT',
  'ETag',
  '"0x8D73297CFED6A5D"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '1956c9b8-901a-0075-3c80-649caf000000',
  'x-ms-client-request-id',
  'd666f83d-7eb8-4916-96d6-1ac590b7ba72',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'false',
  'x-ms-file-change-time',
  '2019-09-06T06:59:50.6107997Z',
  'x-ms-file-last-write-time',
  '2019-09-06T06:59:49.3095623Z',
  'x-ms-file-creation-time',
  '2019-09-06T06:59:49.3095623Z',
  'x-ms-file-permission-key',
  '15082859266781889734*8787082347076103240',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Fri, 06 Sep 2019 06:59:50 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share156775318822105288')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '207d3f69-401a-0049-5080-64b568000000',
  'x-ms-client-request-id',
  '446fb470-7a38-4736-ac7b-5c64a1cfa8bd',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Fri, 06 Sep 2019 06:59:50 GMT',
  'Connection',
  'close' ]);

