const Product = require('../models/productModel');


const getProducts = (req, res) => {
    Product.getAllProducts((err, products) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(products);
    });
};

module.exports = { getProducts };
