function magicSum(arr1,arr2) {
    let arrayLength = arr1.length;

    for (let i = 0; i < arrayLength; i++) {
        for (let j = i + 1; j < arrayLength; j++) {
            if (Number(arr1[i]) + Number(arr1[j]) === Number(arr2)) {
                console.log(arr1[i] + ` ` + arr1[j]);
            }
        }
    }
}