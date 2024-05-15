function sumEvenNumbers(numbers) {
    let sum = 0;

    for (let textNum of numbers) {

        let number = Number(textNum);

        if (number % 2 === 0) {
            sum += number;
        }
    }
    console.log(sum);
}