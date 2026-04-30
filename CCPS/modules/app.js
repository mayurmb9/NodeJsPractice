
const http = require('http');
const fs = require('fs');
const userRequestHandler = require('./user');


const server = http.createServer(userRequestHandler);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
