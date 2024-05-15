function generateSequance(length, element) {
    let sequance = [1];

    for (let i = 1 ; i < length; i++) {

        let index = Math.max(sequance.length - element, 0);

        let lastElements = sequance.slice(index);
        let sum = 0;
        for (const el of lastElements) {
            sum += el;
        }
        sequance.push(sum);
    }
 console.log(sequance.join(' '));
}