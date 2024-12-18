const express = require('express');
const { addProduct, getProducts } = require('../controllers/productController');
const { protect, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', protect, isAdmin, addProduct);
router.get('/', getProducts);

module.exports = router;
