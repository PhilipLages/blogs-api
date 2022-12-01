const Joi = require('joi');

const loginBody = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': 'Some required fields are missing',
});

module.exports = loginBody;
