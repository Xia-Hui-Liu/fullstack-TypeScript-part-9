import express, { Request, Response } from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());
const port  = 3000;

app.get('/', (req, res) => {
    res.send('Hello Full Stack');
})

app.get('/bmi', (req: Request, res: Response) => {
    const height = parseFloat(req.query.height as string);
    const weight = parseFloat(req.query.weight as string);

    const bmi = calculateBmi(height, weight);
    res.json({
        weight,
        height,
        bmi:bmi
    })
});

app.post('/exercises', (req:Request, res:Response) => {
    const { daily_exercises, target } = req.body;

    const result = calculateExercises(daily_exercises, target);
    res.send({ result });
})

app.listen(port, () => {
    console.log(`server is listen on ${port}`);
})