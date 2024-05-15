function calculate(input) {
    let characters = input[0];
    let mode = input[1];
    let sum = 0;

    for (let i = 0; i < characters.length; i++) {
        const charCode = characters.charCodeAt(i);

        if (mode === 'UPPERCASE' && charCode >= 65 && charCode <= 90) {
            sum += charCode;
        }

        if (mode === 'LOWERCASE' && charCode >= 97 && charCode <= 122) {
            sum += charCode;
        }
    }
    console.log(`The total sum is: ${sum}`);
}