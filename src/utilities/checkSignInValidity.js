export const checkSignInValidity = (name, email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordLengthValid = password?.length >= 6;

    if(!emailRegex) {
        return "Email is invalid.";
    } else if(!passwordLengthValid) {
        return "Password must be at least 6 characters long.";
    } else if(name !== null && !name) {
        // Only validate name if it's being checked (Sign Up mode)
        return "Name is required.";
    }

    return null; // No errors
}