const express = require("express");
const router = express.Router();
const conn = require("../config/mysqlconfig");

// 1. 회원가입 경로로 접근했을 때
router.post("/join", (req, res) => {
  // 프론트에서 넘어온 데이터 확인하기!
  // console.log(req.body);
  let { id, pw, nick } = req.body;
  // DB 연결, 데이터 처리
  // 처리할 sql문
  // 입력할 데이터가 필요한 경우 -> 값을 넣어주기
  // 처리할 콜백함수
  let sql = "insert into member (id,pw,nick) values(?,?,?)";
  conn.query(sql, [id, pw, nick], (err, rows) => {
    // console.log(rows);
    if (rows) {
      // res.redirect("/");
      console.log(rows);
      console.log("가입성공");
      // postman에서 확인하기
      res.json({ result: "가입성공" });
    } else {
      // 가입에 실패했을 때,
      // res.send(`<script>alert("가입실패")</script>`);
    }
  });
});
// 로그인
router.post("/login", (req, res) => {
  // console.log(req.body);
  const { id, pw } = req.body;
  const sql = "select * from member where id=? and pw=?";
  conn.query(sql, [id, pw], (err, rows) => {
    // console.log(rows);
    if (rows.length > 0) {
      console.log("로그인성공");
      // 사용자의 닉네임 정보를 세션에 저장
      // 사용자의 데이터는 DB에서 조회했기 때문에, rows[0]에 담겨있음
      req.session.nick = rows[0].nick;
      res.redirect("/");
    } else {
      console.log("로그인실패");
    }
  });
});
// 정보 수정
router.post("/update", (req, res) => {
  // console.log(req.body);
  const { id, pw, nick } = req.body;
  const sql = "update member set nick = ? where id = ? and pw = ?";
  conn.query(sql, [nick, id, pw], (err, rows) => {
    console.log(rows);
    if (rows.affectedRows > 0) {
      res.redirect("/");
      console.log("정보수정 완료");
    } else {
      console.log("정보수정 실패");
    }
  });
});
// 회원삭제
router.post("/delete", (req, res) => {
  const { id, pw } = req.body;
  const sql = "delete from member where id = ? and pw = ?";
  conn.query(sql, [id, pw], (err, rows) => {
    console.log(rows);
    if (rows.affectedRows > 0) {
      console.log("회원삭제 성공");
      res.redirect("/");
    } else console.log("회원삭제 실패");
  });
});
// 로그아웃
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
