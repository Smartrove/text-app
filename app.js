const express = require("express");
const bodyParser = require("body-parser");
const nexmo = require("nexmo");
const socket = require("socket.io");
const ejs = require("ejs");
// const http = require("http").Server(app);

const app = express();
const port = 3000;

//Template engine setup
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

//public folder setup

app.set(express.static(__dirname + "public"));

//middleware for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Creating my Route
app.get("/", (req, res) => {
  res.render("index");
});

//catch form submit
app.post("/", (req, res) => {
  // res.send(req.body);
  // console.log(req.body);
  const number = req.body.number;
  const text = req.body.text;
  console.log(text);

  // nexmo.message.sendSms();
});

//Creating my server
const server = app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
