import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../dist/app';

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


describe(`Test get all questions api /api/v1/questions`, (done) =>{
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



describe(`Test get a question api /api/v1/questions/:questionid`, (done) =>{
	it('should return an object and and have a response of 200', () =>{

	 chai.request(server)
	 .get('/api/v1/questions/:questionid')
	 .end((err, res) => {
     res.body.should.have.status(200);
     res.body.should.have.property('object');
         done();
  });
});
     it('it should have a response of 404 status if ID does not match dummydata', () =>{

	chai.request(server)
	 .get('/api/v1/questions/:questionid')
	.end((err, res) => {
	if (err) done(err);
        res.body.should.have.status(400);
        done();
  });
	 });

     

});


describe(`Test post a question api /api/v1/questions/`, (done) =>{
	it('should return an object and and have a response of 200', () =>{

	 chai.request(server)
	 .post('/api/v1/questions')
	 .end((err, res) => {
     res.body.should.have.status(200);
     res.body.should.have.property('object');
         done();
  });
});
     it('it should have a response of 404 status if questiond or title is empty', () =>{

	chai.request(server)
	 .post('/api/v1/questions')
	.end((err, res) => {
	if (err) done(err);
        res.body.should.have.status(400);
        done();
  });
	 });

     

});


describe(`Test post a answer if api /api/v1/questions/:questionid/answers`, (done) =>{
	it('should return an object and and have a response of 200', () =>{

	 chai.request(server)
	 .post('/api/v1/questions/:questionid/answers')
	 .end((err, res) => {
     res.body.should.have.status(200);
     res.body.should.have.property('object');
         done();
  });
});
     it('it should have a response of 404 status if questiond or title is empty', () =>{

	chai.request(server)
	 .post('/api/v1/questions/:questionid/answers')
	.end((err, res) => {
	if (err) done(err);
        res.body.should.have.status(400);
        done();
  });
	 });

     

});