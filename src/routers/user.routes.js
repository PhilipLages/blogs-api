const express = require('express');
const userController = require('../controllers/user.controller');
const { validateNewUser, authMiddleware } = require('../middlewares/user.middlewares');

const userRouter = express.Router();

userRouter.post('/', validateNewUser, userController.createUser);

userRouter.use(authMiddleware);

userRouter.get('/:id', userController.getUserById);

userRouter.get('/', userController.getAllUsers);

userRouter.delete('/me', userController.deleteUser);

module.exports = userRouter;