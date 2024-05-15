function interpretation(messages) {
    const numberMessages = Number(messages.shift());

    const starRegex = /[SsTtAaRr]*/g;
    const regexFormat = /@(?<planetName>[A-Za-z]+)[^\@\-\!\:\>]*:(?<planetPopulation>\d+)[^\@\-\!\:\>]*!(?<attackType>[A|D]{1})![^\@\-\!\:\>]*->(?<soldierCount>\d+)/g;
    let counter = 0;
    let output = [];
    let current = '';

    for (let message of messages) {
        let newMessage = message.match(starRegex);

        if (newMessage) {
            newMessage = newMessage.join('').split('');
            counter = newMessage.length;
        }

        for (let letter of message) {
            let index = letter.charCodeAt();
            let calculate = index - counter;
            current += String.fromCharCode(calculate);
        }
        output.push(current);
        current = '';
    }

    let attacked = 0;
    let destroyed = 0;
    let planetsA = [];
    let planetsB = [];

    while ((validation = regexFormat.exec(output)) !== null) {
        let name = validation.groups.planetName;
        let type = validation.groups.attackType;

        if (type === 'A') {
            attacked++;
            planetsA.push(name);
        } else {
            planetsB.push(name);
            destroyed++;
        }
    }
    planetsA.sort((a, b) => a.localeCompare(b));
    planetsB.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attacked}`);

    for (let planet of planetsA) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyed}`);

    for (let planet of planetsB) {
        console.log(`-> ${planet}`);
    }
}