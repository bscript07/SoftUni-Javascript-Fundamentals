function sequences(input) {

    input = input.map(element => JSON.parse(element));
    input.forEach(element => element.sort((a, b) => b - a));

    let array = [];
    
    for (let i = 0; i < input.length; i++) {
        let currentArray = input[i];
        let isUnique = true;

        for (let k = 0; k < array.length; k++) {
            let nextArray = array[k];

            if (nextArray.toString() === currentArray.toString()) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            array.push(currentArray);
        }
    }
    array.sort((a, b) => a.length - b.length);
    array.forEach(element => console.log(`[${element.join(', ')}]`));
}