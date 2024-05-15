function arrayRotation(array,rotations) {
    for (let i = 0; i < rotations; i++) {
        let movedNumber = array.shift();
        array.push(movedNumber);
    }
    console.log(array.join(' '));
}