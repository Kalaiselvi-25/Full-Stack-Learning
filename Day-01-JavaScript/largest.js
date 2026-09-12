let numbers = [20, 25, 31, 15, 1];
let largest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log("Largest:", largest);
console.log("Smallest:", smallest);