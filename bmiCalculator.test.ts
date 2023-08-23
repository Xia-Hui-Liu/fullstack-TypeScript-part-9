import { calculateBmi } from './bmiCalculator';

describe('calculateBmi', () => {
    it('should return the correct text for a given BMI', () => {
        expect(calculateBmi(180, 74)).toBe('Normal(healthy weight)');
    })

    it('should return the correct text for a given BMI', () => {
        expect(calculateBmi(180, 50)).toBe('Underweight (keep your weight up)');
    })

    it('should return the correct text for a given BMI', () => {
        expect(calculateBmi(160, 90)).toBe('Overweight (over weight)');
    })
})