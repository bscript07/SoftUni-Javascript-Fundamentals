function maxNumber(array) {
    let resArray = [];

    for (let i = 0; i < array.length; i++) {
        let bigger = true;
        let curNumber = array[i];

        for (let k = i + 1; k < array.length; k++) {
            if (curNumber <= array[k]) {
                bigger = false;
            }
        }
        if(bigger) {
            resArray.push(array[i]);
        }
    }
    console.log(resArray.join(' '));
}