// Core Modules
const path = require("path");

// External Modules
const express = require("express");

// Local Modules
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil")



hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir,"views","addHome.html"));
});




hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  console.log("Home Name: " + req.body["home-name"]);
    res.sendFile(path.join(rootDir,"views","homeAdded.html"));
});

module.exports = hostRouter;