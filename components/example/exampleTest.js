/* eslint-disable no-tabs */
/* eslint-disable node/no-unpublished-require */
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const sinon = require('sinon');
// const proxyrequire = require('proxyquire');
// const config = require('../../config');

// config.NODE_ENV = 'test';

// const { expect } = chai;
// chai.use(chaiHttp);
// describe('Example', () => {
// 	let src = {};
// 	beforeEach('mock dependencies', async () => {
// 		const responseMock = {};
// 		const responseGetMock = {};
// 		const responseUpdateMock = {};
// 		const getAllStub = sinon.stub().returns({ Id: 1 });
// 		const getStub = sinon.stub().returns({
// 			promise: sinon.stub().resolves(responseGetMock),
// 		});
// 		const batchWriteStub = sinon.stub().returns({
// 			promise: sinon.stub().resolves(responseMock),
// 		});
// 		const updateStub = sinon.stub().returns({
// 			promise: sinon.stub().resolves(responseUpdateMock),
// 		});
// 		const postStub = sinon.stub().returns({
// 			promise: sinon.stub().resolves(responseMock),
// 		});
// 		src = proxyrequire('./metadata', {
// 			'../../lib': {
// 				dynamoDb: { get: getStub, batchWrite: batchWriteStub, update: updateStub, put: postStub },
// 				dynamoHelper: { getAll: getAllStub },
// 			},
// 		});
// 	});
// 	it('should get all items', async () => {
// 		const data = await src.getAll();
// 		expect(data).to.be.an('array');
// 	});
// 	it('should get an item', async () => {
// 		const data = await src.get(1);
// 		expect(data).to.be.an('object');
// 	});
// 	it('should remove an item', async () => {
// 		const data = await src.remove(1);
// 		expect(data).to.be.undefined;
// 	});
// 	it('should update an item', async () => {
// 		const data = await src.update(1, { title: 'testTitle' });
// 		expect(data).to.be.an('object');
// 	});
// 	it('should post an item', async () => {
// 		const data = {
// 		};
// 		const postData = await src.post(1, data);
// 		expect(postData).to.be.undefined;
// 	});
// });
