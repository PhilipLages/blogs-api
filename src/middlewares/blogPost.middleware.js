const { updatedPostBody } = require('./joi');

const validatePostAuthor = (req, res, next) => {
  const { userId } = req;
  const { id } = req.params;

    if (Number(id) !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

  return next();
};

const validateUpdatedPost = (req, res, next) => {
  const updatedPost = req.body;

  const { error } = updatedPostBody.validate(updatedPost);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

module.exports = {
  validatePostAuthor,
  validateUpdatedPost,
};