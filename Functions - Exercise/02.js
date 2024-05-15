function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    
    function add(firstNum, secondNum) {

        let sum = firstNum + secondNum;
        return sum;

    }

    let totalSum = add(firstNumber, secondNumber);
    
    function subtract(sumOfTwoI, lastNum) {
        return sumOfTwoI - lastNum;
    }
    let result = subtract(totalSum, thirdNumber);
    console.log(result);
}