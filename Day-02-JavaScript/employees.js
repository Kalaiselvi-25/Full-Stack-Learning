const employees = [
  { name: 'Alice', salary: 60000 },
  { name: 'Bob', salary: 45000 },
  { name: 'Charlie', salary: 75000 }
];
const highEarners = employees.filter(emp => emp.salary > 50000);
console.log(highEarners);
