function addAndRemove(arr) {
    let finalResult = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'remove') {
            finalResult.pop();
        } else if (arr[i] === 'add') {
            finalResult.push(i + 1);
        }
    }
    if (finalResult.length === 0) {
        console.log('Empty');
    } else {
        console.log(finalResult.join(' '));
    }
}