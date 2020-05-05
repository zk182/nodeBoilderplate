const Joi = require('joi');

const { validationHelpers } = require('../../lib');

const Schema = Joi.object().keys({
	firstName: Joi.string(),
	lastName: Joi.string(),
	lastLogin: Joi.any(),
	state: Joi.any(),
	acceptedCurrentTos: Joi.boolean(),
	userId: Joi.number(),
	email: Joi.string().required(),
	username: Joi.string().required(),
	iat: Joi.number().required(),
	exp: Joi.number().required(),
});

module.exports = {
	jwtSchema: validationHelpers.createValidator(Schema),
};
