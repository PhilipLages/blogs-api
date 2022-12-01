const Joi = require('joi');

const emailRegex = /^(.+)@(.+)$/;

const loginBody = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': 'Some required fields are missing',
});

const createUserBody = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
}).required().messages({
  'string.empty': 'Some required fields are missing',
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.pattern.base': '{#label} must be a valid email',
});

module.exports = {
  loginBody,
  createUserBody,
};
