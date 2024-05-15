function employess(list) {
    let emList = {};

    list.forEach(person => {
        emList[person] = person.length;
    })

    for (const key in emList) {
        console.log(`Name: ${key} -- Personal Number: ${emList[key]}`);
    }
}