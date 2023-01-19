/**
import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from "path";
import "./assets/scss/style.scss";
import Loader from "./layouts/loader/Loader";
import App from "./App";
 */
const express = require("express");
//const cors = require("cors");
const path = require("path");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || 8002;

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: "test.cafe24app.com",
  user: "ascension0",
  password: "shy66300!",
  database: "ascension0",
  port: "3306",
});

// 데이터베이스 연결
connection.connect();

app.use(express.static("uploads"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/views/index.ejs"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/views/index.ejs"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
/*

      app.set("views", __dirname + "/src");
      app.set("view engine", "ejs");
      app.get("/", (req, res) => {
        res.render("index");
      });
*/

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
connection.end(); 

//앱 실행
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
*/
