
interface resultObject {
    periodLength: number,
    trainingDays: number,
    sucess: boolean,
    rating: number,
    ratingDescription: string,
    average: number,
    target: number,
}

export const calculateExercises = (arr:number[], targetHours:number): resultObject => {
    const totalHours = arr.reduce((acc, cur) => acc +cur, 0);

    const averageExerciseHours = totalHours / arr.length;

    const trainingDays = arr.filter(hours => hours > 0).length;

    let rating = 0;
    let ratingDescription = '';
    let sucess;

    if (averageExerciseHours >= targetHours){
        rating = 3;
        sucess = true;
        ratingDescription = 'Great job! Your reached your target.'
    } else if (averageExerciseHours < targetHours){
        rating = 2;
        sucess = false;
        ratingDescription = 'Not bad, but you could do better.'
    } else {
        rating = 1;
        sucess = false;
        ratingDescription = 'You need to work harder.'
    }

    const result: resultObject = {
        periodLength: arr.length,
        trainingDays,
        sucess:sucess,
        rating,
        ratingDescription,
        average: averageExerciseHours,
        target: targetHours,
    }
    return result;
    }
    
   