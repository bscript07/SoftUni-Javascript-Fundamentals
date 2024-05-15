function rounding(arg1, arg2) {

    let result = arg1.toFixed(arg2);

    if (arg2 > 15) {
        arg2 = 15;
    }
    console.log(result);
    return parseFloat(result);

}

rounding(10.5,3);