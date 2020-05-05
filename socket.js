/* eslint-disable security/detect-object-injection */
const { logger, messages } = require('./lib');
const { jwtHelper, ErrorHelper } = require('./middlewares');

const exampleSocketEvents = require('./components/example/exampleSocket');

class ServiceSocket {
	socketInit(io) {
		this.io = io;
		this.users = {};
		io.of('/admin-backend').on('connection', async (socketArg) => {
			const socket = socketArg;
			const bearerHeader = socket.handshake.query.token;
			let user = null;
			try {
				user = await jwtHelper.verifyJwtToken(bearerHeader);
				if (!user) throw new ErrorHelper(messages.Forbidden, 403, true);
				this.users[user.id] = socket;
				exampleSocketEvents.registerExampleSocketEvents(socketArg);
			} catch (e) {
				logger.error(e.message);
				socket.conn.close();
			}
		});
	}

	getInstance() {
		return this.io;
	}

	getSocket(id) {
		return this.users[id] || '';
	}
}

module.exports = new ServiceSocket();
