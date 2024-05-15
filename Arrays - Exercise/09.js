function dungeonestDark([str]) {  
    let mainIndex = 0;
    let word = '';
    let counter = 0;
    let array1 = [];

    while (mainIndex < str.length) {
        for (let i = mainIndex; i < str.length; i++) {
            let letter = str[i];
            if (letter !== ' ' && letter !== '|') {
                word += letter;
            } else {
                break;
            }
            counter++;
        }
        array1.push(word);
        counter++;
        mainIndex = counter;
        word = '';
    }

    let indexArray = 0;
    let health = 100;
    let coins = 0;
    let room = 1;
    let ifIsDead = false;
    
    while (indexArray < array1.length) {
        let itemOrMonster = array1[indexArray];
        indexArray++;
        let number = Number(array1[indexArray]);

        if (itemOrMonster === 'potion') {
            health += number;
            if (health > 100) {
                number = 100 - (health - number);
                health = 100;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonster === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health <= 0) {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${room}`);
                ifIsDead = true;
                break;
            } else if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            }
        }
        room++;
        indexArray++;
    }
    if (ifIsDead == false) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}