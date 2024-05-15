function solve(input) {
    let firstChar = input[0];
    let secondChar = input[1];
    let string = input[2];
    let sum = 0;

    let startCount = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endCount = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    for (let i = 0; i < string.length; i++) {
        let currentCharacter = string.charCodeAt(i);

        if (currentCharacter > startCount && currentCharacter < endCount) {
            sum += currentCharacter;
        }
    }
    console.log(sum);
}