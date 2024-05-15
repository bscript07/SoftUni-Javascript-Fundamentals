function equalSums(array) {
    let index = 'no';
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let rightSum = 0;
        let leftSum = 0;

        // calc left sum 
        for (let j = 0; j < i; j++) {
            leftSum = leftSum + array[j]; 
        }
        // calc right sum 
        for (let k = i + 1; k < arrayLength; k++) {
            rightSum = rightSum + array[k];
        }

        if (leftSum === rightSum) {
            index = i;
        }
    }
    console.log(index);
}