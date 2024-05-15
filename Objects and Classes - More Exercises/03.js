function arrangeStudents(array) {
    let schoolRegister = {};

    for (const line of array) {
        const tokens = line.split(' ');
        const name = tokens[2].slice(0, tokens[2].length - 1);
        const grade = Number(tokens[4].slice(0, tokens[4].length - 1));
        const average = Number(tokens[tokens.length - 1]);

        if (average >= 3) {
            if (!schoolRegister.hasOwnProperty(grade)) {
                schoolRegister[grade] = {
                    studentName: [name],
                    gradeAverage: [average]
                }
            } else {
                schoolRegister[grade].studentName.push(name);
                schoolRegister[grade].gradeAverage.push(average);
            }
        }
    }

    for (const totalGrade in schoolRegister) {
        const currentStudent = schoolRegister[totalGrade];
        console.log(`${Number(totalGrade) + 1} Grade`);
        console.log(`List of students: ${currentStudent.studentName.join(', ')}`);
        const totalAverage = currentStudent.gradeAverage.reduce((a, b) => a + b) / currentStudent.gradeAverage.length;
        console.log(`Average annual score from last year: ${totalAverage.toFixed(2)}`);
        console.log(' ');
    }
}