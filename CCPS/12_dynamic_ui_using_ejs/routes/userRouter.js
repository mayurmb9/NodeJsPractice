// Core Modules
const path = require("path");

// External Modules
const express = require("express");

// Local Modules
const userRouter = express.Router();

const { reisteredHomes } = require("./hostRouter");


userRouter.use((req, res, next) => {
  console.log("Request: Method: " + req.method + " Url: " + req.url);
  next();
});

userRouter.get("/", (req, res, next) => {
  res.render("home", { 
    reisteredHomes: reisteredHomes,
    title: "Airbnb Home",
    currentPage: "home"
  });
})

module.exports = userRouter;