const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/soccer", (req, res) => {
  res.render("soccer");
});

router.get("/baseball", (req, res) => {
  res.render("baseball");
});

module.exports = router;
