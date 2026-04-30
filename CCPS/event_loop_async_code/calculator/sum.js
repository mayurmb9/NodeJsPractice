const sumRequestHandler = (req, res) => {
  console.log('[1] In sumRequestHandler url:', req.url);
  let body = [];
  let sum;

  req.on('data', chunk => {
    body.push(chunk);
    console.log('[2] Received chunk:', chunk.toString());
  });

  req.on('end', () => {

    console.log('[3] Finished receiving data. Body:', Buffer.concat(body).toString());
    const params = new URLSearchParams(Buffer.concat(body).toString());

    const num1 = parseFloat(params.get('num1'));
    const num2 = parseFloat(params.get('num2'));

    // ✅ Validation (important)
    if (isNaN(num1) || isNaN(num2)) {
      return res.end(JSON.stringify({ error: 'Invalid input' }));
    }

    sum = num1 + num2;
    console.log('[4] Calculated sum:', sum);
  });

  console.log('[5] Send response with sum:', sum);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
      <html>
        <body>
          <h1>Sum: ${sum}</h1>
          <a href="/calculator">Calculate Again</a>
        </body>
      </html>
    `);


};

exports.sumRequestHandler = sumRequestHandler;