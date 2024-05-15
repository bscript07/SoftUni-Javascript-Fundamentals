function requiredReading(numberOfPages,pagesReadIn1Hour,numberOfDays) {
    let totalTime = numberOfPages / pagesReadIn1Hour;
    let hoursPerDay = totalTime / numberOfDays;

    console.log(hoursPerDay);
}