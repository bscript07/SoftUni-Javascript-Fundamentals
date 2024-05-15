function inventory(list) {
    let heroes = [];

    list.forEach(row => {
        let [name, level, items] = row.split(' / ');
        let currentHero = {
            name,
            level: Number(level),
            items
        }
        heroes.push(currentHero);
    });

    heroes.sort((a, b) => a.level - b.level);

    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}