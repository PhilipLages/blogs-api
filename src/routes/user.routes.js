const express = require('express');
const userController = require('../controllers/user.controller');
const { 
  validateLogin, 
  validateNewUser, 
  authMiddleware, 
} = require('../middlewares/user.middlewares');

const router = express.Router();

router.post('/login', validateLogin, userController.login);

router.post('/user', validateNewUser, userController.createUser);

router.use(authMiddleware);

router.get('/user', userController.getAllUsers);

router.get('/user/:id', userController.getUserById);

module.exports = router;