import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from "path";

const app = express();
const port = process.env.PORT || 8002;
app.use(express.static("uploads"));

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// mysql 모듈 사용
//const mysql = require("mysql");

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: "ascension.cafe24app.com",
  user: "ascension0",
  password: "shy66300!",
  database: "ascension0",
  port: "3306",
});

// 데이터베이스 연결
connection.connect();

/**
// create 쿼리문 사용
connection.query('쿼리문', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.query('describe books', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// 연결 종료
connection.end(); */
//앱 실행

app.set("views", __dirname + "/src");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
/*
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
*/
