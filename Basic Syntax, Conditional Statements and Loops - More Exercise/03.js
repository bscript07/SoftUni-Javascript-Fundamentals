function nextDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day+1);

    let yearPar = nextDay.getFullYear();
    let monthPar = nextDay.getMonth()+1;
    let datePar = nextDay.getDate();

    console.log(`${yearPar}-${monthPar}-${datePar}`);
}