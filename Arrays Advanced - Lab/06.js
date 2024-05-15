function smallestTwoNumbers(arrNumbers) {
    let sortedNumbers = arrNumbers.sort((a, b) => {
        return a - b;
    })

    console.log(sortedNumbers.slice(0, 2).join(' '));
}