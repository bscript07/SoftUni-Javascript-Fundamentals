function solve(char) {

    let lowerCase = char.toLowerCase();
    let upperCase = char.toUpperCase();

    if (upperCase) {
        console.log("upper-case");
    } 

    else if (lowerCase) {
        console.log("lower-case");
    }

}

solve("L");