const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(
    path.join(__dirname, '../database/database.sqlite'),
    (err) => {
        if (err) console.error('DB connection error:', err.message);
        else console.log('Connected to SQLite database');
    }
);
db.serialize(() => {
    
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        image TEXT
    )`);

    
    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        buyer_name TEXT NOT NULL,
        product_name TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        delivery_address TEXT NOT NULL,
        status TEXT DEFAULT 'Pending'
    )`);
});

module.exports = db;
