const express = require('express');
const auth = require('../middlewares/auth');
const taskController = require('../controllers/task.controller');

const router = express.Router();

router.get('/', auth.auth, taskController.list);
router.post('/', auth.auth, taskController.create);
router.put('/:id', auth.auth, taskController.edit);
router.delete('/:id', auth.auth, taskController.destroy);

module.exports = router;
