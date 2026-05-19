// Core Modules
const path = require("path");

// External Modules
const express = require("express");

// Local Modules
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil")



userRouter.use((req, res, next) => {
  console.log("Request: Method: " + req.method + " Url: " + req.url);
  next();
});

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir,"views","home.html"));
})

module.exports = userRouter;