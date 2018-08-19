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
}

export default Questions;
