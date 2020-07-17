const express = require("express");
const env = require("dotenv").config();
const app = express();
const port = process.env.APP_BACKEND_PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
