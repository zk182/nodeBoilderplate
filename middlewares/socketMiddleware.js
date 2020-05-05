const ErrorHelper = require('./errorHelper');
const Socket = require('../socket');

const inyectSocket = (req, res, next) => {
	try {
		const { user } = req;
		req.socket = user ? Socket.getSocket(user.email) : null;
		next();
	} catch (e) {
		next(new ErrorHelper(e, 403, true));
	}
};

const inyectSocketSns = (req, res, next) => {
	try {
		const user = req.body.MessageAttributes.user.Value;
		req.socket = user ? Socket.getSocket(user) : null;
		next();
	} catch (e) {
		next(new ErrorHelper(e, 403, true));
	}
};

module.exports = {
	inyectSocket,
	inyectSocketSns,
};
