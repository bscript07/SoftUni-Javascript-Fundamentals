function generateSpiralMatrix(rows,cols) {
    let matrix = [];
    let counter = 1;
    let startRow = 0;
    let endRow = rows - 1;
    let startCol = 0;
    let endCol = cols - 1;

    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }

    while (startRow <= endRow && startCol <= endCol) {

        for (let i = startCol; i <= endCol; i++) {
            matrix[startRow][i] = counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endCol] = counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            matrix[endRow][i] = counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startCol] = counter++;
        }
        startCol++;
    }
    for (let i = 0; i < rows; i++) {
        console.log(matrix[i].join(' '));
    }
}