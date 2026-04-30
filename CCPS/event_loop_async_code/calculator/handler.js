const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);

  if (req.url === '/' || req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(`
      <html>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go to Calculator</a>
        </body>
      </html>
    `);
  }

  if (req.url === '/calculator') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(`
      <html>
        <body>
          <h1>Calculator</h1>
          <form method="POST" action="/calculate">
            <input type="number" name="num1" placeholder="Number 1" /><br/>
            <input type="number" name="num2" placeholder="Number 2" /><br/><br/>
            <button type="submit">Sum</button>
          </form>
        </body>
      </html>
    `);
  }

  if (req.url === '/calculate' && req.method === 'POST') {
    return sumRequestHandler(req, res);
  }

  // Proper 404
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body>
        <h1>404 - Not Found</h1>
        <a href="/">Go Home</a>
      </body>
    </html>
  `);
};

exports.requestHandler = requestHandler;