/* eslint-disable no-tabs */
/* eslint-disable node/no-unpublished-require */
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const jwt = require('jsonwebtoken');
// const app = require('../../app');
// const config = require('../../config');

// config.NODE_ENV = 'test';

// const signJwt = (payload) => {
// 	const jwtToken = jwt.sign(payload, config.JWT_SECRET, { expiresIn: '1d' });
// 	return jwtToken;
// };

// const { expect } = chai;
// chai.use(chaiHttp);
// describe('Jwt', () => {
// 	it('should invalidate the jwt', (done) => {
// 		chai
// 			.request(app)
// 			.get('/backend/authorization')
// 			.end((err, res) => {
// 				expect(res).to.have.status(403);
// 				expect(res.body).to.be.an('object');
// 				expect(res.body).to.have.a.property('errCode');
// 				expect(res.body).to.have.a.property('errMessage');
// 				done();
// 			});
// 	});
// 	it('should return an OK response', (done) => {
// 		const mockedPayload = {
// 			firstName: 'Nicolas',
// 			lastName: 'Battaglia',
// 			lastLogin: '',
// 			state: '',
// 			acceptedCurrentTos: false,
// 			userId: 1,
// 			username: 'Nicolas Battaglia',
// 			email: 'nbattaglia@sparkdigital.com',
// 			role: 'SUPER_ADMIN',
// 		};
// 		const mockedJwt = signJwt(mockedPayload);
// 		chai
// 			.request(app)
// 			.get('/admin-backend/authorization')
// 			.set('Authorization', mockedJwt)
// 			.end((err, res) => {
// 				expect(res).to.have.status(200);
// 				done();
// 			});
// 	});
// });
