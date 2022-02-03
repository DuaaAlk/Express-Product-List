const express = require("express");
const connectDB = require("./Database/models/index");
const app = express();
const productRouter = require("./routers/products.routers");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRouter);

app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
  connectDB();
});
