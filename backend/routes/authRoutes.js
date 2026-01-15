const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Test route
router.get('/test', (req, res) => {
  res.json({ success: true, message: 'Auth routes working' });
});

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;
