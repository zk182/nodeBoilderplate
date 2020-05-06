const exampleRouter = require('express').Router();
const service = require('./exampleService');

exampleRouter.route('/')
	.get(service.getAll);

exampleRouter.route('/:Id')
	.patch(service.update)
	.delete(service.remove)
	.get(service.get);

module.exports = exampleRouter;
