function rossetaStone(array) {

    let matrixLength = Number(array[0]);
    let matrixTemplate = [];
    let rowsTemplate = 0;
    let counter = 0;

    for (let i = 1; i <= matrixLength; i++) {
        counter++;
        matrixTemplate.push(array[i].split(' ').map(Number));
    }

    rowsTemplate = matrixTemplate[0].length;
    counter = 0;

    let matrixMessage = [];
    let rowsMessage = 0;

    for (let i = matrixLength + 1; i < array.length; i++) {
        counter++;
        matrixMessage.push(array[i].split(' ').map(Number));
    }

    rowsMessage = matrixMessage[0].length;
    counter = 0;

    let matrix = matrixMessage;
    let result = '';

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            matrix[row][col] += matrixTemplate[row % matrixLength][col % rowsTemplate];
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let number = matrix[i][j] % 27;
            if (number != 0) {
                matrix[i][j] = String.fromCharCode(number + 64);
            } else {
                matrix[i][j] = ' ';
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result += matrix[i][j];
        }
    }
    console.log(result);
}