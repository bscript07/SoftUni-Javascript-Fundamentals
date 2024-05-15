function matrix(number) {
    let array = [];

    for (let i = 0; i < number; i++) {
        let output = '';
        for (let k = 1; k <= number; k++) {
            output += `${number} `
        }
        array.push(output);
    }
    console.log(array.join('\n'));
}