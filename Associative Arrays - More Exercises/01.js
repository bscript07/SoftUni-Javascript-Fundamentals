function garage(cars) {
    let garage = {};

    for (const car of cars) {
        const [garageNumber, carFuel] = car.split(' - ');
        const carDetails = carFuel.split(', ');
        
        if (!(garageNumber in garage)) {
            garage[garageNumber] = [];
        }

        const carObj = {};

        for (const detail of carDetails) {
            const [key, value] = detail.split(': ');
            carObj[key] = value;
        }
        garage[garageNumber].push(carObj);
    }

    for (const garageNumber in garage) {
        const garageCars = garage[garageNumber];

        console.log(`Garage № ${garageNumber}`);

        for (const car of garageCars) {
            const carDetails = Object.entries(car)
            .map(([key, value]) => `${key} - ${value}`)
            .join(', ');
            console.log(`--- ${carDetails}`);
        }
    }
}