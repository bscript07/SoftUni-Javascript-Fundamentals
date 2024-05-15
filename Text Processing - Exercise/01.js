function revealWords(words, sentence) {
    let wordsArray = words.split(', ');

    for (const word of wordsArray) {
        const match = ` ${'*'.repeat(word.length)}`;
        sentence = sentence.replace(match, ' ' + word);
    }
    console.log(sentence);
}