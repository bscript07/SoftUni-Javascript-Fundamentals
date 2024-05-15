function negativeOrPositive(numbers) {
    let array = [];

    for (const element of numbers) {
        let number = Number(element);

        if (number < 0) {
            array.unshift(number);
        } else {
            array.push(number);
        }
    }

    for (const number of array)  {
        console.log(number);
    }
}