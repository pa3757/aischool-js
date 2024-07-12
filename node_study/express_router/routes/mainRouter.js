// 서버에서 가장 기본이 되는 이정표
// router 변수에 router기능만 넣어주기
const express = require("express");
const router = express.Router();
const path = require("path");

// 라우터 등록
router.get("/", (req, res) => {
  // main.html 파일 보여주기(public폴더에 있음)
  // __dirname : 현재 파일이 있는 폴더
  res.sendFile(path.join(__dirname, "../public/main.html"));
});
// 축구페이지 처리해주기!
router.get("/soccer", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/soccer.html"));
});
// 야구페이지 처리해주기
router.get("/baseball", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/baseball.html"));
});

// 라우터 내보내기
module.exports = router;
