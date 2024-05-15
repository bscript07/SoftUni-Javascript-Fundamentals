function solve(array) {
    
    let longestSequence = [];
    let leftMostIndex = 0;

    for (let i = 0; i < array.length; i++) {
        let currentE1 = Number(array[i]);
        let currentSequence = [currentE1];

        for (let j = i + 1; j < array.length; j++) {
            let nextE1 = Number(array[j]);
            if (nextE1 === currentE1) {
                currentSequence.push(nextE1);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
                leftMostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}