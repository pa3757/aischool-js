const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const num = parseInt(query.num);

    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.write(`<table style="border: 1px solid black; "><tr>`);
    for (let i = 0; i < num; i++) {
      res.write(
        `<td style="border: 1px solid black; width: 50px; height: 100px; text-align: center;">${
          i + 1
        }</td>`
      );
    }
    res.write(`</tr></table>`);
    res.end();
  })
  .listen(3000);

/* 백엔드 코드를 작성할 때 순서!
    1. node는 모듈화 되어있는 프로그래밍 방식 -> 필요한걸 내가 직접 적성해야한다.
    2. 코드를 작성할 때, 반드시 큰 영역부터 작성할 것
    3. 반복문이 필요한 경우에는, 반복하지 않은 코드부터 작성하기
  */
