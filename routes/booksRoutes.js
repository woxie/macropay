const express = require("express");
const booksController = require("../controllers/booksController");
const authenticateToken = require("../middleware/authenticateToken");

const router = express.Router();

// Get the average price
router.get('/books/average', authenticateToken, booksController.getAveragePrice);

// Get all books
router.get('/books', authenticateToken, booksController.getBooks);

// Get a single book by ID
router.get('/books/:id', authenticateToken, booksController.getBookById);

// Create a new book
router.post('/books', authenticateToken, booksController.createBook);


module.exports = router;
