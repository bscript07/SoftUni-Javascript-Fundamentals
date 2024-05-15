function equalArrays(tekst1,tekst2) {

    let sum = 0;

    for (let i = 0; i < tekst1.length; i++) {
        if (tekst1[i] !== tekst2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sum += Number(tekst1[i]);
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}