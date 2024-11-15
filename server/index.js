//Express setup
const express = require("express");
const app = express();

//env
require("dotenv").config();
const port = process.env.PORT;

//import Database

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
