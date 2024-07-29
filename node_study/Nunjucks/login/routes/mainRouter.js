const express = require("express");
const router = express.Router();
const bp = require("body-parser");

router.use(bp.urlencoded({ extended: true }));

router.get("/", (req, res) => {.
  
  res.render("index");
});
router.post("/login", (req, res) => {
  if (req.body.id == "smhrd" && req.body.pw == "1234") {
    res.render("success", { id: req.body.id });
  } else {
    res.render("fail");
  }
});

module.exports = router;
