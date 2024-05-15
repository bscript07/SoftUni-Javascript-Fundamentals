function legedaryItem(input) {
    let arr = input.split(' ');

    let materials = {};
    let keyMaterials = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    };

    let champion = '';
    for (let i = 0; i <= arr.length - 1; i+=2) {
        let quantity = Number(arr[i]);
        let material = arr[i+1].toLowerCase();

        if (material === 'shards' || material === 'fragments' || material === 'motes') {
            keyMaterials[material] += Number(quantity);
           
            if (keyMaterials[material] >= 250 && material === 'shards') {
                champion = 'Shadowmourne';
                keyMaterials[material] -= 250;
                break;
            } else if (keyMaterials[material] >= 250 && material === 'fragments') {
                champion = 'Valanyr';
                keyMaterials[material] -= 250;
                break;
            } else if (keyMaterials[material] >= 250 && material === 'motes') {
                champion = 'Dragonwrath';
                keyMaterials[material] -= 250;
                break;
            }
        } else {
            if (!materials.hasOwnProperty(material)) {
                materials[material] = Number(quantity);
            } else {
                materials[material] += Number(quantity);
            }
        }
    } 
    console.log(`${champion} obtained!`);

    let sortedKeyMaterials = Object.entries(keyMaterials);
    sortedKeyMaterials.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    let sortedMaterials = Object.entries(materials);
    sortedMaterials.sort(sortAlphabetically);

    function sortDescending(arg1, arg2) {
        let firstQuantity = arg1[1];
        let secondQuantity = arg2[1];
        return secondQuantity - firstQuantity;
    }

    function sortAlphabetically(arg1, arg2) {
        let firstMaterialName = arg1[0];
        let secondMaterialName = arg2[0];
        return firstMaterialName.localeCompare(secondMaterialName); 
    }

    for (const [material, quantity] of sortedKeyMaterials) {
        console.log(`${material}: ${quantity}`);
    }

    for (const [material, quantity] of sortedMaterials) {
        console.log(`${material}: ${quantity}`);
    }
}