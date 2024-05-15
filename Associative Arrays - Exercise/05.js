function cardGame(array) {
    const players = new Map();
    const power = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    const type = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    for (const entry of array) {
        let [name, cards] = entry.split(': ');

        if (!players.has(name)) {
            players.set(name, new Set(cards.split(', ')));
        }
        else {
            for (const card of cards.split(', ')) {
                players.get(name).add(card);
            }
        }
    }

    const playersPower = new Map();

    [...players.entries()].forEach(([name, cards]) => {
        const score = [...cards].map(x => {
            const { p, m } = x.match(/(?<p>\d+|J|Q|K|A)(?<m>[SHDC])/).groups;
            return power[p] * type[m];
        }).reduce((x, y) => x + y, 0);

        playersPower.set(name, score);
    });

    [...playersPower.entries()].forEach(([name, pow]) => console.log(`${name}: ${pow}`));
}