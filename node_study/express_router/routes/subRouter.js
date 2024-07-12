const express = require("express");
const router = express.Router();
const path = require("path");

// 라우터 등록
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/minormain.html"));
});
router.get("/fishing", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/fishing.html"));
});

// 라우터 내보내기
module.exports = router;
