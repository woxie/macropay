const validationUtils = require('../utils/validationUtils');

// Filter books by price or phrase
const getFilteredBooks = (books, price, phrase) => {

    if (price) {
        if (!validationUtils.isValidPrice(price)) {
            throw new Error('Price is invalid');
        }
        books = books.filter(book => book.price > price);
    }

    if (phrase) {
        const lowerCasePhrase = phrase.toLowerCase();
        books = books.filter(book => {
            const lowerCaseAuthor = book.author.toLowerCase();
            return [...lowerCasePhrase].every(char => lowerCaseAuthor.includes(char));
        });
    }

    return books;
};

const getBookById = (books, id) => {
    return books.find(book => book.id === id);
};

const createBook = (bookData, books) => {
    books.push(bookData); 
    return bookData;
};

const calculateAveragePrice = (books) => {
    const totalSum = books.reduce((sum, book) => sum + book.price, 0);
    return (totalSum / books.length).toFixed(2);
};

module.exports = {
    getFilteredBooks,
    getBookById,
    createBook,
    calculateAveragePrice
};
