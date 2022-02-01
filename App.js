const express = require("express");
const data = require("./data");
const PORT = 8000;
const app = express();

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
