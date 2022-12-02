const blogPostService = require('../services/blogPost.service');

const getAllPosts = async (_req, res) => {
  try {
    const { status, result } = await blogPostService.getAllPosts();  

    return res.status(status).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
};