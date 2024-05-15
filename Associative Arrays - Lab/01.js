function phoneBook(input) {
    let phoneBook = {};

    for (const entry of input) {
        let [name, phoneNumber] = entry.split(' ');
        phoneBook[name] = phoneNumber;
    }

    for (const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
    
}