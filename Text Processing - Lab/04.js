function occurrences(text, searchedWord) {
    let count = text.split(' ').filter(w => w === searchedWord).length;
    console.log(count);
}