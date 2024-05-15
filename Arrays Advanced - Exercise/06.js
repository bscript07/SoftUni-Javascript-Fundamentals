function bombNumbers(sequence, bombInfo) {
    let [specialNumber, power] = bombInfo;

    while (sequence.includes(specialNumber)) {
        let index = sequence.indexOf(specialNumber);

        let start = Math.max(0, index - power);
        let deleteCounter = power * 2 + 1;
        sequence.splice(start, deleteCounter);
    }
    let sum = sequence.reduce((acc, num) => acc + num, 0);
    console.log(sum);
}