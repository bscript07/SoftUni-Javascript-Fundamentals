function mergeArrays(arr1,arr2) {

    let thirdArray = [];
    let firstArrayLength = arr1.length;

    for (let i = 0; i < firstArrayLength; i++) {
        if (i % 2 === 0) {
            thirdArray.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            thirdArray.push(arr1[i] + arr2[i]);
        }
    }
    console.log(thirdArray.join(' - '));
}