function trackAirPollution(map, forces) {
    const pollutedBlocks = [];
    const matrix = map.map(row => row.split(' ').map(Number));

    for (const force of forces) {
        const [type, value] = force.split(' ');

        if (type === 'breeze') {
            const rowIndex = Number(value);
            for (let col = 0; col < 5; col++) {
                matrix[rowIndex][col] -= 15;
                if (matrix[rowIndex][col] < 0) {
                    matrix[rowIndex][col] = 0;
                }
            }
        } else if (type === 'gale') {
            const colIndex = Number(value);
            for (let row = 0; row < 5; row++) {
                matrix[row][colIndex] -= 20;
                if (matrix[row][colIndex] < 0) {
                    matrix[row][colIndex] = 0;
                }
            }
        } else if (type === 'smog') {
            const smogValue = Number(value);
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    matrix[row][col] += smogValue;
                }
            }
        }
    }

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col] >= 50) {
                pollutedBlocks.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedBlocks.length > 0) {
        console.log(`Polluted areas: ${pollutedBlocks.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}