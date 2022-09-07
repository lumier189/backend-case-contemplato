const express = require('express');
const auth = require('../middlewares/auth');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/profile', auth.auth, authController.profile);

module.exports = router;
