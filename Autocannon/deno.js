const autocannon = require('autocannon');

const url = 'http://localhost:8000'; // Replace with your server URL
const method = 'GET';
let path = '/'; // The route path to test

let instance = autocannon({
  url: url + path,
  method: method,
  connections: 10, // Number of concurrent connections
  pipelining: 1, // Number of HTTP/1.1 pipelining requests
  duration: 10, // Duration of the test in seconds
});

instance.on('start', () => {
  console.log(`Testing ${method} ${url}${path}`);
});

instance.on('done', (result) => {
  console.log(`\nTest completed:`);
  console.log(`  - Total requests: ${result.requests.total}`);
  console.log(`  - Total errors: ${result.errors}`);
  console.log(`  - Requests per second: ${result.requests.average}`);
  console.log(`  - Mean latency: ${result.latency.mean} ms`);
  console.log(result)
});

// Start the test
autocannon.track(instance);

//fibonnaci

 path = '/fibo'; // The route path to test

 instance = autocannon({
  url: url + path,
  method: method,
  connections: 10, // Number of concurrent connections
  pipelining: 1, // Number of HTTP/1.1 pipelining requests
  duration: 10, // Duration of the test in seconds
});

instance.on('start', () => {
  console.log(`Testing ${method} ${url}${path}`);
});

instance.on('done', (result) => {
    console.log('#############fibo#############')
  console.log(`\nTest completed:`);
  console.log(`  - Total requests: ${result.requests.total}`);
  console.log(`  - Total errors: ${result.errors}`);
  console.log(`  - Requests per second: ${result.requests.average}`);
  console.log(`  - Mean latency: ${result.latency.mean} ms`);
  console.log(result)
});

// Start the test
autocannon.track(instance);

//addUser

path = '/addUser'; // The route path to test

instance = autocannon({
 url: url + path,
 method: method,
 connections: 10, // Number of concurrent connections
 pipelining: 1, // Number of HTTP/1.1 pipelining requests
 duration: 10, // Duration of the test in seconds
});

instance.on('start', () => {
 console.log(`Testing ${method} ${url}${path}`);
});

instance.on('done', (result) => {
    console.log('#############addUser#############')
 console.log(`\nTest completed:`);
 console.log(`  - Total requests: ${result.requests.total}`);
 console.log(`  - Total errors: ${result.errors}`);
 console.log(`  - Requests per second: ${result.requests.average}`);
 console.log(`  - Mean latency: ${result.latency.mean} ms`);
 console.log(result)
});

// Start the test
autocannon.track(instance);