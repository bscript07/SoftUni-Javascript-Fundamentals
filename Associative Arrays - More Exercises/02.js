function calculation(arr) {
    let armiesLeader = [];
    let armies = {};

    for (let el of arr) {
        if (el.includes('arrives')) {
            let index = el.indexOf('arrives');
            let leader = el.slice(0, index).trim();
            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {
                    armiesName: {},
                    armiesCount: 0
                }
            };
            armiesLeader.push(leader);
        } else if (el.includes('defeated')) {
            let index = el.indexOf('defeated');
            let leader = el.slice(0, index).trim();
            let indexOfLeader = armiesLeader.indexOf(leader);
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
                armiesLeader.splice(indexOfLeader, 1);
            }
        } else if (el.includes(':')) {
            let [leader, army] = el.split(': ');
            let [armyName, armyCount] = army.split(', ');

            if (armies.hasOwnProperty(leader)) {
                if (!armies[leader].armiesName.hasOwnProperty(armyName)) {
                    armies[leader].armiesName[armyName] = Number(armyCount);
                    armies[leader].armiesCount += Number(armyCount);
                }
            }
        } else if (el.includes('+')) {
            let [armyName, armyCount] = el.split(' + ');
            armiesLeader.forEach(leader => {
                for (let army in armies[leader]) {
                    if (armies[leader][army].hasOwnProperty(armyName)) {
                        armies[leader].armiesName[armyName] += Number(armyCount);
                        armies[leader].armiesCount += Number(armyCount);
                    }
                }
            });
        }
    }

    Object.entries(armies)
        .sort((a, b) => b[1].armiesCount - a[1].armiesCount)
        .forEach(army => {
            console.log(`${army[0]}: ${army[1].armiesCount}`);

    Object.entries(army[1].armiesName)
        .sort((a, b) => b[1] - a[1])
        .forEach(armyName => {
            console.log(`>>> ${armyName[0]} - ${armyName[1]}`);
                });
        });

}