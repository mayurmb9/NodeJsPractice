
const http = require('http');

//web server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("<h1>Hello Everyone !</h1>");
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



















// //1 importing the http module
// const http = require('http');

// //2 creating a server
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!');
// });

// //3 listening on port 3000
// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

// //4 stopping the server
// // server.close();