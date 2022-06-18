const express = require("express");
const https = require("node:https");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  var mail = req.body.fname;
  var mail = req.body.lname;
  var mail = req.body.email;
  console.log(mail);
});

app.listen(port, function() {
  console.log("Port listening 3000");
});
