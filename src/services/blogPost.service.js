const { BlogPost, User, Category } = require('../models');

const getAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
    {
      model: User,
      as: 'user',
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ],
  });

  if (!result) {
    return { status: 404, result: { message: 'No posts found' } };
  }

  return { status: 200, result };
};

module.exports = {
  getAllPosts,
};