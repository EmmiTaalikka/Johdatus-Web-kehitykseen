console.log("Hei, script.js tiedostosta!");

//assigment2 partB
const examScores = [67, 78, 45, 89, 94,56, 72, 81, 63, 90];

console.log(examScores);

/*
Create a variable containing the passing score.

- Loop through all exam scores.
- Determine whether each student passed or failed.
- Count the total number of students who passed.

const passingScore = 50;
67 -> PASS
49 -> FAIL
89 -> PASS
*/

//loop through all exam scores
for (let i = 0; i < examScores.length; i++) {
    console.log(examScores[i]);
}

const passingScore = 50; 

for (let i = 0; i < examScores.length; i++) {
    if (examScores[i] >= passingScore) {
        console.log(examScores[i] + " -> PASS");
    } else {
        console.log(examScores[i] + " -> FAIL");
    }  
}
