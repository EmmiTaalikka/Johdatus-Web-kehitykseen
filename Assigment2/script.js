
//assigment2 partB
const examScores = [67, 78, 45, 89, 94, 56, 72, 81, 63, 90];

console.log(examScores);

//loop through all exam scores
for (let i = 0; i < examScores.length; i++) {
    console.log(examScores[i]);
}

//Determine whether each student passed or failed.
const passingScore = 50; 

for (let i = 0; i < examScores.length; i++) {
    if (examScores[i] >= passingScore) {
        console.log(examScores[i] + " -> PASS");
    } else {
        console.log(examScores[i] + " -> FAIL");
    }  
}

//Count the total number of students who passed.
let passCount = 0;
for (let i = 0; i < examScores.length; i++) {
    if (examScores[i] >= passingScore) {
        passCount++;
    }
}
console.log("Total number of students who passed: " + passCount);


//Part C

const studentIds = ["STU01","STU02","STU03","STU04","STU05","STU06","STU07","STU08","STU09" ,"STU10"];

// Match student IDs with exam scores and display results
for (let i = 0; i < studentIds.length; i++) {
    const studentId = studentIds[i].toUpperCase(); // Convert to uppercase
    const score = examScores[i];
    console.log(studentId + ": " + score);
}

// calculate scores
let highestScore = examScores[0];
let lowestScore = examScores[0];
let totalScore = 0;

for (let i = 0; i < examScores.length; i++) {
    if (examScores[i] > highestScore) {
        highestScore = examScores[i];
    }
    if (examScores[i] < lowestScore) {
        lowestScore = examScores[i];
    }
    totalScore += examScores[i];
}

const averageScore = totalScore / examScores.length;

console.log("Highest score: " + highestScore);
console.log("Lowest score: " + lowestScore);
console.log("Average score: " + averageScore);