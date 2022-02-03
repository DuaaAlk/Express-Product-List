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

exports.createProduct = async (req, res) => {
  //   const { name, image, description, color, quantity, price } = req.body;
  //   const product = {
  //     name,
  //     image,
  //     description,
  //     color,
  //     quantity,
  //     price,
  //     id: Math.floor(Math.random() * 100000),
  //   };
  //   products.push(product);
  //   res.json(product);
  const product = req.body;
  try {
    const createdProduct = await Product.create(product);
    res.status(201).json({
      msg: "Product is created successfully",
      payload: createdProduct,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.deleteProduct = async (req, res) => {
  //   const foundProduct = products.find((product) => +product.id === +productId);
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findOneAndDelete(productId);
    if (foundProduct) {
      //   products = products.filter((product) => +product.id !== +productId);
      res.status(200).json({ msg: "The product is deleted succesfully.." });
    } else {
      res.status(404).json({ msg: "The product is not found.. " });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  const product = req.body;
  try {
    const updatedProduct = await Product.findOneAndUpdate(productId, product);
    if (updatedProduct) {
      res.status(200).json({
        msg: "The product is updated successfully..",
        payload: updatedProduct,
      });
    } else {
      res.status(404).json({ msg: "The product is not found.. " });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
};
