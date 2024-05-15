function calculate(x1, y1, x2, y2) {
    let point1 = x1 - x2;
    let point2 = y1 - y2;

    let result = Math.sqrt(point1*point1 + point2*point2);

    return result;
}