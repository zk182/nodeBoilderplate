const { ErrorHelper } = require('../../middlewares');
const Example = require('./example');

module.exports = {
	/**
	* description : Update
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	update: async (req, res, next) => {
		try {
			await Example.update();
			return res.sendStatus(200);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
	/**
	* description : Get all
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	getAll: async (req, res, next) => {
		try {
			const items = await Example.getAll();
			return res.json(items);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
	/**
	* description : Get
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	get: async (req, res, next) => {
		try {
			const item = await Example.get();
			return res.json(item);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
	/**
	* description : Post
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	post: async (req, res, next) => {
		try {
			const { Data } = req.body;
			await Example.post(Data);
			return res.sendStatus(200);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
	/**
	* description : Delete
	* @since 1.0.0
	* @status Stable
	*
	* @return {null}
	*/
	remove: async (req, res, next) => {
		try {
			await Example.remove();
			return res.sendStatus(200);
		} catch (err) {
			return next(new ErrorHelper(err.message, err.statusCode));
		}
	},
};
