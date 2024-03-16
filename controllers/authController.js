const jwt = require('jsonwebtoken');

// Controller for authenticating a user
const authenticateUser = (req, res) => {
    const { user, password } = req.body;

    if (user && password && user === "user4" && password === "pass4#") {
        const token = jwt.sign({ user: user }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token: token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
};

module.exports = {
    authenticateUser
};
