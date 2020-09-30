const app = require("express").Router();

app.get("/", function (req, res) {
  res.send("Hello from API");
});

module.exports = app;
