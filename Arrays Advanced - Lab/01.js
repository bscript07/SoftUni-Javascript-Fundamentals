function array(elements) {
    let firstEl = Number(elements.shift());
    let lastEl = Number(elements.pop());
    let sum = firstEl + lastEl;
    console.log(sum);
}