const { Category } = require('../models');

const createCategory = async (name) => {
  const alreadyExists = await Category.findOne({ where: { name } });

  if (alreadyExists) {
    return { status: 400, result: { message: 'Category already exists' } };
  }

  const result = await Category.create({ name });

  return { status: 201, result };  
};

module.exports = {
  createCategory,
};