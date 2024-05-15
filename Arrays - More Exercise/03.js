function rotate(array) {
    let rotations = array[array.length - 1];
    array.pop();

    for (let i = 1; i <= rotations; i++) {
        let current = array.pop();
        array.unshift(current);
    }
    console.log(array.join(' '));
}