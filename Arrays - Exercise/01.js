function addAndSubtract(input) {
    let resArray = [];
    let sum = 0;
    let resultArraySum = 0;
    let inputLength = input.length;

    for (let i = 0 ; i < inputLength; i++) {
        let curNumber = input[i];
        let odd = (curNumber - i);
        let even = (curNumber + i);

        if (curNumber % 2 === 0) {
            resArray.push(even);
        } else {
            resArray.push(odd);
        }
        sum += curNumber;
        resultArraySum += resArray[i];
    }
    console.log(resArray);
    console.log(sum);
    console.log(resultArraySum);
}