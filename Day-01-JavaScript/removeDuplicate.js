let numbers = [10, 20, 10, 30, 20, 40, 30];
let uniqueNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}
console.log("Without duplicates:", uniqueNumbers);