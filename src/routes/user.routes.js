const express = require('express');
const userController = require('../controllers/user.controller');
const { validateLogin } = require('../middlewares/user.middlewares');

const router = express.Router();

router.post('/login', validateLogin, userController.login);

module.exports = router;