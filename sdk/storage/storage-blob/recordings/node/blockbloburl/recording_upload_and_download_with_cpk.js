let nock = require('nock');

module.exports.testInfo = {"container":"container156776196424308473","blob":"blob156776196463803015","randomstring":"randomstring156776196463909449"}

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156776196424308473')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Fri, 06 Sep 2019 09:26:04 GMT',
  'ETag',
  '"0x8D732AC3D97B17C"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '7df63c2d-e01e-013d-2395-647f95000000',
  'x-ms-client-request-id',
  '99c036ec-2341-4128-83cd-823e9d798db5',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Fri, 06 Sep 2019 09:26:04 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156776196424308473/blob156776196463803015', "randomstring156776196463909449")
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'kHqvL3YOlSRIhzNFuaCRvg==',
  'Last-Modified',
  'Fri, 06 Sep 2019 09:26:04 GMT',
  'ETag',
  '"0x8D732AC3DD493FA"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'd9a7af34-001e-0083-4b95-64e9e1000000',
  'x-ms-client-request-id',
  'a12a2775-ce3d-4d5f-9f6b-5ae974de3548',
  'x-ms-version',
  '2019-02-02',
  'x-ms-content-crc64',
  '//15QyEBOug=',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-encryption-key-sha256',
  '3QFFFpRA5+XANHqwwbT4yXDmrT/2JaLt/FKHjzhOdoE=',
  'Date',
  'Fri, 06 Sep 2019 09:26:04 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156776196424308473/blob156776196463803015')
  .reply(200, ["72616e646f6d737472696e67313536373736313936343633393039343439"], [ 'Cache-Control',
  'blobCacheControl',
  'Content-Length',
  '30',
  'Content-Type',
  'blobContentType',
  'Content-Encoding',
  'blobContentEncoding',
  'Content-Language',
  'blobContentLanguage',
  'Content-MD5',
  'kHqvL3YOlSRIhzNFuaCRvg==',
  'Last-Modified',
  'Fri, 06 Sep 2019 09:26:04 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D732AC3DD493FA"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '552dc4d0-f01e-0097-5595-64a18e000000',
  'x-ms-client-request-id',
  'd471994a-681e-4466-9d4e-231e2ab92f54',
  'x-ms-version',
  '2019-02-02',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-keya',
  'vala',
  'x-ms-meta-keyb',
  'valb',
  'x-ms-creation-time',
  'Fri, 06 Sep 2019 09:26:04 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'BlockBlob',
  'Content-Disposition',
  'blobContentDisposition',
  'x-ms-server-encrypted',
  'true',
  'x-ms-encryption-key-sha256',
  '3QFFFpRA5+XANHqwwbT4yXDmrT/2JaLt/FKHjzhOdoE=',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-keya,x-ms-meta-keyb,Content-Type,Content-Encoding,Content-Language,Cache-Control,Last-Modified,ETag,x-ms-creation-time,Content-MD5,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,Content-Disposition,x-ms-server-encrypted,x-ms-encryption-key-sha256,Accept-Ranges,Content-Length,Date,Transfer-Encoding,content-md5,x-ms-content-crc64',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Fri, 06 Sep 2019 09:26:04 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/container156776196424308473')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '2d87a9ab-c01e-013a-2395-6413f6000000',
  'x-ms-client-request-id',
  '2c494fef-6c9b-465d-9525-b6206d9402c9',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Fri, 06 Sep 2019 09:26:05 GMT',
  'Connection',
  'close' ]);

