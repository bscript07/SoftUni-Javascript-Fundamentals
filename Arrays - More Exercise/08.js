function diagonalAttack(matrices) {
    let matrix = matrices.map(row => row.split(' ').map(Number));

    let firstD = 0;
    for (let i = 0; i < matrix.length; i++) {
        firstD = firstD + matrix[i][i];
    }

    let secondD = 0;
    for (let j = 0; j < matrix.length; j++) {
        secondD = secondD + matrix[j][matrix.length - 1 - j];
    }

    if (firstD === secondD) {
        for (let q = 0; q < matrix.length; q++) {
            for (let z = 0; z < matrix.length; z++) {
                if (q != z && q != matrix.length - 1 - z) {
                    matrix[q][z] = firstD;
                }
            }
        }
        printMatrix(matrix);
    }
    else {
        printMatrix(matrix);
    }
    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
}