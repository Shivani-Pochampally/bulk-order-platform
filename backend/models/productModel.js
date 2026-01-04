const db = require('../config/db');

const getAllProducts = (callback) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) return callback(err);
        callback(null, rows);
    });
};

module.exports = { getAllProducts };
