// Helper function to validate price parameter
exports.isValidPrice = (price) => {
    return /^\d+$/.test(price);
};

// Helper function to validate phrase parameter: only alphabet letters
exports.isValidPhrase = (phrase) => {
    return /^[a-zA-Z]+$/.test(phrase);
};
