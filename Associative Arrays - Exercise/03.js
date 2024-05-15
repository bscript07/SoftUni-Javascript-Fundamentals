function piccolo(input) {
    let carsNumbers = new Map();
    let fullList = input.map(el => el.split(', '));

    fullList.forEach(element => {
        const command = element[0];
        const carNumber = element[1];

        if (command === 'IN') {
            carsNumbers.set(carNumber, command);
        } else if (command === 'OUT') {
            carsNumbers.delete(carNumber);
        }
    });

    let sortedCarNumbers = Array.from(carsNumbers).sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCarNumbers.length === 0) {
        console.log('Parking Lot is Empty');
    }

    sortedCarNumbers.forEach((carNum) => console.log(carNum[0]));
}