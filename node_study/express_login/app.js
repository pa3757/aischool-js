const express = require("express");
const app = express();
const bp = require("body-parser");

// 1. 정적파일 등록
app.use(express.static("public"));
// body-parser 등록
app.use(bp.urlencoded({ extended: true }));

// 2. 서버등록
app.get("/", (req, res) => {
  console.log("서버생성");
  res.sendFile("index.html");
});

// get방식으로 넘어온 데이터 처리
app.get("/getLogin", (req, res) => {
  // get방식으로 넘어온 데이터를 객체로 출력
  console.log(req.query);
  // 입력한 id가 "smhrd"이고, 비밀번호가 "1234"라면 -> 콘솔에 로그인 성공 출력
  // 아니라면 -> 콘솔에 로그인 실패 출력
  if (req.query.id === "smhrd" && req.query.pw === "1234") {
    console.log("로그인 성공");
    // 성공페이지로 이동 -> success.html
    res.redirect("success.html");
  } else {
    console.log("로그인 실패");
    // 실패페이지로 이동 -> fail.html
    res.redirect("fail.html");
  }
});

// post방식으로 넘어온 데이터 처리
// post방식으로 넘어온 데이터를 처리하기 위해서는 body-parser 모듈이 필요
app.post("/postLogin", (req, res) => {
  // bp가 변환한 데이터를 활용
  console.log(req.body);
});

app.listen(3000);
