function searchForNumber(intArr, actionsArr) {

    let takenNumbers = actionsArr[0];
    let deleteNumbers = actionsArr[1];
    let specialNumber = actionsArr[2];

    let numbers = intArr.slice(0, takenNumbers);
    numbers.splice(0, deleteNumbers);
    
    let command = 0;

    for (const num of numbers) {
        if (num === specialNumber) {
            command++;
        }
    }
    console.log(`Number ${specialNumber} occurs ${command} times.`);
}