/* eslint-disable no-empty */
/* eslint-disable security/detect-object-injection */
const { ErrorHelper } = require('../../middlewares');

const getAll = () => {
	try {
	} catch (err) {
		throw new ErrorHelper(err.message, err.statusCode, err.isOperational);
	}
};

const get = () => {
	try {
	} catch (err) {
		throw new ErrorHelper(err.message, err.statusCode, err.isOperational);
	}
};

const update = () => {
	try {
	} catch (err) {
		throw new ErrorHelper(err.message, err.statusCode, err.isOperational);
	}
};

const post = () => {
	try {
	} catch (err) {
		throw new ErrorHelper(err.message, err.statusCode, err.isOperational);
	}
};

const remove = () => {
	try {
	} catch (err) {
		throw new ErrorHelper(err.message, err.statusCode, err.isOperational);
	}
};

module.exports = {
	getAll,
	get,
	update,
	post,
	remove,
};
