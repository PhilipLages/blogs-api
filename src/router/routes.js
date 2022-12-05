const express = require('express');
const userController = require('../controllers/user.controller');
const categoryController = require('../controllers/category.controller');
const blogPostController = require('../controllers/blogPost.controller');
const { 
  validateLogin, 
  validateNewUser, 
  authMiddleware, 
} = require('../middlewares/user.middlewares');
const { 
  validateNewCategory,
} = require('../middlewares/category.middleware');
const { validatePostAuthor, validateUpdatedPost } = require('../middlewares/blogPost.middleware');

const router = express.Router();

router.post('/login', validateLogin, userController.login);

router.post('/user', validateNewUser, userController.createUser);

router.use(authMiddleware);

router.get('/user/:id', userController.getUserById);

router.get('/post/:id', blogPostController.getPostById);

router.put('/post/:id', validatePostAuthor, validateUpdatedPost, blogPostController.updatePost);

router.post('/categories', validateNewCategory, categoryController.createCategory);

router.get('/categories', categoryController.getAllCategories);

router.get('/post', blogPostController.getAllPosts);

router.get('/user', userController.getAllUsers);

module.exports = router;