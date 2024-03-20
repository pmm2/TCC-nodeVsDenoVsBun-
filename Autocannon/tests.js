const autocannon = require('autocannon');

const urls = [
  'http://localhost:3000',
  'http://localhost:8080',
  'http://localhost:8000',
]; // Replace with your server URL
const runtimes = {
  'http://localhost:3000': 'Node',
  'http://localhost:8080': 'Bun',
  'http://localhost:8000': 'Deno',
};
const results = [];
const storeResults = () => {
  let csvdata = [];
  if (results.length == 9) {
    results.forEach((r) => {
      console.log(r);
      console.log(r.title);
      console.log('Latency');
      console.log(r.latency.p2_5);
      console.log(r.latency.p50);
      console.log(r.latency.p97_5);
      console.log(r.latency.p99);
      console.log(r.latency.average);
      console.log(r.latency.stddev);
      console.log(r.latency.max);
      console.log(r.latency.min);
      console.log('Requests');
      console.log(r.requests.p2_5);
      console.log(r.requests.p50);
      console.log(r.requests.p97_5);
      console.log(r.requests.p99);
      console.log(r.requests.average);
      console.log(r.requests.stddev);
      console.log(r.requests.max);
      console.log(r.requests.min);

      console.log('throughput');
      console.log(r.throughput.p2_5);
      console.log(r.throughput.p50);
      console.log(r.throughput.p97_5);
      console.log(r.throughput.p99);
      console.log(r.throughput.average);
      console.log(r.throughput.stddev);
      console.log(r.throughput.max);
      console.log(r.throughput.min);

      csvdata.push(`${r.title},p2_5,p50,p97_5,p99,average,stddev,max,min`);
      // Latency
      csvdata.push(
        `Latency,${r.latency.p2_5},${r.latency.p50},${r.latency.p97_5},${r.latency.p99},${r.latency.average},${r.latency.stddev},${r.latency.max},${r.latency.min}`
      );

      // Requests
      csvdata.push(
        `Requests,${r.requests.p2_5},${r.requests.p50},${r.requests.p97_5},${r.requests.p99},${r.requests.average},${r.requests.stddev},${r.requests.max},${r.requests.min}`
      );

      // Throughput
      csvdata.push(
        `Throughput,${r.throughput.p2_5},${r.throughput.p50},${r.throughput.p97_5},${r.throughput.p99},${r.throughput.average},${r.throughput.stddev},${r.throughput.max},${r.throughput.min}`
      );
    });
    const fs = require('fs');

    // Sample data for demonstration purposes

    // File path where you want to save the CSV file
    const filePath = 'output.csv';

    // Join the CSV data with newline character
    const csvContent = csvdata.join('\n');

    // Write CSV content to the file
    fs.writeFile(filePath, csvContent, (err) => {
      if (err) {
        console.error('Error writing CSV file:', err);
        return;
      }
      console.log(`CSV file has been saved to ${filePath}`);
    });
  }
};
urls.forEach((url) => {
  const method = 'GET';
  let path = '/'; // The route path to test

  let instance = autocannon({
    title: `${runtimes[url]} ${path}`,
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
    // console.log(`############${runtimes[url]}############`)
    // console.log('#############html#############')
    // console.log(`\nTest completed:`);
    // console.log(`  - Total requests: ${result.requests.total}`);
    // console.log(`  - Total errors: ${result.errors}`);
    // console.log(`  - Requests per second: ${result.requests.average}`);
    // console.log(`  - Mean latency: ${result.latency.mean} ms`);
    // console.log(result)
    results.push(result);
    storeResults();
  });

  // Start the test
  autocannon.track(instance);

  //fibonnaci

  path = '/fibo'; // The route path to test

  instance = autocannon({
    title: `${runtimes[url]} ${path}`,
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
    // console.log(`############${runtimes[url]}############`)
    // console.log('#############fibo#############')
    // console.log(`\nTest completed:`);
    // console.log(`  - Total requests: ${result.requests.total}`);
    // console.log(`  - Total errors: ${result.errors}`);
    // console.log(`  - Requests per second: ${result.requests.average}`);
    // console.log(`  - Mean latency: ${result.latency.mean} ms`);
    // console.log(result)
    results.push(result);
    storeResults();
  });

  // Start the test
  autocannon.track(instance);

  //addUser

  path = '/addUser'; // The route path to test

  instance = autocannon({
    title: `${runtimes[url]} ${path}`,
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
    //   console.log(`############${runtimes[url]}############`)
    //   console.log('#############addUser#############')
    //  console.log(`\nTest completed:`);
    //  console.log(`  - Total requests: ${result.requests.total}`);
    //  console.log(`  - Total errors: ${result.errors}`);
    //  console.log(`  - Requests per second: ${result.requests.average}`);
    //  console.log(`  - Mean latency: ${result.latency.mean} ms`);
    //  console.log(result)
    results.push(result);

    storeResults();
  });

  // Start the test
  autocannon.track(instance);
});
