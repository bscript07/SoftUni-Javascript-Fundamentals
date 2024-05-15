function towns(input) {
    for (const info of input) {
        let [name, latitude, longitude] = info.split(' | ');
        let currentTown = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }

        console.log(currentTown);
    }
}