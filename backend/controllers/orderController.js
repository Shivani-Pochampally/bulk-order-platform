const Order = require('../models/orderModel');


const placeOrder = (req, res) => {
    const orderData = req.body;
    Order.createOrder(orderData, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
};

const getOrder = (req, res) => {
    const id = req.params.id;
    Order.getOrderById(id, (err, order) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    });
};


const getAllOrders = (req, res) => {
    Order.getAllOrders((err, orders) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(orders);
    });
};


const updateOrder = (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    Order.updateOrderStatus(id, status, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Order updated', ...result });
    });
};

module.exports = { placeOrder, getOrder, getAllOrders, updateOrder };
