function flightShedule(input) {
    let object = {};

    input[0].forEach(line => {
        let [flightNumber, destination] = line.split(' ');
        object[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });

    input[1].forEach(line => {
        let [flightNumber, status] = line.split(' ');
        if (object.hasOwnProperty(flightNumber)) {
            object[flightNumber].Status = status;
        }
    });

    for (const flights in object) {
        if (object[flights].Status === String(input[2])) {
            console.log(object[flights]);
        }
    }
}