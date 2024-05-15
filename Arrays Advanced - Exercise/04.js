function sorting(arrayOfNumbers) {
    let sortedArray = arrayOfNumbers.sort((a, b) => a - b);
    let resultArr = [];

    for (let i = 0; i < sortedArray.length; i++) {
        let lastEl = sortedArray.pop();
        let firstEl = sortedArray.shift();

        resultArr.push(lastEl);
        resultArr.push(firstEl);
    }
        resultArr.push(sortedArray.pop());
        resultArr.push(sortedArray.shift());

        console.log(resultArr.join(' '));
}