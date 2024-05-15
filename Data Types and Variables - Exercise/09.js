function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let count = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            expenses += parseFloat(helmetPrice);
        }

        if (i % 3 === 0) {
            expenses += parseFloat(swordPrice);
        }

        if (i % 2 === 0 && i % 3 === 0) {
            expenses += parseFloat(shieldPrice);
            count++;
        }

        if (count % 2 === 0 && count > 0) {
            expenses += parseFloat(armorPrice);
            count = 0;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}