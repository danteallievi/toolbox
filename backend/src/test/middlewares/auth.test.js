import { expect, use } from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../../index.js';

const chai = use(chaiHttp);

describe('Middleware checkAuthorization', () => {
  it('should return 401 if no authorization header is provided', (done) => {
    chai.request.execute(app)
      .get('/files/data')
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Unauthorized');
        done();
      });
  });

  it('should return 401 if an incorrect secret key is provided', (done) => {
    chai.request.execute(app)
      .get('/files/data')
      .set('Authorization', 'Bearer incorrectSecretKey')
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('error');
        expect(res.body.error).to.equal('Unauthorized');
        done();
      });
  });

  it('should allow access if the correct secret key is provided', (done) => {
    chai.request.execute(app)
      .get('/files/data')
      .set('Authorization', `Bearer ${process.env.SECRET_KEY || 'aSuperSecretKey'}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
