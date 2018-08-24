import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../dist/app';

chai.use(chaiHttp);

const should = chai.should();
const base ='/api/v1'

// describe(`Testing welcome api  /api/v1 `, (done) =>{
// 	it('should return a welcome message', () =>{

// 	  chai.request(server)
// 	       .get(base)
// 	       .end((err,res) =>{
//             res.body.should.have.status(200);
//             // res.body.should.have.property('string');
//              done();
// 	       }) 
// 	       })
// })


describe(`Test get all questions api /api/v1/questions`, () =>{
	it('it should fetch an array of questions and have a response of 200', (done) =>{

	 chai.request(server)
	 .get('/api/v1/questions')
	 .end((err, res) => {
     res.should.have.status(200);
     // res.body.should.have.property('status');
     // res.body.should.have.property('status');
     // res.body.should.have.property('message');
         done(); 
  });
	
});
 //     it('it should have a response of 404 status if no question exist', () =>{

	// chai.request(server)
	//  .get('/api/v1/questions')
	// .end((err, res) => {
	// if (err) done(err);
 //        res.body.should.have.status(400);
 //        done();
 //  });
	//        });



});



describe(`Test get a question api /api/v1/questions/:questionid`,()  =>{
	it('should return an object and and have a response of 200', (done) =>{

	 chai.request(server)
	 .get('/api/v1/questions/3')
	 
	 .end((err, res) => {
     res.should.have.status(200);
     // res.body.should.have.status('success');
     // // res.body.should.have.property('user');
     //  res.body.should.have.property('Id');
         done();
  });
});
     it('it should have a response of 404 status if ID does not match dummydata', () =>{

	chai.request(server)
	 .get('/api/v1/questions/300')
	.end((err, res) => {
	if (err) done(err);
		 res.should.have.status(404);
        // res.body.should.have.status('error');
        done();
  });
	 });

     

});


describe(`Test post a question api /api/v1/questions/`, () =>{
	it('should return an object and and have a response of 200', (done) =>{

	 chai.request(server)
	 .post('/api/v1/questions')
	 .end((err, res) => {
     res.should.have.status(200);
     // res.body.should.have.status("error");
     // res.body.should.have.property('questionId');
         done();
  });
});
     it('it should have a response of 404 status if questiond or title is empty', () =>{

	chai.request(server)
	 .post('/api/v1/questions')
	.end((err, res) => {
	if (err) done(err);
        res.should.have.status(400);
         res.body.should.have.status(400);
        done();
  });
	 });

     

});


describe(`Test post a answer if api /api/v1/questions/:questionid/answers`, ()  =>{
	it('should return an object and and have a response of 200', (done) =>{

   chai.request(server)
      .post('/api/v1/questions/2/answers')
.send({
    id: 3,
    userId: 2,
    questionId: 1,
    answer: 'Steve jobs',
    isAccepted: false,
  });
	 chai.request(server)
	 .post('/api/v1/questions/:questionid/answers')
	 .end((err, res) => {
     res.body.should.have.status(200);
       res.should.have.status('success');
     // res.body.should.have.property('object');
         done();
  });
});
     it('it should have a response of 404 status if questiond or title is empty', () =>{

	chai.request(server)
	 .post('/api/v1/questions/:questionid/answers')
	.end((err, res) => {
	if (err) done(err);
        res.should.have.status(400);
        res.body.should.have.status('error');
        done();
  });
	 });

     

});