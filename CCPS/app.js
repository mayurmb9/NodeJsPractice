// Simple first server
const http = require('http');
const fs = require('fs');

// function requestListener(req,res){
//   console.log("Received request for " + req.url);
// }

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log("Method: " + req.method);
  // console.log("Url: " + req.url);
  // console.log("Headers: " + JSON.stringify(req.headers));
  // console.log(req.method, req.url, req.headers);

  // res.setHeader('Content-Type', 'text/html');
  // res.write('<html>');
  // res.write('<head><title>First Server</title></head>');
  // res.write('<body><h1>Hello, World!</h1></body>');
  // res.write('</html>');
  // res.end();

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1>Welcome to the Home Page</h1><p>This is the home page of our simple server.</p></body>');
    res.write('</html>');
    res.end();
    return;
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>About Page</title></head>');
    res.write('<body><h1>About Us</h1><p>This is the about page.</p></body>');
    res.write('</html>');
    res.end();
    return;
  } else if (req.url === '/update-profile') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>Update Profile</title></head>');
    res.write('<body>');
    res.write('<h1>Update Profile</h1>');
    res.write('<form method="POST" action="/submit-details">');
    res.write('<label for="name">Name:</label><br>');
    res.write('<input type="text" id="name" name="name"><br>');
    res.write('<label for="email">Email:</label><br>');
    res.write('<input type="email" id="email" name="email"><br><br>');
    res.write('<input type="submit" value="Update">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    res.end();
    return;
  } else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {

    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end',()=>{
      const fullBody = Buffer.concat(body).toString();
      console.log("fullBody: ", fullBody);

      
    const params = new URLSearchParams(fullBody);

    // const bodyObject = {};
    // for (const [key, value] of params.entries()) {
    //   bodyObject[key] = value;
    // }
  
    const bodyObject = Object.fromEntries(params);

    console.log("bodyObject: ", bodyObject);

    console.log("Name: " + params.get('name'));
    console.log("Email: " + params.get('email'));

     fs.writeFileSync('user-details.txt', JSON.stringify(bodyObject));
    });


    // fs.writeFileSync('user-details.txt', 'Name: John Doe\nEmail: john.doe@example.com');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>404 Not Found</title></head>');
    res.write('<body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body>');
    res.write('</html>');
    res.end();
    return;
  }



  // process.exit(0); // to exit the event loop and stop the server after receiving the first request
})

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
