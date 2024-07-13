const mysql = require("mysql2");
// DB 연결정보
mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: " 12345",
  database: "nodejs",
});
// 연결 진행
conn.connect();
console.log("DB연결 성공");

module.exports = conn;
