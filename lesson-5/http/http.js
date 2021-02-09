const http = require('http');

const server = http.createServer((req, res) => {
  // run depending on routes
  if (req.url === '/') {
    res.write('Hello Programmers!');
    res.write('How are you doing');
    res.end(); // finally end response
  } else if (req.url === '/about') {
    res.write('This is about us page');
    res.end(); // finally end response
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
