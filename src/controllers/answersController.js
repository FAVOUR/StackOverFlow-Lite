

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

const fetchedUsers = [
  {
    firstname: 'Olije Favour',
    Id: '222',
    password: '345feg',
    email: 'truelyfavoured@gmail.com',
    date_of_reg: new Date(),
    entries: 0,

  },

  {
    name: 'Don Joe',
    Id: '252',
    password: '783hy',
    email: 'yourfav@gmail.com',
    date_of_reg: new Date(),
    entries: 0,
  },
];

 class Answers {


static addAnAnswer(req,res){

  const {userId, questionId, answer} = req.body;
const data = {userId, questionId, answer};

 const _userId = parseInt(data.userId,10);


    if (answer === "" ) {
      return res.status(404).json({
        status: 'error',
        message: 'Error posting answer',
      });
    }
   

   
    return res.status(201).json({
      status: 'success',
      message: 'Your question has been succesfuly added',
      answer,
    });
   
}
// git commit -m "[finishes #159983144] api endpoint and test has been finished"
// git commit -m "[Feature #159983144] integrated travis and coveralls to my project"

}




export default Answers;
