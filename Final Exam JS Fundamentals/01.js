function activationKeys(input) {
    let activationKey = input.shift();
    let instructions = input.slice();

    let command = instructions.shift();
    while (command != 'Generate') {

        let arguments = command.split('>>>');
        let instructionName = arguments.shift();

        switch (instructionName) {

            case 'Contains': {
                let substring = arguments[0];
                if (activationKey.includes(substring)) {
                    console.log(`${activationKey} contains ${substring}`);
                } else {
                    console.log("Substring not found!");
                }
                break;
            }

            case 'Flip': {
                let casing = arguments[0];
                let startIndex = arguments[1];
                let endIndex = arguments[2];

                let strPart = activationKey.substring(startIndex, endIndex);
                let newStrPart = casing == 'Upper' ? strPart.toUpperCase() : strPart.toLowerCase();
                activationKey = activationKey.replace(strPart, newStrPart);
                console.log(activationKey);
                break;
            }
            case 'Slice': {
                let startIndex = arguments[0];
                let endIndex = arguments[1];
                let substring = activationKey.substring(startIndex, endIndex);
                activationKey = activationKey.replace(substring, '');
                console.log(activationKey);
                break;
            }
        }
        command = instructions.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}