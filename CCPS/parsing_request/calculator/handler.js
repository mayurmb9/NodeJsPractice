const {sumRequestHandler} = require('./sum');

const requestHandler = (req, res) => {
  console.log("Request URL: ", req.url);
  console.log("Request Method: ", req.method);
  if (req.url === 'home' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head><title>Calculator</title></head>
          <body>
            <h1>Welcome to Calculator</h1>
            <a href="/calculator">Go to Calculator</a>
          </body>
      </html>
    `);
    return res.end();
  } else if (req.url === '/calculator') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head><title>Calculator</title></head>
          <body>
            <h1>Calculator Page</h1>
            <form method="POST" action="/calculate">
              <label for="num1">Number 1:</label><br>
              <input type="number" id="num1" name="num1"><br>
              <label for="num2">Number 2:</label><br>
              <input type="number" id="num2" name="num2"><br><br>
              <input type="submit" value="Sum">
            </form>
          </body>
      </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === '/calculate' && req.method === 'POST') {
    sumRequestHandler(req, res);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head><title>Page Not Found</title></head>
          <body>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go to Home</a>
          </body>
      </html>
    `);
    return res.end();

  }
};

exports.requestHandler = requestHandler;
