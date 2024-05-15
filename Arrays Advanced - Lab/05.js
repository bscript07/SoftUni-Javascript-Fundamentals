function processOddNumbers(numbers) {
    let result = numbers.filter((numbers, x) => x % 2 === 1).map(x => x * 2).reverse();

    console.log(result.join(' '));
}