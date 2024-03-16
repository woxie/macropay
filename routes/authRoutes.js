const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Route for user authentication and JWT token generation
router.post('/auth', authController.authenticateUser);

module.exports = router;
