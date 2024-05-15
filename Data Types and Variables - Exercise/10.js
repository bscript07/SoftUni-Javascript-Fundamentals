function calculate(yield) {
    let totalAmount = 0;
    let days = 0;

    while (yield >= 100) {
        totalAmount += yield;
        totalAmount -= 26;
        yield -= 10;
        days++;
    }

    if (totalAmount >= 26) {
        totalAmount -= 26;
    }

    console.log(days);
    console.log(totalAmount);
}