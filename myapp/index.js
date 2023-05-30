const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/date", (req, res) => {
  const date = new Date();
  res.send(`Today's date is ${date}`);
});

app.get("/page", (req, res) => {
  res.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
