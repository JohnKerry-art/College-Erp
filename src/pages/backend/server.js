import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite
const db = new sqlite3.Database('./backend/users.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to SQLite database.');
});

// Create users table
db.run(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )`
);

// Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
        if (err) return res.json({ success: false, message: 'Database error' });
        if (!row) return res.json({ success: false, message: 'Invalid credentials' });
        res.json({ success: true, message: 'Login successful' });
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
