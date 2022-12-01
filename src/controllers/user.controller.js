const userService = require('../services/user.services');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { status, result } = await userService.login(email, password);

    return res.status(status).json(result);    
  } catch (error) {
    res.status(500).json({ message: error.message });    
  }
};

module.exports = {
  login,
};