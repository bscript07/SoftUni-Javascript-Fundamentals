function wordsRepeat(arr) {
    const words = arr.shift().split(' ');
    let result = {};

    for (const word of words) {
        result[word] = 0;
    }

    for (const word of arr) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }
    const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }

}