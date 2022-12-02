const { Category } = require('../models');

const createCategory = async (name) => {
  const alreadyExists = await Category.findOne({ where: { name } });

  if (alreadyExists) {
    return { status: 400, result: { message: 'Category already exists' } };
  }

  const result = await Category.create({ name });

  return { status: 201, result };  
};

const getAllCategories = async () => {
  const result = await Category.findAll();

  if (!result) {
    return { status: 400, result: { message: 'No categories found' } };
  }

  return { status: 201, result };  
}; 

module.exports = {
  createCategory,
  getAllCategories,
};