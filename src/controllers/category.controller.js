const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  
  try {
    const { status, result } = await categoryService.createCategory(name);
    
    return res.status(status).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });    
  }
};

module.exports = {
  createCategory,
};