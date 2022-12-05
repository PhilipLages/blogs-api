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

const getPostById = async (id) => {
  const result = await BlogPost.findOne({ 
    where: { id },
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
    return { status: 404, result: { message: 'Post does not exist' } };
  }

  return { status: 200, result };
};

const updatePost = async (id, { title, content }) => {
  await BlogPost.update({ 
    title,
    content,
   },
   {
    where: { id },
   });

   const { result } = await getPostById(id);

  return { status: 200, result };
};

module.exports = {
  getAllPosts,
  getPostById,
  updatePost,
};