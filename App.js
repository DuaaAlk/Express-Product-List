const express = require("express");
const connectDB = require("./database");
const app = express();
const PORT = 8000;

const productRouter = require("./routers/products.routers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
  connectDB();
});
