import questions from '../src/question';
import answer from '../src/answer';

 class Questions {

    static getAllQuestions(req, res){
        

const result = {
	status: 'OK',
	message: 'Successfully fetched Questions',
	questions:questions.getAllQuestions(),
    };

res.status(200).send(result) }; 

static getAQuestion(req,res){
const questionId =parseInt(req.params.questionid)
const question = questions.getAQuestion(questionId);
    if (question === null) {
      return res.status(404).json({
        status: 'error',
        message: 'Wrong question id ',
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'fetched the question',
      question,
    });


}






}




export default Questions;
