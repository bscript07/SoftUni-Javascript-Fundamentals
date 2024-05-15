function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;
    let strNum = number.toString();

    for (let i = 0; i < strNum.length; i++) {
        let digit = parseInt(strNum[i]);

        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}