const jwt = require('jsonwebtoken');
const loginBody = require('./joi');

const validateLogin = (req, res, next) => {
  const user = req.body;

  const { error } = loginBody.validate(user);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  return next();
};

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorization.replace('Bearer', '').trim();
  const secret = process.env.JWT_SECRET || 'yourSecretKey';

  try {
    const data = jwt.verify(token, secret);

    const { id } = data;

    req.userId = id;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateLogin,
  authMiddleware,
};