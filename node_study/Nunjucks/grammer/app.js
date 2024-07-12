/*
    Nunjucks(템플릿 엔진)쓰는 이유
    - HTML페이지는 정적인 페이지
    - 사용자마다 각각 페이지를 만들어 주는건, 불가능
    - 그러면 서버가 템플릿(페이지 1개)을 가지고, 페이지를 제작해라!
    - 템플릿 엔진(nunjucks,ejs,pug등등)
    - 장점 : HTML코드에 JS코드를 더해서 사용

    Nunjucks 설치
    - npm install nunjucks
    - npm install nunjucks chokidar
    views폴더 생성 -> 동적인 HTML파일 생성
*/
const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const nunjucks = require("nunjucks");

// 라우터 등록
app.use("/", mainRouter);

// nunjucks 설정
app.set("view engine", "html");
// nunjucks를 쓸 때 조회할 정보들
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.listen(3000);
