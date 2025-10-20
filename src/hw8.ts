export function calculatePasswordStrength(password: string):
    string {
    if (!password || password.trim().length === 0) {
        return "No password";
    }
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.length >= 12) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[\W_]/.test(password)) strength += 1;
    if (strength <= 2) {
        return "Very Weak";
    } else if (strength === 3) {
        return "Weak";
    } else if (strength === 4) {
        return "Moderate";
    } else if (strength >= 5) {
        return "Strong";
    } else {
        return "undefined";
    }
}
