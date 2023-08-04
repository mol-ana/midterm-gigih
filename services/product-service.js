const Product = require('../models/product-model');

async function getProductsByVideoId(videoId) {
  try {
    const products = await Product.find({ videoId }, { _id: 0 });
    return products;
  } catch (error) {
    throw new Error('Error retrieving products from the database');
  }
}

async function createProduct(videoId, linkProduct, title, price) {
  try {
    const newProduct = await Product.create({ videoId, linkProduct, title, price});
    return newProduct;
  } catch (error) {
    throw new Error('Error creating a new product');
  }
}

module.exports = {
  getProductsByVideoId,
  createProduct
};
