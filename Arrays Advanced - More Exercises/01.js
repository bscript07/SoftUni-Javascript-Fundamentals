function equalNeighbors(matrix) {
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (k + 1 < matrix[i].length && matrix[i][k] === matrix[i][k + 1]) {
                counter++;
            }
            if (i + 1 < matrix.length && matrix[i][k] === matrix[i + 1][k]) {
                counter++;
            }
        }
    }
    return counter;
}