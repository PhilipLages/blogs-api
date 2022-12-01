const express = require('express');
const userController = require('../controllers/user.controller');
const { validateLogin, validateNewUser } = require('../middlewares/user.middlewares');

const router = express.Router();

router.post('/login', validateLogin, userController.login);
router.post('/user', validateNewUser, userController.createUser);

module.exports = router;