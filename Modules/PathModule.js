const path = require('path');


console.log("filename",__filename);
console.log("dirname",__dirname);

console.log("extension",path.extname(__filename));
console.log("basename",path.basename(__filename));
console.log("dirname",path.dirname(__filename));

console.log("join",path.join(__dirname,"test.txt"));

const pathObj = path.parse(__filename)
console.log("pathObj",pathObj);

console.log("resolve",path.resolve(__dirname,"test.txt"));

console.log("relative",path.relative(__dirname,"test.txt"));

console.log("Separator",path.sep);