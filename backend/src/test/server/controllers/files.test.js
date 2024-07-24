// import { use, expect } from 'chai';
// import chaiHttp from "chai-http";

// import { app } from '../../../index.js';

// const chaiModule = use(chaiHttp);

// describe('Given files controllers', () => {
//   it('Then it should return 404 "endpoint not found"', (done) => {
//     chaiModule.request.execute(app)
//       .post('/somePost')
//       .end((err, res) => {
//         expect(res).to.have.status(404);
//         expect(res.body).to.be.an('object');
//         expect(res.body).to.have.property('error');
//         expect(res.body.error).to.equal('Endpoint not found');
//         done();
//       });
//   });

//   it('Then it should return 401 "Unauthorized"', (done) => {
//     chaiModule.request.execute(app)
//       .get('/files/data')
//       .set('Content-Type', 'application/json')
//       .set('authorization', 'invalidApiKey')
//       .end((err, res) => {
//         expect(res).to.have.status(401);
//         expect(res.body).to.be.an('object');
//         expect(res.body).to.have.property('error');
//         expect(res.body.error).to.equal('Unauthorized');
//         done();
//       });
//   });

//   describe('Then it should return 200 ""', () => {
//     const OLD_ENV = process.env;
//     const apiKey = 'some_api_key'

//     before(() => {
//       process.env.SECRET_KEY = apiKey;
//     });

//     afterAll(() => {
//       process.env = OLD_ENV;
//     });

//     it('and an array of processed files', (done) => {
//       const data = [{ id: 1, name: 'file1.csv' }, { id: 2, name: 'file2.csv' },]
//       fetchAllFilesStub = sinon.stub(fetchAllFiles, 'fetchAllFiles').resolves(data);

//       chaiModule.request.execute(app)
//         .get('/files/data')
//         .set('Authorization', `Bearer ${apiKey}`)
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           expect(res.body).to.be.an('array');
//           expect(res.body.error).to.equal(data);
//           done();
//         });
//     });
//   })

// });