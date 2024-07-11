const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    // 1. 사용자가 넘긴 url 데이터를 조회
    console.log(req.url);
    // 2. 넘겨받은 string형태의 데이터를 컴퓨터가 조회할 수 있게 querystring으로 변환
    const query = url.parse(req.url, true).query;
    console.log(query);
    const cal = query.cal;
    let result = 0;
    let num1 = parseInt(query.num1);
    let num2 = parseInt(query.num2);
    if (cal === "+") {
      result = num1 + num2;
    } else if (cal === "-") {
      result = num1 - num2;
    } else if (cal === "*") {
      result = num1 * num2;
    } else if (cal === "/") {
      result = num1 / num2;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write(`<h1>계산 결과 : ${result}</h1>`);
    res.end();
  })
  .listen(3000);
