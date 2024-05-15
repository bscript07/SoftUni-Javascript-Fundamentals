function repetitions(words) {
    let result = {};
    let totalWords = words.split(' ').map(w => w.toLowerCase());

    for (const word of totalWords) {
        if (result[word] == undefined) {
            result[word] = 1;
        } else {
            result[word]++;
        }
    }
    let totalResult = '';

    for (const word of totalWords) {
        if (result[word] % 2 === 1) {
            totalResult += `${word} `;
            delete result[word];
        }
    }
    console.log(totalResult);
}