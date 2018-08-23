import chai from 'chai';
import questions from '../dist/functions_repo/question';

const { expect } = chai;

describe('Get all question function ', () => {
  it('should be a function', () => {
    expect(questions.getAllQuestions).to.be.a('function');
  });


  it('Should be an array of objects', () => {
    expect(questions.getAllQuestions()).to.be.an('array');
  });

  it('objects returned should have ids', () => {
    questions.getAllQuestions()
      .forEach((id) => {
        expect(id).to.have.a.property('id');
      });
  });

  it('objects returned should have titles', () => {
    questions.getAllQuestions()
    	.forEach((title) => {
        expect(title).to.have.a.property('title');
      });
  });

  it('objects returned should have question bodies ', () => {
    questions.getAllQuestions()
      .forEach((question) => {
        expect(question).to.have.a.property('question');
      });
  });

  it('and have user objects', () => {
    questions.getAllQuestions()
      .forEach((user) => {
        expect(user).to.have.a.property('user');
      });
  });
});


describe('Get a user question function', () => {
  it('should be a function', () => {
    expect(questions.getAQuestions).to.be.a('function');
  });

  it('Should be an object', () => {
    expect(questions.getAQuestions(4)).to.be.an('object');
  });

  
});   

   describe('Get all questions by a user function', () => {
  it('should be a function', () => {
    expect(questions.getUserQuestions).to.be.a('function');
  });
  it('should return an array', () => {
    expect(questions.getUserQuestions(20)).to.be.an('array');
  });

});


describe('Delete a question function', () =>{

  it('should be a function', () => {
    expect(questions.deleteQuestion).to.be.a('function');
  });

  it('should return \"Nothing to delete\" if the user id or question id is empty or undefined ', () =>{

    expect(questions.deleteQuestion()).to.equal(null);
  });

  it('should return \"You cannot delete!\"if the user id is incorret or question id is incorret ', () =>{

    expect(questions.deleteQuestion(3, 50)).to.equal('You cannot delete!');
  });

  it('should return an \"Delete successful\" when the question is succesfuly deleted ', () =>{

    expect(questions.deleteQuestion(4, 50)).to.equal('Delete successful');
  });
});

describe('Post a question function', () => {
  it('should be a function', () => {
    expect(questions.postaQuestion).to.be.a('function');
  });


  it('should return an object', () => {

    const title = 'How build amazing proj';
    const answer = 'hold continuously take your leg foward';
    const user = { id: 50, name: 'holla dalla' };

    expect(questions.postaQuestion(title, answer, user)).to.be.a('object');
  });

});
