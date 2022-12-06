const express = require('express');
const userController = require('../controllers/user.controller');
const { validateLogin } = require('../middlewares/user.middlewares');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, userController.login);

module.exports = loginRouter;