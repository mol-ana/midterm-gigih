const mongoose = require('mongoose');
const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema({
  productId: { type: String, default: uuidv4(), required: true },
  videoId: { type: String, required: true },
  linkProduct: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
},{ collection: 'products', versionKey: false, });

module.exports = mongoose.model("Product", productSchema);
