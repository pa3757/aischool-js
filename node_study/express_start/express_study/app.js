// express의 핵심 파일
// 서버생성, 연결, 미들웨어 등록, 라우팅 등을 담당
// 1. express 서버 생성
const express = require("express");
const app = express();

// express에서 정적인파일(css,js,img...)을 사용하려면 반드시 public에서 관리해야함
// app에게 알려주기 -> 미들웨어 등록
// 앞으로 정적인 파일은 public에서 찾아라
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("서버생성");
  // 사용자에게 <h1>환영합니다</h1>을 출력
  // res.send("<h1>환영합니다</h1>");
  // 사용자에게 파일로 데이터를 보여주기! -> fs모듈과 같은 기능
  // express는 절대경로를 사용해야함
  // __dirname : 절대경로를 나타내는 node.js 전역변수
  console.log(__dirname);

  res.sendFile(__dirname + "/index2.html");
});

app.listen(3000);
