import express from "express";

const navsRouter = express.Router();

navsRouter.get("/howtocome", (req, res) => {
  res.render("howtocome");
});
navsRouter.get("/tips", (req, res) => {
  res.render("tips");
});

navsRouter.get("/store", (req, res) => {
  res.render("tip/store");
});
navsRouter.get("/place", (req, res) => {
  res.render("tip/place");
});
navsRouter.get("/tmi", (req, res) => {
  res.render("tip/tmi");
});

navsRouter.get("/comments", (req, res) => {
  res.render("comments");
});

export default navsRouter;
