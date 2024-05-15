function passwordGenerator(input) {
    let password = (input[0] + input[1]).toLocaleLowerCase();
    let key = input[2].toLocaleUpperCase();
    const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;

    for (const char of password) {
        if (vowelLetters.includes(char)) {
            password = password.replace(char, key[index++]);
            if (key[index] === undefined) {
                index = 0;
            }
        }
    }
    let result = password.split('').reverse().join('');
    console.log(`Your generated password is ${result}`);
}