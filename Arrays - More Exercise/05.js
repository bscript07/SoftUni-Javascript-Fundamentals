function tseamAccount(input) {
    let account = input.shift().split(' ');
    
    for ( let i = 0; i < input.length; i++) {
        let [command, game] = input[i].split(' ');

        if (command === 'Install' && !account.includes(game)) {
            account.push(game);
        } else if (command === 'Uninstall' && account.includes(game)) {
            account.splice(account.indexOf(game), 1);
        } else if (command === 'Update' && account.includes(game)) {
            account.splice(account.indexOf(game), 1);
            account.push(game);
        } else if (command === 'Expansion') {
            let [baseGame, expansion] = game.split('-');
            if (account.includes(baseGame)) {
                account.splice(account.indexOf(baseGame) + 1,0, `${baseGame}:${expansion}`)
            }
        } else if (command === 'Play') {
          break;
        }
    }

    console.log(account.join(' '));
}