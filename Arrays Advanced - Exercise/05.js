function sortByCriteria(arrayOfStrings) {

    let sortedArray = arrayOfStrings.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    console.log(sortedArray.join('\n'));
}