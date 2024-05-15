function factorialDivision(integer1, integer2) {
    let factorial1 = 1;
    let factorial2 = 1;

    for (let i = 1; i <= integer1; i++) {
        factorial1 *= i;
    }

    for (let i = 1; i <= integer2; i++) {
        factorial2 *= i;
    }

    let division = factorial1 / factorial2;

    console.log(division.toFixed(2));
}