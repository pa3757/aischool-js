/*
    라우터 : 클라이언트 요청에 따라 서버에서 적절한 페이지로 이동시키는 기능
    - app.js에 사용할 router만 등록하면 됨
*/
const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRouter");
const subRouter = require("./routes/subRouter");

// app에게 알려주기
// 메인경로로 들어오는 모든 요청은 mainRouter가 할것
app.use("/", mainRouter);
app.use("/minor", subRouter);

app.listen(3000);
