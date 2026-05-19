//external modules
const express = require('express');


const app = express();


app.use("/", (req, res, next) => {
  console.log("First Dummy Middleware Request: " + req.method + " Path: " + req.path);
  next();
});

app.use("/", (req, res, next) => {
  console.log("Second Dummy Middleware Request: " + req.method + " Path: " + req.path);
  next();
});

// app.use("/",(req,res,next) => {
//   console.log("Third Dummy Middleware Request: " + req.method + " Path: " + req.path);
//   // res.send("Third Dummy Middleware Response: " + req.method + " Path: " + req.path);
// });

app.get("/", (req, res) => {
  console.log("Handling " / " for GET request", req.method, req.path);
  res.send("<h1>Welcome to the Home Page</h1>");
});

app.get("/contact-us", (req, res) => {
  console.log("Handling /contact-us for GET request", req.method, req.path);
  res.send(`
    <h1>Contact Us</h1>
    <form action="/contact-us" method="POST">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name"><br><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>
      <input type="submit" value="Submit">
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST request", req.method, req.path);
  
  res.send("<h1>Thank you for contacting us!</h1>");
});




const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


