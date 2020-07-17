const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const http = require("http");
const routes = require("./routes/main.route");
const bodyParser = require("body-parser");

const port = process.env.APP_BACKEND_PORT;

const connectionString = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

mongoose.connect(
  connectionString,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Server connected to database!");
  }
);

mongoose.set("useFindAndModify", false);

const server = http.createServer(app);

app.use("/api", routes);
app.use( bodyParser.json( { "limit": "100MB", "extended": true } ) );
app.use( bodyParser.urlencoded( { "limit": "100MB", "extended": true } ) );

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
