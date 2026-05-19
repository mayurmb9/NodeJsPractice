// External Modules
const express = require("express");
const hostRouter = express.Router();

// Local Modules
const { getAddHome } = require("../../13_MVC/controllers/homes");



hostRouter.get("/add-home", getAddHome);

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