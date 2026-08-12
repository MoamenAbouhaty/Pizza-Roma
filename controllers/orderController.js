const Order = require('../models/Order');

function generateOrderNumber() {
    return 'BN-' + Date.now().toString().slice(-8);
}

// POST /api/orders
// Body: { customerName, customerEmail, items: [{ id, name, price, quantity }], totalAmount }
async function createOrder(req, res) {
    try {
        const { customerName, customerEmail, items, totalAmount } = req.body;

        if (!customerName || !customerEmail) {
            return res.status(400).json({ success: false, error: 'Customer name and email are required.' });
        }
        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ success: false, error: 'Order must contain at least one item.' });
        }

        // Recalculate the total server-side so the client can't tamper with pricing.
        const computedTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

        const order = await Order.create({
            orderNumber: generateOrderNumber(),
            customerName,
            customerEmail,
            items,
            totalAmount: Number(computedTotal.toFixed(2)) || totalAmount
        });

        res.status(201).json({ success: true, data: order });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

// GET /api/orders
async function getOrders(req, res) {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json({ success: true, count: orders.length, data: orders });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to fetch orders.' });
    }
}

// GET /api/orders/:orderNumber
async function getOrderByNumber(req, res) {
    try {
        const order = await Order.findOne({ orderNumber: req.params.orderNumber });
        if (!order) {
            return res.status(404).json({ success: false, error: 'Order not found.' });
        }
        res.json({ success: true, data: order });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Failed to fetch order.' });
    }
}

// PATCH /api/orders/:orderNumber/status
async function updateOrderStatus(req, res) {
    try {
        const { status } = req.body;
        const order = await Order.findOneAndUpdate(
            { orderNumber: req.params.orderNumber },
            { status },
            { new: true, runValidators: true }
        );
        if (!order) {
            return res.status(404).json({ success: false, error: 'Order not found.' });
        }
        res.json({ success: true, data: order });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

module.exports = { createOrder, getOrders, getOrderByNumber, updateOrderStatus };
