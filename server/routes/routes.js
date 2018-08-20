import express from "express";
import questionController from '../controllers/questionController';


const router = express.Router();

router.get('/questions', questionController.getAllQuestions);

router.get('/questions/:questionid', questionController.getAQuestion);



export default router;
