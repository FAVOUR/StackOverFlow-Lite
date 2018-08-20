
// import fetchedQuestions from '../dummy/questions';



const fetchedQuestions = [
  {
    id: 1,
    user: {
      id: 20,
      name: 'holla dalla',
    },
    title: 'How do I install Node.js',
    question: 'How do I install Node.js',
    dateTime: new Date('October 13, 2014'),
  },

  {
    id: 4,
    user: {
      id: 50,
      name: 'tolo dalla',
    },
    title: 'Who invented drones',
    question: 'Who invented drones',
    dateTime: new Date('December 13, 2017'),
  },


  {
    id: 8,
    user: {
      id: 2,
      name: 'Who made the first PC',
    },
    title: 'How do I install Node.js',
    question: 'How do I install Node.js',
    dateTime: new Date('June 13, 2016'),
  },

  {
    id: 3,
    user: {
      id: 30,
      name: 'john Drake',
    },
    title: 'What is computer Archetecture',
    question: 'What is computer Archetecture',
    dateTime: new Date('July 19, 2018'),
  },

];


const questi = {




  /**
 * @return {array} returns an array of all questions
 */


  getAllQuestions() {
    return fetchedQuestions;
  },

  /**  Gets a question based on the id of he question
     * @param  {number} id of the question
     * @return {object} details of the question
     */
  getAQuestion(questionid) {
    const question = fetchedQuestions.find(quest => quest.id === questionid);
    if (question === undefined || question === null) return null;
    return question;
  },


  /**
  * @param  {number}  the question id
  * @param  {number}  rthe id of the user
  * @return {string} returns the outcome of the operation
  */
  deleteQuestion(questionId, userId) {
    const questToDelete = fetchedQuestions.find(question => question.id === questionId);

    if (questToDelete === undefined || questToDelete === null) return null;

    if (questToDelete.user.id !== userId) return 'You cannot delete!';

    const index = fetchedQuestions.indexOf(questToDelete);

    return 'Delete successful';
  },


  /**
   * @param  {string} The title of the question
   * @param  {string} The actual question asked
   * @param  {array}   The user datails
   * @return {object}  The datails of the user;
   */
  postAQuestion(_title, _question, user) {
    const questToDelete = fetchedQuestions.map(quest => quest.id);

    const quesObject = {
      id: Math.max(...questToDelete) + 1,
      user: user,
      title: _title,
      question: _question,
      dateTime: new Date('July 19, 2018'),
    };

    fetchedQuestions.push(quesObject);
    return quesObject;
  },

  /**
 * @param  {userid} The user id
 * @return {array} An array with the choice answer on top
 */
  getUserQuestions(userId) {
    const userQuestions = fetchedQuestions.filter(quest => quest.user.id === userId);
    const output = [...userQuestions];
    if (output.lenght < 1) return output;
    return output.reverse();
  },


};

export default questi;
