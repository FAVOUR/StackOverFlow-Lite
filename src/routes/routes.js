import express from "express";
import questionController from '../controllers/questionController';
import answerController from '../controllers/answersController';


const router = express.Router();

router.get('/questions', questionController.getAllQuestions);

router.get('/questions/:questionid', questionController.getAQuestion);

router.post('/questions', questionController.postAQuestion);

router.post('/questions/:questionid/answer', answerController.addAnAnswer);


export default router;
