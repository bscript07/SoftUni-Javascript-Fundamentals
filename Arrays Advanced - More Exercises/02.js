function snowBall(matrix) {
    let bombs = matrix.pop().split(' ').map((str) => str.split(',').map((x) => Number(x)));
    let hangar = matrix.map((row) => row.split(' ').map((x) => Number(x)));

    let damage = 0;
    let kills = 0;

    for (let i = 0; i < bombs.length; i++) {
        let bombRow = bombs[i][0];
        let bombCol = bombs[i][1];
        let bombValue = hangar[bombRow][bombCol];

        if (bombValue <= 0) {
            continue;
        }

        let startRow = Math.max(0, bombRow - 1);
        let endRow = Math.min(bombRow + 1, matrix.length - 1);

        for (let row = startRow; row <= endRow; row++) {
            let startCol = Math.max(0, bombCol - 1);
            let endCol = Math.min(bombCol + 1, matrix[row].length - 1);

            for (let col = startCol; col <= endCol; col++) {
                hangar[row][col] -= bombValue;
            }
        }

        kills++;
        damage += bombValue;
    }

    for (let row = 0; row < hangar.length; row++) {
        for (let col = 0; col < hangar[row].length; col++) {
            if (hangar[row][col] > 0) {
                damage += hangar[row][col];
                kills++;
            }
        }
    }
    console.log(damage);
    console.log(kills);
}