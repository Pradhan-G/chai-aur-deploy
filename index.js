require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World! ");
});
app.get("/login", (req, res) => {
  res.send(" <h1> Please Login at Chai Aur Code </h1> ");
});
app.get("/youtube", (req, res) => {
  res.send("Hello World! ");
});

app.listen(process.env.port, () => {
  console.log(`Example app is running on http://localhost:${process.env.port}`);
});
