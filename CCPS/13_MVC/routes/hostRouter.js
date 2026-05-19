// Core Modules
const path = require("path");

// External Modules
const express = require("express");

// Local Modules
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil")



hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", {
    title: "Add Home",
    currentPage: "add-home"
  });
});

const reisteredHomes = [];



hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  console.log("Home Name: " + req.body["home-name"]);
  reisteredHomes.push({
    houseName: req.body["home-name"],
    location: req.body["location"],
    price: req.body["price"],
    rating: req.body["rating"],
    photoUrl: req.body["photo-url"]
  });
  res.render("homeAdded", {
    title: "Home Added Successfully",
    currentPage: "add-home"
  });
});

exports.hostRouter = hostRouter;
exports.reisteredHomes = reisteredHomes;