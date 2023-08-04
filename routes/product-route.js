const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/:videoId/products', productController.getProductsByVideoId);
router.post('/:videoId/products', productController.createProduct);

module.exports = router;
    