const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html");
});

router.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.id === "smhrd" && req.body.pw === "1234") {
    res.send(
      `<p style="border: 1px solid black; width: 200px">${req.body.id}님 환영합니다!</p>`
    );
  } else {
    res.send(
      `<p style="border: 1px solid black; width: 200px">아이디 또는 비밀번호를 확인해주세요.</p>`
    );
  }
});

module.exports = router;
