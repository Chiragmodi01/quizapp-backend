const express = require("express");
const responseData = require("./data.json");

const app = express();

app.get("/", (req, res) => {
  const data = responseData;
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server started");
});
