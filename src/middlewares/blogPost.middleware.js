const { updatedPostBody } = require('./joi');

const validateUpdatedPost = (req, res, next) => {
  const updatedPost = req.body;

  const { error } = updatedPostBody.validate(updatedPost);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

module.exports = {
  validateUpdatedPost,
};