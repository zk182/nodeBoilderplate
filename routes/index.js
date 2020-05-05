const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const { swaggerOptions } = require('../lib');

const healthCheckRoute = require('./healthCheckRoute');
const errorsRoute = require('./errorsRoute');
const exampleRoute = require('./exampleRoute');

const { jwtHelper } = require('../middlewares');

const swaggerSpec = swaggerOptions;

// Router
const router = new Router();

// Swagger
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health Route for load balancers
router.use(healthCheckRoute);

// Authorization
router.use(jwtHelper.verifyJwt);

// Models
router.use('/example', exampleRoute);

// Errors
router.use(errorsRoute);

module.exports = router;
