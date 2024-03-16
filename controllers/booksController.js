const booksService = require('../services/booksService');
const validationUtils = require('../utils/validationUtils');

// Controller for getting a list of books, with optional parameters
const getBooks = (req, res) => {
    const { price, phrase } = req.query;

        if (phrase && !validationUtils.isValidPhrase(phrase)) {
            return res.status(400).json({ error: 'Phrase should contain only alphabet letters' });
        }

    try {
        let filteredBooks = booksService.getFilteredBooks(req.books, price, phrase);
        if (filteredBooks.length === 0) {
            return res.status(404).json({ error: 'No books found' });
        }
        res.status(200).json(filteredBooks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller for getting a single book by ID
const getBookById = (req, res) => {
    const { id } = req.params;
    
    try {
        const book = booksService.getBookById(req.books, id);
        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller for creating a new book
const createBook = (req, res) => {
    const books = req.books;
    const bookData = req.body;
    try {
        const newBook = booksService.createBook(bookData, books);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller for calculating the average price
const getAveragePrice = (req, res) => {
    try {
        const averagePrice = booksService.calculateAveragePrice(req.books);
        res.status(200).json({ average: averagePrice });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getBooks,
    getBookById,
    createBook,
    getAveragePrice
};
