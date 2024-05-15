function splitString(data) {
    let result = data[0];
    let text = data.toLowerCase();

    for (let i = 1; i < data.length; i++) {
        if (data[i] !== text[i]) {
            result += ', ';
        }
        result += data[i];
    }
    console.log(result);
}