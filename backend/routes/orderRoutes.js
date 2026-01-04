const express = require('express');
const router = express.Router();
const { placeOrder, getOrder, getAllOrders, updateOrder } = require('../controllers/orderController');

router.post('/', placeOrder);
router.get('/:id', getOrder);


router.get('/', getAllOrders);
router.put('/:id', updateOrder);

module.exports = router;
