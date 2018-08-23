
import answer from '../functions_repo/answer';


const fetchedAnswer = [
  {
    id: 1,
    userId: 5,
    questionId: 1,
    answer: 'The study of computers',
    isAccepted: false,

  },

  {
    id: 4,
    userId: 2,
    questionId: 1,
    answer: 'closer to you',
    isAccepted: false,

  },

  {
    id: 8,
    userId: 2,
    questionId: 1,
    answer: 'dolly patton',
    isAccepted: false,
  },

  {
    id: 3,
    userId: 2,
    questionId: 1,
    answer: 'Steve jobs',
    isAccepted: false,
  },

];


 class Answers {


static addAnAnswer(req,res){

 const {userId,questionId,answer} = req.body;
  const  _userId =Number(userId);
  const  _questionId =Number(questionId);
 const data = req.body;

  // const _answer =answer.postanAnswer(data);
  const verify = fetchedAnswer.find(a => a.userId === _userId);

    if (typeof verify === 'undefined' ) {
      return res.status(404).json({
        status: 'error',
        message: 'You have to be loggedin to answer a question',
      });
    }
   

   else{
    return res.status(201).json({
      status: 'success',
      message: 'Your question has been succesfuly added',
      answer: _answer
    });
   } 
}
// git commit -m "[finishes #159983144] api endpoint and test has been finished"
// git commit -m "[Feature #159983144] restructured my files and fixed errors"

}




export default Answers;
