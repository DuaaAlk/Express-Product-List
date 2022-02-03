const Product = require("../Database/Product");

const data = require("../data");
let products = data;

exports.fetchProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduct = (req, res) => {
  const { name, image, description, color, quantity, price } = req.body;
  const product = {
    name,
    image,
    description,
    color,
    quantity,
    price,
    id: Math.floor(Math.random() * 100000),
  };
  products.push(product);
  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => +product.id === +productId);
  if (foundProduct) {
    products = products.filter((product) => +product.id !== +productId);
    res.status(204).json({ msg: "The product is deleted.. " });
  } else {
    res.status(404).json({ msg: "The product is not found.. " });
  }
};
