function miner(input) {
    let collection = {};

    for (let i = 0; i < input.length; i += 2) {
        const resource = input[i];
        const quantity = Number(input[i + 1]);

        if (!collection.hasOwnProperty(resource)) {
            collection[resource] = 0;
        }
        collection[resource] += quantity;
    }

    for (const item in collection) {
        console.log(`${item} -> ${collection[item]}`);
    }
}