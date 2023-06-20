const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createProduct = async (req, res) => {
  try {
    const { expense, price, category } = req.body;

    if (!price || !category) {
      return res.status(400).json({ error: 'Price and category are required' });
    }

    const product = await Product.create({ expense, price, category });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { expense, price, category } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    product.expense = expense;
    product.price = price;
    product.category = category;
    await product.save();
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    await product.destroy();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
