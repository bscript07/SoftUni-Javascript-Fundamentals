function calculate(input) {
    let sequences = input.split(/\s+/);
    let sum = 0;
    
    const isLowerCase = (string) =>/^[a-z]$/.test(string); 
    const isUpperCase = (string) =>/^[A-Z]$/.test(string);

    for (let characters of sequences) {
        let result = 0;

        let firstChar = characters.charAt(0);
        let firstCharPosition = characters.toLowerCase().charCodeAt(0) - 96;

        let lastChar = characters.charAt(characters.length - 1);
        let lastCharPosition = characters.toLowerCase().charCodeAt(characters.length - 1) - 96;
        
        let numbers = Number(characters.substring(1, characters.length - 1));

        if (isUpperCase(firstChar)) {
            result = numbers / firstCharPosition;
            sum += result;
        }

        if (isLowerCase(firstChar)) {
            result = numbers * firstCharPosition;
            sum += result;
        }

        if (isUpperCase(lastChar)) {
            sum -= lastCharPosition;
        }

        if (isLowerCase(lastChar)) {
            sum += lastCharPosition;
        }
    }
    console.log(sum.toFixed(2));
}