const fs = require('fs');
const booksFilePath = './MOCK_DATA.json';

// Get books data from JSON file
exports.getBooksFromFile = () => {
    try {
        const data = fs.readFileSync(booksFilePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading file:', error);
        throw new Error('Internal Server Error');
    }
};
