function racing(data) {
    let racers = data.shift().split(', ');
    let racersObject = {};
    const namesPattern = /[A-Za-z]+/g;
    const numbersPattern = /[0-9]+/g;

    let command = data.shift();

    while (command !== 'end of race') {
        const currentName = command.match(namesPattern).join('');
        const currentDistance = command.match(numbersPattern).join('');

        if (racers.includes(currentName)) {
            let distance = 0;

            for (const digit of currentDistance) {
                distance += Number(digit);
            }

            if (!racersObject.hasOwnProperty(currentName)) {
                racersObject[currentName] = distance;
            } else {
                racersObject[currentName] += distance;
            }
        }
        command = data.shift();
    }
    let sortedRacers = Object.entries(racersObject).sort((a, b) => b[1] - a[1]);
    const firstPlace = sortedRacers[0][0];
    const secondPlace = sortedRacers[1][0];
    const thirdPlace = sortedRacers[2][0];

    console.log(`1st place: ${firstPlace}`);
    console.log(`2nd place: ${secondPlace}`);
    console.log(`3rd place: ${thirdPlace}`);
}