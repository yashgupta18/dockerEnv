const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send(`Hello ${process.env.NAME}!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
