/* 
    쿠기 : 클라이언트가 브라우저에 저장하는 데이터 공간
    - 쿠키는 서버의 자원을 사용하는게 아니고, 브라우저의 자원을 사용
    - 쿠키는 사용자가 브라우저를 종료 하더라도, 존재
    - 반드시 만료기간을 세팅 해준다
    - npm i cookie-parser => 쿠키데이터를 변환하는 모듈
*/
const express = require("express");
const router = express.Router();

// 1. 쿠키 등록하기
router.get("/setCookie", (req, res) => {
  console.log("쿠키등록");
  // 쿠키 등록 방법
  res.cookie("nick", "cookieNick");
  res.redirect("/");
});
// 2. 쿠키 확인하기
router.get("/getCookie", (req, res) => {
  // 쿠키를 불러올 때는 req.cookies를 사용
  console.log(req.cookies.nick);
});
// 3. 쿠키 삭제하기
router.get("/clearCookie", (req, res) => {
  // 쿠키를 삭제할 때는 res.clearCookie()를 사용
  res.clearCookie("nick");
  res.redirect("/");
});

module.exports = router;
