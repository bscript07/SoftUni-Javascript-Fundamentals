function charactersInRange(firstChar, secondChar) {
    let startChar = Math.min(firstChar.charCodeAt(),secondChar.charCodeAt());
    let endChar = Math.max(firstChar.charCodeAt(),secondChar.charCodeAt());
    let output = '';

    for (let currentChar = startChar + 1; currentChar < endChar; currentChar++) {
        let singleChar = String.fromCharCode(currentChar);

        if (currentChar + 1 === endChar) {
            output += `${singleChar}`;
        } else {
            output += `${singleChar} `;
        }
    }
    console.log(output);
}