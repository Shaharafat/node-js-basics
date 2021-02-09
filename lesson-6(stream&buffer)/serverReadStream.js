const http = require('http');

const server = http.createServer((req, res) => {
  // run depending on routes
  if (req.url === '/') {
    res.write('<html><title>Form</title></html>');
    res.write('<body><form method="post" action="/process"><input name="message" /></form></body>');
    res.end(); // finally end response
  } else if (req.url === '/process' && req.method === 'POST') {
    const body = [];
    // req.data wont give you data. because of streaming
    req.on('data', (chunk) => {
      // data is coming in chunk
      body.push(chunk);
    });
    // most important
    req.on('end', () => {
      console.log('stream finished');
      const parsedBody = Buffer.concat(body).toString(); // get main data.
      console.log(parsedBody);
      res.write('This is about us page');
      res.end(); // finally end response
    });
  } else {
    res.write('404! Not Found');
    res.end(); // finally end response
  }
}); // server is a event listener or event emitter.

// server.on('connection', () => {
//   console.log('New Connection');
// });

server.listen(3000); // port 3000
console.log('listening on port 3000');
