/* 
    세션 : 데이터를 저장해서 공유 -> 서버에 저장
    - 세션을 너무 많이 만들경우 서버에 부담이 될 수 있음
    - 세션은 브라우저를 닫으면 사라짐
    - 로그인, 로그아웃
    - 설치 : 1. 세션 기능 : npm i express-session, 2. 세션 저장소 : npm i session-file-store

*/
const express = require("express");
const router = express.Router();

// 세션 생성하기
router.get("/setSession", (req, res) => {
  req.session.name = "sungsu";
  console.log("세션등록완료");
  res.redirect("/");
});
// 세션 확인하기
router.get("/getSession", (req, res) => {
  console.log(req.session.name);
});
// 세션 삭제하기 -> 로그아웃
router.get("/clearSession", (req, res) => {
  // req.session.name = null;
  // 모든 세션 삭제
  req.session.destroy();
  // 테스트
});

module.exports = router;
