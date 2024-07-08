const http = require("http");

http
  .createServer((req, res) => {
    // req(클라이언트), res(서버)
    // 사용자가 서버에 접속하면 <h1>태그로 접속을 환영합니다!
    // 1. head에 한글 인코딩
    // 200 -> 정상적인 접속
    // 404 -> 페이지를 찾을 수 없음(클라이언트,frontend)
    // 500 -> 서버 오류(서버, backend)
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>접속을 환영합니다!</h1>");
    res.end();
  })
  .listen(3000);
