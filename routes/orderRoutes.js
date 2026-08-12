const express = require('express');
const router = express.Router();
const {
    createOrder,
    getOrders,
    getOrderByNumber,
    updateOrderStatus
} = require('../controllers/orderController');

// POST /api/orders  -> place a new order (used by the "Proceed to Checkout" button)
// GET  /api/orders   -> list all orders (admin use)
router.route('/').post(createOrder).get(getOrders);

// GET   /api/orders/:orderNumber         -> look up one order
router.route('/:orderNumber').get(getOrderByNumber);

// PATCH /api/orders/:orderNumber/status  -> update order status (admin use)
router.route('/:orderNumber/status').patch(updateOrderStatus);

module.exports = router;
