const path = require('path');
const os = require('os');
const fs = require('fs');

const myPath = 'H:/Development/node/node-sumit-course/index.js';

console.clear();
// path modules
console.log(path.basename(myPath)); // returns base file name
console.log(path.dirname(myPath)); // returns directory name
console.log(path.extname(myPath)); // returns file extension
console.log(path.parse(myPath)); // return an object with related properties of given path.

// OS modules
console.log(os.platform()); // platform name
console.log(os.homedir()); // platform name
console.log(os.freemem()); // platform name
console.log(os.cpus()); // platform name

// fs modules
// syntax: fs.writeFileSync('filename', 'file data');

// create new file and write text inside. **  same command will remove previous one
fs.writeFileSync('myfile.txt', 'Hello Programmers. ');
fs.appendFileSync('myfile.txt', 'How are you?');

// read file
const data = fs.readFileSync('myfile.txt'); // synchronous file read
console.log(data.toString());

// asynchronous file read
fs.readFile('myfile.txt', (err, datas) => {
  console.log(datas.toString());
});
