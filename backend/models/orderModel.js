const db = require('../config/db');


const createOrder = (orderData, callback) => {
    const { buyer_name, product_name, quantity, delivery_address } = orderData;
    const query = `INSERT INTO orders (buyer_name, product_name, quantity, delivery_address) VALUES (?, ?, ?, ?)`;
    db.run(query, [buyer_name, product_name, quantity, delivery_address], function(err) {
        if (err) return callback(err);
        callback(null, { orderId: this.lastID, status: 'Pending' });
    });
};

const getOrderById = (id, callback) => {
    db.get('SELECT * FROM orders WHERE id = ?', [id], (err, row) => {
        if (err) return callback(err);
        callback(null, row);
    });
};


const getAllOrders = (callback) => {
    db.all('SELECT * FROM orders', [], (err, rows) => {
        if (err) return callback(err);
        callback(null, rows);
    });
};

const updateOrderStatus = (id, status, callback) => {
    db.run('UPDATE orders SET status = ? WHERE id = ?', [status, id], function(err) {
        if (err) return callback(err);
        callback(null, { updated: this.changes });
    });
};

module.exports = { createOrder, getOrderById, getAllOrders, updateOrderStatus };
