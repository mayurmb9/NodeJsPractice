const http = require('http');
const fs = require('fs');

const navigationBar = `
  <nav style="background-color: #333; padding: 10px;">
    <ul style="list-style-type: none; margin: 0; padding: 0; display: flex;">
      <li><a href="/home" style="color: white; text-decoration: none; padding: 10px;">Home</a></li>
      <li><a href="/men" style="color: white; text-decoration: none; padding: 10px;">Men</a></li>
      <li><a href="/women" style="color: white; text-decoration: none; padding: 10px;">Women</a></li>
      <li><a href="/kids" style="color: white; text-decoration: none; padding: 10px;">Kids</a></li>
      <li><a href="/home-decor" style="color: white; text-decoration: none; padding: 10px;">Home Decor</a></li>
    </ul>
  </nav>
`;

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    // navigation bar
    res.write(navigationBar);
    
    res.write('<body><h1>Welcome to the Home Page</h1><p>This is the home page of Ecommerce.</p></body>');
    res.write('</html>');
    res.end();
    return;
  } else if (req.url === '/men') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>Men Page</title></head>');
    res.write(navigationBar);
    res.write('<body><h1>Mens Section</h1><p>This is the Mens section of Ecommerce.</p></body>');
    res.write('</html>');
    res.end();
    return; 
  } else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>Women Page</title></head>');
     res.write(navigationBar);
    res.write('<body><h1>Womens Section</h1><p>This is the Womens section of Ecommerce.</p></body>');
    res.write('</html>');
    res.end();
    return; 
  } else if (req.url === '/kids') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>Kids Page</title></head>');
    res.write(navigationBar);
    res.write('<body><h1>Kids Section</h1><p>This is the Kids section of Ecommerce.</p></body>');
    res.write('</html>');
    res.end();
    return; 
  }
   else if (req.url === '/home-decor') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>Home Decor Page</title></head>');
    res.write(navigationBar);
    res.write('<body><h1>Home Decor Section</h1><p>This is the Home Decor section of Ecommerce.</p></body>');
    res.write('</html>');
    res.end();
    return; 
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>404 Not Found</title></head>');
    res.write('<body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body>');
    res.write('</html>');
    res.end();
    return;
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});