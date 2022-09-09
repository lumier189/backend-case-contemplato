const express = require('express');
const starWarsController = require('../controllers/starwars.controller');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', auth.auth, starWarsController.listAll);

module.exports = router;
