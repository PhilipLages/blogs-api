const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (email, password) => {
  const result = await User.findOne({ where: { email, password } });

  if (!result) {
    return { status: 400, result: { message: 'Invalid fields' } };
  }

  const secret = process.env.JWT_SECRET || 'yourSecretKey';
  const token = jwt.sign({ id: result.id }, secret, { expiresIn: '1d' });

  return { status: 200, result: { token } };
};

module.exports = {
  login,
};
