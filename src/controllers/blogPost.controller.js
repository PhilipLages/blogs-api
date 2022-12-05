const blogPostService = require('../services/blogPost.service');

const getAllPosts = async (_req, res) => {
  try {
    const { status, result } = await blogPostService.getAllPosts();  

    return res.status(status).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const { status, result } = await blogPostService.getPostById(id);

    return res.status(status).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });    
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;
  const updatedPost = req.body;

  try {
    const { status, result } = await blogPostService.updatePost(id, userId, updatedPost);

    return res.status(status).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });    
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;

  try {
    const { status, result } = await blogPostService.deletePost(id, userId);

    return res.status(status).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};