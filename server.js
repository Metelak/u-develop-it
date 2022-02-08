// import mysql2 file (installed to node_modules)
const mysql = require('mysql2');
// import express
const express = require('express');
// port designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '100saladsareGreat!',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// return all the data in the candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

// Default response for any other request (Not Found)
// catchall route
app.use((req, res) => {
    res.status(404).end();
});

// function that will start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});