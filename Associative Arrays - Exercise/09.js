function masterGladiator(input) {

    const gladiatorData = {};

    for (const line of input) {
        if (line.includes(' -> ')) {

            const [gladiator, technique, skillPoints] = line.split(' -> ');

            if (!gladiatorData[gladiator]) {
                gladiatorData[gladiator] = {};
            }
    
            if (!gladiatorData[gladiator][technique] || gladiatorData[gladiator][technique] < skillPoints) {
                gladiatorData[gladiator][technique] = skillPoints;
            }

        } else if (line.includes(' vs ')) {

            const [warrior1, warrior2] = line.split(' vs ');

            if (gladiatorData[warrior1] && gladiatorData[warrior2]) {

                const warrior1Skills = Object.entries(gladiatorData[warrior1]);
                const warrior2Skills = Object.entries(gladiatorData[warrior2]);
                const comparison = duel(warrior1Skills, warrior2Skills);

                if (comparison < 0) {
                    delete gladiatorData[warrior1];
                } else if (comparison > 0) {
                    delete gladiatorData[warrior2];
                }
            }
        }  else if (line == 'Ave Cesar') {
            printGladiators(gladiatorData);
            break;
        }
    }

    function duel(warrior1SkillPoints, warrior2SkillPoints) {

        const isMatch = warrior1SkillPoints
        .filter(([technique]) => warrior2SkillPoints.some(([otherTechnique]) => otherTechnique === technique))
        .map(x => x !== undefined)[0];

        if (isMatch) {
            const person1SkillPoints = warrior1SkillPoints
            .reduce((total, [, skillPoints]) => total + Number(skillPoints), 0);

            const person2SkillPoints = warrior2SkillPoints
            .reduce((total, [, skillPoints]) => total + Number(skillPoints), 0);

            return person1SkillPoints - person2SkillPoints;
        } else {

            return 0;
        }
    }

    function printGladiators(object) {
        const gladiators = Object.keys(object)
        .sort((a, b) => calculate(object[b]) - calculate(object[a]));

        for (const gladiator of gladiators) {
            const gladiatorSkills = object[gladiator];
            const totalPoints = calculate(gladiatorSkills);

            console.log(`${gladiator}: ${totalPoints} skill`);

            Object.entries(gladiatorSkills)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(([technique, skillPoints]) => console.log(`- ${technique} <!> ${skillPoints}`));
        }
    }

    function calculate(skills) {
        return Object.entries(skills).
        reduce((total, [technique, skillPoints]) => total + Number(skillPoints), 0);
    }
}