const http = require('http');
const fs = require('fs');

// fs.createReadSteam(filepath);
// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8'); // create stream
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//   ourWriteStream.write(chunk);
// });

// pipe (another way to read write steam data)
// ourReadStream.pipe(ourWriteStream);

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf-8'); // create stream
  myReadStream.pipe(res);
});

server.listen(3000);
