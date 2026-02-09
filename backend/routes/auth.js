const express = require('express');
const { login, register, getCurrentUser, logout } = require('../controllers/authController');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/login', login);
router.post('/register', register);

// Protected routes
router.get('/me', authenticateToken, getCurrentUser);
router.post('/logout', authenticateToken, logout);

module.exports = router;
