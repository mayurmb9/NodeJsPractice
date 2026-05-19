const http = require('http');

const PORT = 3001 ;

const server = http.createServer((req, res) => {
  console.log("Request URL :", req.url);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});