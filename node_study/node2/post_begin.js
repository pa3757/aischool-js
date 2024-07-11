const http = require("http");
const url = require("url");
const qs = require("querystring");

http
  .createServer((req, res) => {
    // post방식으로 데이터를 받아 올 때는 영역이 2개 필요
    // 1. 데이터를 받는 영역
    // 2. 데이터를 받아서 처리하는 영역
    // 데이터를 받아 올 때
    let body = "";
    req.on("data", (data) => {
      // post로 받아온 데이터는 Buffer형태기 때문에 toString()으로 변환
      body = data.toString();
      console.log(body);
    });
    // 문자로 변형된 데이터를 처리하는 로직
    req.on("end", () => {
      // 문자 데이터를 객체형태로 변환하는 작업 -> querystring 모듈을 활용
      const query = qs.parse(body);
      console.log(query);
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write(
        `<h1>당신의 아이디는 ${query.id}</h1><h1>당신의 비밀번호는 ${query.pw}입니다</h1>`
      );
      res.end();
    });
  })
  .listen(3000);
