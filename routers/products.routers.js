const express = require("express");
const {
  deleteProduct,
  createProduct,
  fetchProduct,
} = require("../controllers/products.controllers");

const router = express.Router();

router.get("/", fetchProduct);
router.post("/", createProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
