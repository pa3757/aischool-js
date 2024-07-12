const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  // 넌적스 파일을 생성할 때는, render함수 사용
  res.render("main", { name: "손준수" });
});

module.exports = router;
