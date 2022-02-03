const express = require("express");
const {
  deleteProduct,
  createProduct,
  fetchProduct,
  updateProduct,
} = require("../controllers/products.controllers");

const router = express.Router();

router.get("/", fetchProduct);
router.post("/", createProduct);
router.delete("/:productId", deleteProduct);
router.put("/:productId", updateProduct);

module.exports = router;
