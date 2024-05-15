function sortNumbers(num1, num2, num3) {
    let array = [];

    array.push(num1, num2, num3);
    
    let sort = array.sort((a, b) => b - a);

    console.log(sort.join('\n'));
}