function listOfProducts(arrOfProducts) {
    let sort = arrOfProducts.sort();

    for (let i = 0; i < sort.length; i++) {
        console.log(`${i + 1}.${sort[i]}`);
    }
}