const http = require('http');
const socketio = require('socket.io');
const app = require('../../app');
const socket = require('../../socket');

const config = require('../../config');
const { logger } = require('../../lib');

const port = config.PORT || '8080';

const server = http.Server(app);

const io = socketio(server, {
	path: '/backend/socket.io',
	transports: ['polling', 'websocket'],
	handlePreflightRequest: (req, res) => {
		const headers = {
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			'Access-Control-Allow-Origin': req.headers.origin, // or the specific origin you want to give access to,
			'Access-Control-Allow-Credentials': true,
		};
		res.writeHead(200, headers);
		res.end();
	},
});
socket.socketInit(io);

/**
 * Listens the port.
 */
server.listen(port, () => {
	logger.info(`App on port ${port}!`);
});
