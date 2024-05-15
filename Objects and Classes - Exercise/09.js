function sortingProducts(array) {
    const catalog = {};

    for (line of array) {
        const arr = line.split(' : ');
        const [product, price] = line.split(' : ');
        const letter = product[0];

        if (catalog.hasOwnProperty(letter) === false) {
            catalog[letter] = {};
        }

        catalog[letter][product] = price;
    }

    const sort = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (let key of sort) {
        console.log(key);
        const sortedProducts = Object.keys(catalog[key]).sort((a, b) => a.localeCompare(b));

        for (let nextKey of sortedProducts) {
            console.log(`  ${nextKey}: ${catalog[key][nextKey]}`);
        }
    }
}