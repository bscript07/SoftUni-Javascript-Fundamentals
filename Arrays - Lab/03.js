function reverse(counter,numbers) {
    let result = [];
    let output = '';

    for(let i = 0; i < counter; i++) {
        result[counter - 1 - i] = numbers[i];
    }
    output += result;
    console.log(result.join(' '));
}