const fs = require('fs');

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
