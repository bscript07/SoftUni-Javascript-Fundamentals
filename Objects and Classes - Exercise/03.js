function storeProvision(available, delivery) {
    const products = {};
    const availableLength = available.length;
    const deliveryLength = delivery.length;

    for (let i = 0; i < availableLength; i += 2) {
        const curProduct = available[i];
        products[curProduct] = Number(available[i + 1]);
    }

    for (let i = 0; i < deliveryLength; i += 2) {
        const curProduct = delivery[i];

        if (!products.hasOwnProperty(curProduct)) {
            products[curProduct] = 0;
        }
        products[curProduct] += Number(delivery[i + 1]);
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}