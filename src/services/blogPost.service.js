const { Op } = require('sequelize');
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

const updatePost = async (id, userId, { title, content }) => {
  const result = await BlogPost.findByPk(id);

  if (!result) {
    return { status: 404, result: { message: 'Post does not exist' } };
  }

  if (result.userId !== userId) {
    return { status: 401, result: { message: 'Unauthorized user' } };
  }
  
  await BlogPost.update({ 
    title,
    content,
   },
   {
    where: { id },
   });

   const updatedPost = await getPostById(id);

  return { status: 200, result: updatedPost };
};

const deletePost = async (id, userId) => {
  const result = await BlogPost.findByPk(id);

  if (!result) {
    return { status: 404, result: { message: 'Post does not exist' } };
  }

  if (result.userId !== userId) {
    return { status: 401, result: { message: 'Unauthorized user' } };
  }
  
  await BlogPost.destroy({ where: { id } });

  return { status: 204, result: null };
};

const getPostBySearchTerm = async (term) => {
  const result = await BlogPost.findAll({
    where: {
      [Op.or]: [{ title: { [Op.like]: `${term}%` } }, { content: { [Op.like]: `${term}%` } }],
    },
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

  return { status: 200, result };
};

module.exports = {
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostBySearchTerm,
};