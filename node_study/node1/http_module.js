// 실제 node로 서버를 만들기 위해서 사용하는 모듈 -> http
// 로컬 서버 제작 (서버의 이름 -> localhost + port번호)
// 모듈을 불러들일 때는 const를 사용한다.
const http = require("http");
// 서버를 만들때 주의할 점!
// 1. 매개변수가 2개 필요하다. (req, res)
// 2. listen을 통해서 포트번호를 지정해줘야 한다.
// 3. 서버를 실행할 때는 node 파일명.js
// 4. 서버를 종료할 때는 ctrl + c
// 5. 서버를 실행할 때는 서버를 실행할 파일이 있는 경로로 이동해서 실행해야 한다.

http
  .createServer((req, res) => {
    console.log("서버가 실행중입니다.");
  })
  .listen(3000);
