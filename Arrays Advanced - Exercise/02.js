function removePresentNumbers(array) {
    let uniqueNumbers = [];
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++) {
        if (!uniqueNumbers.includes(array[i])) {
            uniqueNumbers.push(array[i]);
        }
    }
    console.log(uniqueNumbers.join(' '));
}