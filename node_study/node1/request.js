// 접속한 사용자의 ip를 체크
const http = require("http");
const userip = require("request-ip");
http
  .createServer((req, res) => {
    // req 역할 : 클라이언트가 넘겨준 정보를 담고 있는 공간(접속시간, 접속장소, ip, 데이터 등)
    // 사용자의 접속 ip 확인 -> getClientIp(req)
    let ip = userip.getClientIp(req);
    // ip앞에 붙어있는 불필요한 7글자를 삭제
    ip = ip.substring(7);
    console.log(ip);
    // 실습 -> 조건문 활용
    // 1. 짝꿍의 컴퓨터가 접속하면 -> "백성수 등장!"
    // 2. 나머지 사용자들은 -> "ㅂㅂ"
    if (ip === "192.168.21.32") {
      console.log("백성수 등장!");
    } else {
      console.log("ㅂㅂ");
    }
  })
  .listen(3000);
