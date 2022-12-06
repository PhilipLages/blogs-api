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

const createUser = async (newUser) => {
  const { email } = newUser;
  const userAlreadyExists = await User.findOne({ where: { email } });

  if (userAlreadyExists) {
    return { status: 409, result: { message: 'User already registered' } };
  }

  const result = await User.create(newUser);

  const secret = process.env.JWT_SECRET || 'yourSecretKey';
  const token = jwt.sign({ id: result.id }, secret, { expiresIn: '1d' });

  return { status: 201, result: { token } };
};

const getAllUsers = async () => {
  const result = await User.findAll();

  if (!result) {
    return { status: 404, result: { message: 'No user found' } };
  }

  return { status: 200, result };
};

const getUserById = async (id) => {
  const result = await User.findOne({ where: { id } });

  if (!result) {
    return { status: 404, result: { message: 'User does not exist' } };
  }

  return { status: 200, result };
};

const deleteUser = async (userId) => {
  await User.destroy({ where: { id: userId } });

  return { status: 204, result: null };
};
module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
