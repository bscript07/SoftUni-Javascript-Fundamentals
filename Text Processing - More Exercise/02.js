function solve(input) {
    let str = input[0];
    let characters = [];

    for (let i = 0; i < str.length; i++) {
        if (!characters.includes(str[i])) {
            characters.push(str[i]);
        }
    }

    while (characters.length > 0) {
        let char = characters.shift();
        let index = [];

        for (let i = 0; i < str.length; i++) {
            if (char === str[i]) {
                index.push(i);
            }
        }
        console.log(char + ':' + index.join('/'));
    }
}