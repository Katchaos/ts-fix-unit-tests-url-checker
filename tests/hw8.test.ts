import {calculatePasswordStrength} from "../src/hw8";

test('return strong for a strong password', () => {
    const result = calculatePasswordStrength('KL783542/gthu');
    expect(result).toBe('Strong');
})

test('return very weak for a very weak password', () => {
    const result = calculatePasswordStrength('123456k');
    expect(result).toBe('Very Weak');
})

test('return weak for a weak password', () => {
    const result = calculatePasswordStrength('1234567K');
    expect(result).toBe('Weak');
})

test('return moderate for a moderate password', () => {
    const result = calculatePasswordStrength('1234567Ka');
    expect(result).toBe('Moderate');
})

test('return no password if password field is empty', () => {
    const result = calculatePasswordStrength('');
    expect(result).toBe('No password');
})
