function numberChecker(arg) {

    if (arg <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(arg); i++) {
        if (arg % i === 0) {
            return false;
        }
    }
    return true;
}