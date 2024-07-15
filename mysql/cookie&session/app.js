const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const mainRouter = require("./routes/mainRouter");
const cookieRouter = require("./routes/cookie");

// 쿠키 세팅
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/", mainRouter);
app.use("/cookie", cookieRouter);

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

app.listen(3000);
