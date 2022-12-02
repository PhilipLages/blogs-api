const { createCategoryBody } = require('./joi');

const validateNewCategory = (req, res, next) => {
  const category = req.body;

  const { error } = createCategoryBody.validate(category);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

module.exports = {
  validateNewCategory,
};