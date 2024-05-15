function companyUsers(input) {
    let users = {};

    input.forEach(line => {
        let [companyName, personID] = line.split(' -> ');

        if (!users.hasOwnProperty(companyName)) {
            users[companyName] = [];
        }
        users[companyName].push(personID);
    });

    let sort = Object.entries(users).sort((a, b) => a[0].localeCompare(b[0]));

    sort.forEach(el => {
        const companyName = el[0];
        const allId = el[1];

        console.log(companyName);

        let uniqueID = new Set(allId);
        for (const id of uniqueID) {
            console.log(`-- ${id}`);
        }
    });
}