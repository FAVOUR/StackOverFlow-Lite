import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';

chai.use(chaiHttp);

const should = chai.should();
const base ='/api/v1'

describe(`Testing welcome api  /api/v1 `, (done) =>{
	it('should return a welcome message', () =>{

	  chai.request(server)
	       .get(base)
	       .end((err,res) =>{
            res.body.should.have.status(200);
            res.body.should.have.property('string');
             done();
	       }) 
	       })
})


describe(`Test all questions api /api/v1/questions`, (done) =>{
	it('it should fetch an array of questions and have a response of 200', () =>{

	 chai.request(server)
	 .get('/api/v1/questions')
	 .end((err, res) => {
     res.body.should.have.status(200);
     res.body.should.have.property('array');
     res.body.should.have.property('id');
     res.body.should.have.property('users');
         done();
  });
});
     it('it should have a response of 404 status if no question exist', () =>{

	chai.request(server)
	 .get('/api/v1/questions')
	.end((err, res) => {
	if (err) done(err);
        res.body.should.have.status(400);
        done();
  });
	       });

});