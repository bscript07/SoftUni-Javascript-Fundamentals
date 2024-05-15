function houseParty(arrOfStrings) {
    let guests = [];

    for (const el of arrOfStrings) {
        let counter = el.split(' ');

        let name = counter[0];
        
        if (counter.length === 3) {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        } else {
            if (!guests.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            }
        }
    }
    console.log(guests.join('\n'));
}