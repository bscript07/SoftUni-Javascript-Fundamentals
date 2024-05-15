function gladiatorInventory(commands) {
    
    let inventory = commands.shift().split(' ');

    commands.forEach((command) => {
        let [action, equipment] = command.split(' ');

        switch (action) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    let repairedEquipment = inventory.splice(index, 1);
                    inventory.push(repairedEquipment[0]);
                }
                break;
            case 'Upgrade':
                let [currentEquipment, upgrade] = equipment.split('-');
                if (inventory.includes(currentEquipment)) {
                    let index = inventory.indexOf(currentEquipment);
                    inventory.splice(index + 1, 0, `${currentEquipment}:${upgrade}`);
                }
                break;
        }
    });
    console.log(inventory.join(' '));
}