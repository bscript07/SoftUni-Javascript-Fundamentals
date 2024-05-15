function buildWall(heights) {
    const cubicYardsPerDay = 195;
    const pricePerOneCubicYard = 1900;

    const wallSections = heights.map(Number);

    let days = 0;
    let concreteUsed = [];

    while (wallSections.some(section => section < 30)) {
        const sectionInProgress = wallSections.filter(section => section < 30);
        const totalConcrete = sectionInProgress.length * cubicYardsPerDay;
        concreteUsed.push(totalConcrete);

        for (let i = 0; i < wallSections.length; i++) {
            if (wallSections[i] < 30) {
                wallSections[i]++;
            }
        }
        days++;
    }
    const totalCost = concreteUsed.reduce((sum, concrete) => sum + concrete, 0) * pricePerOneCubicYard;

    console.log(concreteUsed.join(', '));
    console.log(totalCost + ' ' + 'pesos');
}