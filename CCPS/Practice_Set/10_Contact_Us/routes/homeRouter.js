//Core Module
const path = require("path");
//External Module
const express = require("express");
//Local Module
const rootDir = require("../utils/pathUtils");

const homeRouter =  express.Router();



homeRouter.get("/", (req, res) => {
  console.log("Handling " / " for GET request", req.method, req.path);
  res.sendFile(path.join(rootDir,"views","home.html"));
});

module.exports = homeRouter;