const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');
const { authMiddleware } = require('../middlewares/user.middlewares');
const { validateUpdatedPost, validateNewPost } = require('../middlewares/blogPost.middleware');

const postRouter = express.Router();

postRouter.use(authMiddleware);

postRouter.get('/search', blogPostController.getPostBySearchTerm);

postRouter.get('/:id', blogPostController.getPostById);

postRouter.put('/:id', validateUpdatedPost, blogPostController.updatePost);

postRouter.delete('/:id', blogPostController.deletePost);

postRouter.post('/', validateNewPost, blogPostController.createPost);

postRouter.get('/', blogPostController.getAllPosts);

module.exports = postRouter;