var express = require("express");

var port = 3000;
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.send("test deploy");
});

app.listen(port, function () {
  console.log("Server listening on port" + port);
});
