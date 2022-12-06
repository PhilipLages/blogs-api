const express = require('express');
const categoryController = require('../controllers/category.controller');
const { authMiddleware } = require('../middlewares/user.middlewares');
const { validateNewCategory } = require('../middlewares/category.middleware');

const categoriesRouter = express.Router();

categoriesRouter.use(authMiddleware);

categoriesRouter.post('/', validateNewCategory, categoryController.createCategory);

categoriesRouter.get('/', categoryController.getAllCategories);

module.exports = categoriesRouter;