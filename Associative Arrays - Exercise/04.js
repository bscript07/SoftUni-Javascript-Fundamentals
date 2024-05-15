function softuniParty(input) {
    let vip = [];
    let regular = [];
    let currentGuest = input.shift();

    while (currentGuest !== 'PARTY') {
        const isVip = !isNaN(currentGuest[0]);

        if (isVip) {
            vip.push(currentGuest);
        } else {
            regular.push(currentGuest);
        }
        currentGuest = input.shift();
    }
    let totalGuests = vip.concat(regular);

    for (const guest of input) {
        totalGuests.splice(totalGuests.indexOf(guest), 1);
    }

    console.log(totalGuests.length);
    totalGuests.forEach(guest => console.log(guest));
}