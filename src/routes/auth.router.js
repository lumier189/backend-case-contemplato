const express = require('express');

const router = express.Router();

router.post('/login');
router.post('/register');
router.get('/profile');

module.exports = router;
