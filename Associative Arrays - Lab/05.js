function grades(input) {
    const students = {};

    for (let i = 0; i < input.length; i++) {
        const [name, ...grades] = input[i].split(' ');
        const studentGrades = grades.map(Number);

        if (students.hasOwnProperty(name)) {
            students[name].push(...studentGrades);
        } else {
            students[name] = studentGrades;
        }
    }

    const studentNames = Object.keys(students).sort();

    for (let i = 0; i < studentNames.length; i++) {
        const name = studentNames[i];
        const grades = students[name];
        const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
        const fixedAverage = average.toFixed(2);

        console.log(`${name}: ${fixedAverage}`);
    }
}