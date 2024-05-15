function passwordValidator(password) {
    let counter = 0;
    let pasLength = password.length;
    let isSymbol = false;

    for (let i = 0; i < pasLength; i++) {
        let char = password[i].charCodeAt();

        let digit = char >= 48 && char <= 57;
        let smallLetter = char >= 97 && char <= 122;
        let bigLetter = char >= 65 && char <= 90;

        if (digit) {
            counter++;
        }

        if (!digit && !smallLetter && !bigLetter) {
            isSymbol = true;
        }
    }

    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (isSymbol) {
        console.log("Password must consist only of letters and digits");
    }

    if (counter < 2) {
        console.log("Password must have at least 2 digits");
    }

    if (counter >= 2 && !isSymbol && (password.length >= 6 || password.length <= 10)) {
        console.log("Password is valid");
    } 
}