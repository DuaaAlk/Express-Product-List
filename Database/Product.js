const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    neme: String,
    image: String,
    description: String,
    color: String,
    quantity: Number,
    price: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", ProductSchema);
