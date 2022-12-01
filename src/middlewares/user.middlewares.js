const loginBody = require('./joi');

const validateLogin = (req, res, next) => {
  const user = req.body;

  const { error } = loginBody.validate(user);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

const authMiddleware = () => {

};

module.exports = {
  validateLogin,
  authMiddleware,
};