type text = 'Underweight (keep your weight up)' | 'Normal (healthy weight)' | 'Overweight (over weight)';

export const calculateBmi = (height: number, weight: number): text => {
    // Check if height is in centimeters, convert it to meters if needed
    if (height > 3) { // Assuming if height > 3 meters, it's given in centimeters
        height = height / 100; // Convert centimeters to meters
    }

    const bmi = weight / (height * height);
    
    if (bmi <= 18.4) {
        return 'Underweight (keep your weight up)';
    } else if (bmi <= 24.9) {
        return 'Normal (healthy weight)';
    } else {
        return 'Overweight (over weight)';
    }
}

