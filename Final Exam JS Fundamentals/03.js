function pirateUsurpation(data) {

    const map = {};

    let command = data.shift();
    while (command !== 'Sail') {
        const arguments = command.split('||');
        const town = arguments[0];
        const people = Number(arguments[1]);
        const gold = Number(arguments[2]);

        if (!map.hasOwnProperty(town)) {
            map[town] = { people, gold };
        } else {
            map[town].people += people;
            map[town].gold += gold;
        }
        command = data.shift();
    }

    command = data.shift();
    while (command !== 'End') {

        const arguments = command.split('=>');

        if (arguments[0] === 'Plunder') {
            const town = arguments[1];
            const people = Number(arguments[2]);
            const gold = Number(arguments[3]);

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            map[town].people -= people;
            map[town].gold -= gold;

            if (map[town].people <= 0 || map[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`);

                delete map[town];
            }
        } else {
            const town = arguments[1];
            const gold = Number(arguments[2]);

            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                map[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${map[town].gold} gold.`);
            }
        }
        command = data.shift();
    }

    if (!Object.keys(map).length) {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    } else {
        console.log(`Ahoy, Captain! There are ${Object.keys(map).length} wealthy settlements to go to:`);

        Object.entries(map)
            .forEach(([town, value]) => {
                console.log(`${town} -> Population: ${value.people} citizens, Gold: ${value.gold} kg`)
            });
    }
}