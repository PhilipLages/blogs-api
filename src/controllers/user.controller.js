const userService = require('../services/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { status, result } = await userService.login(email, password);

    return res.status(status).json(result);    
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
};

const createUser = async (req, res) => {
  const newUser = req.body;

  try {
    const { status, result } = await userService.createUser(newUser);

    return res.status(status).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });        
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const { status, result } = await userService.getAllUsers();

    return res.status(status).json(result);    
  } catch (error) {
    res.status(500).json({ message: error.message });          
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const { status, result } = await userService.getUserById(id);

    return res.status(status).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });              
  }
};

module.exports = {
  login,
  createUser,
  getAllUsers,
  getUserById,
};