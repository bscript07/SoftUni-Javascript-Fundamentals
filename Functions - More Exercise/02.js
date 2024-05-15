function numberModification(modifyNumber) {
    while (average(modifyNumber) < 5) {
        modifyNumber += '9';
    }
    console.log(modifyNumber);
    
    function getSum(number) {
        let toString = number.toString();
        let sum = 0;
        
        for (let i = 0; i < toString.length; i++) {
            sum += Number(toString[i]);
        }
        return sum;
    }

    function average(num) {
        return getSum(num) / num.toString().length;
    }
}