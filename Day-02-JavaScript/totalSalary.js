const employees = [
    { name: "Arun", salary: 45000 },
    { name: "Priya", salary: 60000 },
    { name: "Kavi", salary: 52000 },
    { name: "Ravi", salary: 40000 }
];
const totalSalary = employees.reduce(
    (sum, emp) => sum + emp.salary,0);
console.log("Total Salary:", totalSalary);