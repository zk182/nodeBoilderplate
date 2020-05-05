/* eslint-disable no-console */
const Example = require('./example');

const registerExampleSocketEvents = (socketArgs) => {
	socketArgs.on('uploadCancel', async (options) => {
		try {
			const result = await Example.remove(options);
			if (result) socketArgs.emit('uploadCanceled', { result, options });
		} catch (err) {
			console.error(err);
		}
	});
};

module.exports = {
	registerExampleSocketEvents,
};
