type text = 'Underweight (keep your weight up)' | 'Normal (healthy weight)' | 'Overweight (over weight)';

const calculateBmi = (h: number, w: number): text => {
    // Check if height is in centimeters, convert it to meters if needed
    if (h > 3) { // Assuming if height > 3 meters, it's given in centimeters
        h = h / 100; // Convert centimeters to meters
    }

    const bmi = w / (h * h);
    
    if (bmi <= 18.4) {
        return 'Underweight (keep your weight up)';
    } else if (bmi <= 24.9) {
        return 'Normal (healthy weight)';
    } else {
        return 'Overweight (over weight)';
    }
}


console.log(calculateBmi(180, 74))