const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // 세션 값을 꺼내오기
  if (req.session.nick) res.render("index", { nick: req.session.nick });
  else res.render("index");
});
router.get("/join", (req, res) => {
  res.render("join");
});
// 사용자가 로그인을 요청했을 때!
router.get("/login", (req, res) => {
  res.render("login");
});
// 사용자가 정보수정을 요청했을 때!
router.get("/update", (req, res) => {
  res.render("update");
});
// 사용자가 회원삭제를 요청했을 때!
router.get("/delete", (req, res) => {
  res.render("delete");
});

module.exports = router;
