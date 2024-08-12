const express = require("express");
const app = express();
const bp = require("body-parser");
const indexRouter = require("./router/index");

app.use(express.static("public"));

app.use(bp.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(8000);
