function palidromeIntegers(array) {
    for (let i = 0; i < array.length; i++) {
        let numStr = array[i].toString();
        let reversedNumber = numStr.split('').reverse('').join('');

        if (numStr === reversedNumber) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}