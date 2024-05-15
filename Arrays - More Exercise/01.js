function solve(arr) {
    let array = [];
    let lastElement = arr.pop();

    for (let i in arr) {
        if (i % lastElement === 0) {
            array.push(arr[i]);
        }
    }
    console.log(array.join(' '));
}