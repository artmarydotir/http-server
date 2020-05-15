const http = require('http');

// create server object - callbck/ listener/callbck
http
  .createServer((req, res) => {
    // Write response
    res.write('hello from http modules');
    res.end();
  })
  .listen(5000, () => {
    console.log('server is running...!');
    console.log('localhost:5000');
  });
