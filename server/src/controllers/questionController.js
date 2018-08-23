import questions from '../functions_repo/question';
import answer from '../functions_repo/answer';

 class Questions {

    static getAllQuestions(req, res){
        
// npm run build & nyc mocha posttest/*.js
// const result = {
// 	status: 'success',
// 	message: 'Successfully fetched Questions',
// 	questions:questions.getAllQuestions(),
//     };

return res.status(200).json({
      status: 'success',
  message: 'Successfully fetched Questions',
  questions:questions.getAllQuestions(),
    });
     }; 

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

// {
//     id: 1,
//     user: {
//       id: 20,
//       name: 'holla dalla',
//     },
//     title: 'How do I install Node.js',
//     question: 'How do I install Node.js',
//     dateTime: new Date('October 13, 2014'),
//   },


static postAQuestion(req,res){

 const {title,question, user} = req.body;
  const data = req.body;
   const userId= parseInt(data.user.id, 10);
   // const userId = user.id;
 // return res.send(userId);
 return res.send(data);
    // if (questions.verifyUser(userId) === null) {
    //   return res.status(404).json({
    //     status: 'error',
    //     message: 'You have to be loggedin to post a question',
    //   });
    // }
    // const quest = postAQuestion(title,question, user)
    // return res.status(201).json({
    //   status: 'success',
    //   message: 'Your question has been succesfuly added',
    //   question: quest
    // });
    
}


// git commit -m "[finishes #159736347] api endpoint and test has been finished"


}




export default Questions;
