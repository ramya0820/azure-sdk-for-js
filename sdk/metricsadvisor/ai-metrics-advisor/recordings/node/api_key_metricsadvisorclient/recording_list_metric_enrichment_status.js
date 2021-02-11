let nock = require('nock');

module.exports.hash = "94da7bc0111b326079f4300b71e9e7fa";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/metricsadvisor/v1.0/metrics/189ff959-d9f4-45c7-a1e0-f87c9c7ca80f/status/enrichment/anomalyDetection/query', {"startTime":"2020-01-01T00:00:00.000Z","endTime":"2020-09-18T00:00:00.000Z"})
  .reply(200, {"value":[{"timestamp":"2020-01-01T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-05T18:37:01.002Z\",\"CreateTime\":\"2020-11-05T18:37:01.002Z\"}"},{"timestamp":"2020-01-22T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-05T18:37:01.008Z\",\"CreateTime\":\"2020-11-05T18:37:01.008Z\"}"},{"timestamp":"2020-01-28T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-05T18:38:21.014Z\",\"CreateTime\":\"2020-11-05T18:38:21.014Z\"}"},{"timestamp":"2020-08-03T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T00:53:30.124Z\",\"CreateTime\":\"2021-01-15T00:53:30.124Z\"}"},{"timestamp":"2020-08-01T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T00:53:10.123Z\",\"CreateTime\":\"2021-01-15T00:53:10.123Z\"}"},{"timestamp":"2020-01-13T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:09:51.332Z\",\"CreateTime\":\"2020-11-10T04:09:51.332Z\"}"},{"timestamp":"2020-01-09T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:35:42.916Z\",\"UpdateTime\":\"2020-11-04T22:35:42.916Z\"}"},{"timestamp":"2020-01-18T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:09:51.332Z\",\"CreateTime\":\"2020-11-10T04:09:51.332Z\"}"},{"timestamp":"2020-01-07T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:09:51.332Z\",\"CreateTime\":\"2020-11-10T04:09:51.332Z\"}"},{"timestamp":"2020-01-03T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:34:42.412Z\",\"UpdateTime\":\"2020-11-04T22:34:42.412Z\"}"},{"timestamp":"2020-01-08T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:09:51.332Z\",\"CreateTime\":\"2020-11-10T04:09:51.332Z\"}"},{"timestamp":"2020-01-15T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:35:42.916Z\",\"UpdateTime\":\"2020-11-04T22:35:42.916Z\"}"},{"timestamp":"2020-01-17T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:35:42.917Z\",\"UpdateTime\":\"2020-11-04T22:35:42.917Z\"}"},{"timestamp":"2020-01-24T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:35:42.917Z\",\"UpdateTime\":\"2020-11-04T22:35:42.917Z\"}"},{"timestamp":"2020-01-29T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:34:42.413Z\",\"UpdateTime\":\"2020-11-04T22:34:42.413Z\"}"},{"timestamp":"2020-01-11T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:07:13.117Z\",\"CreateTime\":\"2020-11-10T04:07:13.117Z\"}"},{"timestamp":"2020-01-30T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:11:08.028Z\",\"CreateTime\":\"2020-11-10T04:11:08.028Z\"}"},{"timestamp":"2020-01-02T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:09:51.332Z\",\"CreateTime\":\"2020-11-10T04:09:51.332Z\"}"},{"timestamp":"2020-08-05T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T06:21:54.710Z\",\"CreateTime\":\"2021-01-15T06:21:54.710Z\"}"},{"timestamp":"2020-01-04T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:35:42.915Z\",\"UpdateTime\":\"2020-11-04T22:35:42.915Z\"}"},{"timestamp":"2020-01-05T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:06:13.107Z\",\"CreateTime\":\"2020-11-10T04:06:13.107Z\"}"},{"timestamp":"2020-01-14T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:35:42.916Z\",\"UpdateTime\":\"2020-11-04T22:35:42.916Z\"}"},{"timestamp":"2020-01-10T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:35:42.916Z\",\"UpdateTime\":\"2020-11-04T22:35:42.916Z\"}"},{"timestamp":"2020-08-06T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T06:21:54.713Z\",\"CreateTime\":\"2021-01-15T06:21:54.713Z\"}"},{"timestamp":"2020-01-12T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-05T18:37:01.008Z\",\"CreateTime\":\"2020-11-05T18:37:01.008Z\"}"},{"timestamp":"2020-01-16T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:35:42.917Z\",\"UpdateTime\":\"2020-11-04T22:35:42.917Z\"}"},{"timestamp":"2020-01-19T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-04T22:35:42.917Z\",\"UpdateTime\":\"2020-11-04T22:35:42.917Z\"}"},{"timestamp":"2020-01-21T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-05T18:37:01.008Z\",\"CreateTime\":\"2020-11-05T18:37:01.008Z\"}"},{"timestamp":"2020-01-23T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:09:51.332Z\",\"CreateTime\":\"2020-11-10T04:09:51.332Z\"}"},{"timestamp":"2020-01-26T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-05T18:37:21.009Z\",\"CreateTime\":\"2020-11-05T18:37:21.009Z\"}"},{"timestamp":"2020-01-27T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:11:08.028Z\",\"CreateTime\":\"2020-11-10T04:11:08.028Z\"}"},{"timestamp":"2020-01-20T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-10T04:11:08.028Z\",\"UpdateTime\":\"2020-11-10T04:11:08.028Z\"}"},{"timestamp":"2020-01-25T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2020-11-10T04:11:08.028Z\",\"CreateTime\":\"2020-11-10T04:11:08.028Z\"}"},{"timestamp":"2020-01-31T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-10T04:11:08.028Z\",\"UpdateTime\":\"2020-11-10T04:11:08.028Z\"}"},{"timestamp":"2020-02-03T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-10T04:11:08.028Z\",\"UpdateTime\":\"2020-11-10T04:11:08.028Z\"}"},{"timestamp":"2020-02-13T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-10T04:11:08.028Z\",\"UpdateTime\":\"2020-11-10T04:11:08.028Z\"}"},{"timestamp":"2020-02-22T00:00:00Z","status":"Succeeded","message":"{\"CreateTime\":\"2020-11-10T04:11:08.028Z\",\"UpdateTime\":\"2020-11-10T04:11:08.028Z\"}"},{"timestamp":"2020-09-01T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T00:54:10.127Z\",\"CreateTime\":\"2021-01-15T00:54:10.127Z\"}"},{"timestamp":"2020-08-22T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T06:21:54.713Z\",\"CreateTime\":\"2021-01-15T06:21:54.713Z\"}"},{"timestamp":"2020-08-23T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T06:22:14.714Z\",\"CreateTime\":\"2021-01-15T06:22:14.714Z\"}"},{"timestamp":"2020-08-02T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T00:53:10.123Z\",\"CreateTime\":\"2021-01-15T00:53:10.123Z\"}"},{"timestamp":"2020-08-07T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T06:21:54.713Z\",\"CreateTime\":\"2021-01-15T06:21:54.713Z\"}"},{"timestamp":"2020-09-02T00:00:00Z","status":"Succeeded","message":"{\"UpdateTime\":\"2021-01-15T00:54:10.127Z\",\"CreateTime\":\"2021-01-15T00:54:10.127Z\"}"}],"@nextLink":null}, [
  'Content-Length',
  '6908',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-request-id',
  '2b6ff520-2373-420a-8d7c-052a76aa7681',
  'x-envoy-upstream-service-time',
  '225',
  'apim-request-id',
  '2b6ff520-2373-420a-8d7c-052a76aa7681',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 15 Jan 2021 08:41:24 GMT'
]);
