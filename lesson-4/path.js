const path = require('path');

const myPath = 'H:/Development/node/node-sumit-course/index.js';
// path modules
console.log(path.basename(myPath)); // returns base file name
console.log(path.dirname(myPath)); // returns directory name
console.log(path.extname(myPath)); // returns file extension
console.log(path.parse(myPath)); // return an object with related properties of given path.