function orbit([width, height , x , y]) {
    const matrix = [];

    for (let row = 0; row < height; row++) {
        matrix[row] = [];
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }
    return matrix.map(row => row.join(' ')).join('\n');
}