let studentName = "Student1";

let mark1 = 85;
let mark2 = 78;
let mark3 = 92;
let mark4 = 88;
let mark5 = 75;
let total = mark1 + mark2 + mark3 + mark4 + mark5;
let percentage = total / 5;
let grade;
if (percentage >= 90) {
    grade = "A";
} else if (percentage >= 80) {
    grade = "B";
} else if (percentage >= 70) {
    grade = "C";
} else if (percentage >= 60) {
    grade = "D";
} else {
    grade = "F";
}
let result;
if (mark1 >= 40 && mark2 >= 40 && mark3 >= 40 && mark4 >= 40 && mark5 >= 40) {
    result = "Pass";
} else {
    result = "Fail";
}
console.log("Student Name:", studentName);
console.log("Total:", total);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);
console.log("Result:", result);