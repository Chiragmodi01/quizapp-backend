const express = require("express");
const responseData = require("./data.json");
const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  const data = responseData;
  res.json(data);
});

app.listen(5000, () => {
  console.log("Server started");
});
