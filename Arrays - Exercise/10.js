function ladybugs(flying) {
    let sizeField = flying[0];
    let positions = flying[1].split(' ').map(Number);
    let ladyBugArray = [];

    for (let i = 0; i < sizeField; i++) {
        ladyBugArray.push(0);
    }

    for (let i = 0; i < sizeField; i++) {
        let index = positions[i];

        if (index >= 0 && index < sizeField) {
            ladyBugArray[index] = 1;
        }
    }

    for (let i = 2; i < flying.length; i++) {
        let [index, direction, flylength] = flying[i].split(' ');
        index = +index;
        flylength = +flylength;

        if (ladyBugArray[index] !== 1 || index < 0 || index >= ladyBugArray.length) {
            continue;
        }

        if (flylength < 0) {
            flylength = Math.abs(flylength);
            if (direction === 'right') {
                direction = 'left';
            } else if (direction === 'left') {
                direction = 'right';
            }
        }
        ladyBugArray[index] = 0;

        if (direction === 'right') {
            let jumpLadybug = index + flylength;
            if (ladyBugArray[jumpLadybug] === 1) {
                jumpLadybug = jumpLadybug + flylength;
            }

            if (jumpLadybug <= ladyBugArray.length) {
                ladyBugArray[jumpLadybug] = 1;
            }

        } else {
            let jumpLadybug = index - flylength;
            if (ladyBugArray[jumpLadybug] === 1) {
                jumpLadybug = jumpLadybug - flylength;
            }

            if (jumpLadybug >= 0) {
                ladyBugArray[jumpLadybug] = 1;
            }
        }
    }
    console.log(ladyBugArray.join(' '));
}