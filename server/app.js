import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/api/v1', (req, res) => {
res.send("welcome to stackoverflow-lite");
});


  app.use('/api/v1', router);

//   app.use('/api/v1/questions/:questionid', (req, res) => {

// res.send(awesome);
// //   res.json({
// //     code: 200,
// //     status: 'ok',
// //     message:req.params.questionId});
// });

  // res.status(200).send(req.params.questionId)

const port = process.env.PORT || 8000;

app.listen(3000,console.log(`You are on port ${port}`));


export default app;
