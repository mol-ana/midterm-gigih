const productService = require('../services/product-service');

async function getProductsByVideoId(req, res) {
  const { videoId } = req.params;
  try {
    const Products = await productService.getProductsByVideoId(videoId);
    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createProduct(req, res) {
  const { videoId } = req.params;
  const { linkProduct, title, price } = req.body;
  try {
    const newProduct = await productService.createProduct(videoId, linkProduct, title, price);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getProductsByVideoId,
  createProduct
};
