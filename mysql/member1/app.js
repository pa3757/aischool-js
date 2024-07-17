const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const bp = require("body-parser");
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
// 세션을 쓰기 위한 모듈 호출
const session = require("express-session");
const FileStore = require("session-file-store")(session);

app.use(bp.urlencoded({ extended: true }));
// 세션 설정
app.use(
  session({
    httpOnly: true, // http요청만 처리하도록 설정
    resave: false, // 세션을 항상 재 저장하겠다!
    secret: "secret", // 암호화할때 사용하는 키값
    store: new FileStore(), // 세션 저장소
    saveUninitialized: false, // 세션이 저장되기 전에 uninitialized 상태로 만들어 저장
  })
);

app.use("/", mainRouter);
app.use("/user", userRouter);

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.listen(3000);
