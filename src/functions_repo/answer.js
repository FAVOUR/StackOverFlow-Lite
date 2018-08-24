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

const answers = {


  /**
    * @param  {object} All users answer is inputed
    * @return {object} new answer that has been addeed
    */
  postanAnswer(ans) {
    const { userId, questionId, answer } = ans;

    const verify = fetchedAnswer.find(a => a.userId === userId && a.questionId === questionId);

    if (verify) {
      return null;
    }

   const ids = fetchedAnswer.map(ans => ans.id);

    const newAnswer = {
      id: Math.max(...ids) + 1,
      userId: userId,
      questionId: questionId,
      answer: answer,
      isAccepted: false,
    };
 
    fetchedAnswer.push(newAnswer);
    return newAnswer;
  },


  /**
   * Gets an answer by id
   * @param {number}   answer id
   * @return {object}  it returns null if answer esists else it returns null
   */
  
  getAnswer(id) {
    const answer = this.fetchedAnswer.find(a => a.id === id);
    if (answer === undefined || answer === null) return null;
    return answer;
  },

  /**
 * @param  {number} id of the answer
 * @return {array} array of accepted answers with the accepted answer on top
 */
  acceptAnswer(questionId) {
    const answer = fetchedAnswer.find(question => question.id === questionId);
    const index = fetchedAnswer.indexOf(answer);
    answer.isAccepted = true;
    const acceptedAnswer = fetchedAnswer.splice(index, 1, answer);
    const outcome = [acceptedAnswer[0], ...fetchedAnswer];
    return outcome;
  },
};

export default answers;
