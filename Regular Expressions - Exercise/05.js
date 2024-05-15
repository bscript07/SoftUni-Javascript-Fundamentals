function battle(line) {
    const array = line.split(/[, ]+/g);
    const healthPattern = /[^0-9.\/+*-]/g;
    const damagePattern = /[+-]?\d+\.?\d*/g;
    const divideOrMuliply = /(?<multiply>[*])|(?<divide>[\/])/g;
    const object = {};

    let healthResult = 0;
    let damageResult = 0;

    for (const str of array) {
        object[str] = {}
        const health = [...str.matchAll(healthPattern)]
        const damage = [...str.matchAll(damagePattern)]
        const divideOrMultiplies = [...str.matchAll(divideOrMuliply)]

        for (let i = 0; i < health.length; i++) {
            const text = health[i][0];
            const toAsciiCode = text.charCodeAt();
            healthResult += toAsciiCode;
        }

        object[str]['health'] = healthResult;
        healthResult = 0;
        for (let j = 0; j < damage.length; j++) {
            const number = Number(damage[j][0]);
            damageResult += number;
        }

        for (let element of divideOrMultiplies) {
            if (element.groups.multiply === '*') {
                damageResult *= 2;
            } else if (element.groups.divide === '/') {
                damageResult /= 2;
            }
        }
        object[str]['damage'] = damageResult;
        damageResult = 0;
    }

    const sortingMap = Object.entries(object).sort((a, b) => (a[0]).localeCompare(b[0]));
    for (const [name, arrays] of sortingMap) {
        console.log(`${name} - ${arrays['health']} health, ${arrays['damage'].toFixed(2)} damage`);
    }
}