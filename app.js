const express = require("express");
require('dotenv').config();
const app = express();
const port = 8080;

// Middleware
app.use(express.json());

// Utilities
let books = require('./utils/fileUtils').getBooksFromFile();

// Middleware to add books to the request object
app.use((req, res, next) => {
    req.books = books;
    next();
});

// Route imports
const booksRoutes = require("./routes/booksRoutes");
const authRoutes = require("./routes/authRoutes");

// Route to get Hello World 
app.get('/hello', (req, res) =>  {
    res.type('txt').status(200).send('Hello, world!')
});


// Use book and authentication routes
app.use('/', booksRoutes);
app.use('/', authRoutes);

// Server Initialization
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
