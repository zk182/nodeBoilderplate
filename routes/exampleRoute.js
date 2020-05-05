const exampleRouter = require('express').Router();
const service = require('../components/example/exampleService');

exampleRouter.route('/')
	.get(service.getAll);

exampleRouter.route('/:Id')
	.patch(service.update)
	.delete(service.remove)
	.get(service.get);

module.exports = exampleRouter;
