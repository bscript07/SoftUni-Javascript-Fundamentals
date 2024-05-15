function formatGrade(grade) {
    let assessment = '';

    if (grade < 3.00) {
        assessment = 'Fail';
        grade = 2.00;
    } else if (grade < 3.50) {
       assessment = 'Poor';
    } else if (grade < 4.50) {
       assessment = 'Good';
    } else if (grade < 5.50) {
       assessment = 'Very good';
    } else {
       assessment = 'Excellent';
    }
    
    if (assessment == 'Fail') {
        console.log(`${assessment} (2)`);
    } else {
        console.log(`${assessment} (${grade.toFixed(2)})`);
    }
}