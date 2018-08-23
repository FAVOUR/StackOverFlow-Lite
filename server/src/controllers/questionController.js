import questions from '../functions_repo/question';
import answer from '../functions_repo/answer';


const fetchedQuestions = [
  {
    id: 1,
    user: {
      Id: 20,
      name: 'holla dalla',
    },
    title: 'How do I install Node.js',
    question: 'How do I install Node.js',
    dateTime: new Date('October 13, 2014'),
  },

  {
    id: 4,
    user: {
      Id: 50,
      name: 'tolo dalla',
    },
    title: 'Who invented drones',
    question: 'Who invented drones',
    dateTime: new Date('December 13, 2017'),
  },


  {
    id: 8,
    user: {
      Id: 2,
      name: 'Who made the first PC',
    },
    title: 'How do I install Node.js',
    question: 'How do I install Node.js',
    dateTime: new Date('June 13, 2016'),
  },

  {
    id: 3,
    user: {
      Id: 30,
      name: 'john Drake',
    },
    title: 'What is computer Archetecture',
    question: 'What is computer Archetecture',
    dateTime: new Date('July 19, 2018'),
  },

];

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

  const {title, question, user} = req.body;
const data = {title, question, user};
const userId = parseInt(data.user.Id);

  const questionPosted = fetchedQuestions.find(_id => _id.user.Id === userId);



    if (questionPosted ===  undefined || question === "" || title === "") {
      return res.status(404).json({
        status: ' error',
        message: 'Error posting question',
      });
    }


  return res.status(201).json({
      status: 'success',
      message: 'question has been posted',
      questionPosted,

      });
    
// git commit -m "[finishes #159736347] api endpoint and test has been finished"


}
}



export default Questions;
