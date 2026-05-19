//core modules
const http = require('http');

//external modules
const express = require('express');

//internal modules
const userRequestHandler = require('./user');

const app = express();

app.use("/",(req, res, next) =>{
console.log("Came int the first middleware", req.url, req.method);
// res.send("<h1>Hello from first middleware.</h1>");
next();
})

app.use("/",(req, res, next) =>{
console.log("Came int the another middleware", req.url, req.method);
res.send("<h1>Hello from another middleware.</h1>");
})

app.use("/submit-details",(req, res, next) =>{
console.log("Came int the second middleware", req.url, req.method);
res.send("<h1>Hello from second middleware.</h1>");
})

const PORT = 3002 ;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


