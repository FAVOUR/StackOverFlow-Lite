import chai from 'chai';
import answers from '../dist/functions_repo/answer';
const { expect } = chai;


describe('Get answer function', () => {
   it('should be a function', () => {
    expect(answers.getAnswer).to.be.a('function');
  });
});


// describe('post an answer to question', () => {
//   it('should be a function', () => {
//     expect(answers.postanAnswer).to.be.a('function');
//   });

//   it('Should be an object', () => {

//     const ans = { id: 3,
//       userId: 2,
//       questionId: 1,
//       answer: 'dolly patton' };

//     expect(answers.postanAnswer(ans)).to.be.an('object');
//   });

  
// });   


 

// describe('Accept answer function', () => {
//   it('should return an array', () => {
//     const answerAccepted = answers.acceptAnswer(3);
//     expect(answerAccepted).to.be.an('array');
//     expect(answerAccepted.isAccepted).to.equal(true);
//   });
// }); 

