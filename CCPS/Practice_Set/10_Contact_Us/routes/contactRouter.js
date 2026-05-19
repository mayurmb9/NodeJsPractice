//Core Module
const path = require("path");
//External Module
const express = require("express");
//Local Module
const rootDir = require("../utils/pathUtils");

const contactRouter = express.Router();


contactRouter.get("/contact-us", (req, res) => {
  console.log("Handling /contact-us for GET request", req.method, req.path);
  res.sendFile(path.join(rootDir,"views","contact-us.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST request", req.method, req.path);
  console.log("Form Data: ", req.body);

    res.sendFile(path.join(rootDir,"views","contact-success.html"));
});

module.exports = contactRouter;