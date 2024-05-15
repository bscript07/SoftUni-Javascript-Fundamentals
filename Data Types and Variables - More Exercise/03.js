function calculate(radius, height) {
    const volume = (1 / 3) * Math.PI * radius * radius * height;
    const slantHeight = Math.sqrt(radius * radius + height * height);
    const area = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}