function reverse(input) {
    for (let i = 0; i < input.length / 2; i++) {
        let element = input[i];

        input[i] = input[input.length - 1 - i];
        input[input.length - 1 - i] = element;
    }
    console.log(input.join(' '));
}