function pointsValidation(array) {
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    let checkingPoint1 = firstPoint(array);
    let checkingPoint2 = secondPoint(array);
    let checkingPoint3 = thirdPoint(array);

    if (checkingPoint1 === Math.trunc(checkingPoint1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (checkingPoint2 === Math.trunc(checkingPoint2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (checkingPoint3 === Math.trunc(checkingPoint3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function firstPoint() {
        let checkFirstPoint = Math.sqrt(Math.pow(x1,2) + Math.pow(y1,2));
        return checkFirstPoint;
    }

    function secondPoint() {
        let checkSecondPoint = Math.sqrt(Math.pow(x2,2) + Math.pow(y2,2));
        return checkSecondPoint;
    }

    function thirdPoint() {
        let checkThirdPoint = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return checkThirdPoint;
    }
}