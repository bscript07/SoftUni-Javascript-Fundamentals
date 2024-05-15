function checking(input) {
    const wordChecking = {};

    for (let i = 0; i < input.length; i++) {
        let word = input[i].toLowerCase();
        if (wordChecking[word] === undefined) {
            wordChecking[word] = 1;
        } else {
            wordChecking[word]++;
        }
    }

    let wordCountArray = [];

    for (let word in wordChecking) {
        wordCountArray.push([word, wordChecking[word]]);
    }

    wordCountArray.sort(function (a, b) {
        return b[1] - a[1];
    });

    for (let k = 0; k < wordCountArray.length; k++) {
        let words = wordCountArray[k][0];
        let count = wordCountArray[k][1];
        console.log(words + ' -> ' + count + ' ' + 'times');
    }
}