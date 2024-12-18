const Product = require('../models/Product');

const addProduct = async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  try {
    const product = await Product.create({ name, description, price, imageUrl });
    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product' });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

module.exports = { addProduct, getProducts };