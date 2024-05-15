function firstLastElements(input) {
    let counter = input.shift();

    let firstElements = input.slice(0, counter);
    let lastElement = input.slice(input.length - counter);

    console.log(firstElements.join(' '));
    console.log(lastElement.join(' '));
}