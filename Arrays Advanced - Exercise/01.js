function train(arrayOfStrings) {
    let passengers = arrayOfStrings.shift().split(' ').map(Number);
    let maxCapacity = Number(arrayOfStrings.shift());
    let arrLength = arrayOfStrings.length;

    for (let i = 0; i < arrLength; i++) {
        let curRow = arrayOfStrings[i].split(' ');
        
        if (curRow[0] === 'Add') {
            let newPassangers = Number(curRow[1]);
            passengers.push(newPassangers)
        } else {
            for (let k = 0; k < passengers.length; k++) {
                let passangersInCurrWagon = passengers[k];
                if (passangersInCurrWagon + Number(curRow[0]) <= maxCapacity) {
                    passengers[k] += Number(curRow[0]);
                    break;
                }
            }
        }
    }
    console.log(passengers.join(' '));
}