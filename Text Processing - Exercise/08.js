function hardWords(arr) {
    let text = arr[0];
    let words = arr[1];
    words.sort((a, b) => b.length - a.length);

    for (const word of words) {
        text = text.replace('_'.repeat(word.length), word);
    }
    console.log(text);
}