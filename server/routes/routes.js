import express from "express";
import questionController from '../controllers/questionController';


const router = express.Router();

router.get('/questions', questionController.getAllQuestions);

export default router;
