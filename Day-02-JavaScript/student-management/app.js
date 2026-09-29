// ========== STUDENT ARRAY ==========
// Load students from localStorage or start with empty array
let students = JSON.parse(localStorage.getItem("students")) || [];

// ========== GRADE CALCULATION ==========
function getGrade(mark) {
    if (mark >= 90) return "A+";
    if (mark >= 80) return "A";
    if (mark >= 70) return "B";
    if (mark >= 60) return "C";
    if (mark >= 50) return "D";
    return "F";
}

// ========== SAVE TO LOCAL STORAGE ==========
function saveToLocalStorage() {
    localStorage.setItem("students", JSON.stringify(students));
}

// ========== UPDATE DASHBOARD ==========
function updateDashboard() {
    const total = students.length;
    document.getElementById("totalStudents").textContent = total;

    if (total === 0) {
        document.getElementById("avgMark").textContent = 0;
        document.getElementById("highestMark").textContent = 0;
        document.getElementById("lowestMark").textContent = 0;
        return;
    }

    // Calculate average
    let sum = 0;
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].mark;
    }
    const average = (sum / total).toFixed(1);
    document.getElementById("avgMark").textContent = average;

    // Highest mark
    let highest = students[0].mark;
    for (let i = 1; i < students.length; i++) {
        if (students[i].mark > highest) {
            highest = students[i].mark;
        }
    }
    document.getElementById("highestMark").textContent = highest;

    // Lowest mark
    let lowest = students[0].mark;
    for (let i = 1; i < students.length; i++) {
        if (students[i].mark < lowest) {
            lowest = students[i].mark;
        }
    }
    document.getElementById("lowestMark").textContent = lowest;
}

// ========== DISPLAY STUDENTS ==========
function displayStudents(studentList) {
    const tbody = document.getElementById("studentTableBody");
    tbody.innerHTML = ""; // Clear previous rows

    if (studentList.length === 0) {
        tbody.innerHTML = "<tr><td colspan='7' style='text-align:center;'>No students found</td></tr>";
        return;
    }

    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.mark}</td>
            <td>${student.grade}</td>
            <td>
                <button class="btn-delete" onclick="deleteStudent(${student.id})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    }
}

// ========== VALIDATION ==========
function validateForm(name, email, age, department, mark) {
    let isValid = true;

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("departmentError").textContent = "";
    document.getElementById("markError").textContent = "";

    // Name required
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }

    // Email validation (simple check)
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        isValid = false;
    }

    // Age validation
    if (age === "" || isNaN(age)) {
        document.getElementById("ageError").textContent = "Age is required";
        isValid = false;
    } else if (age < 1 || age > 100) {
        document.getElementById("ageError").textContent = "Enter a valid age (1-100)";
        isValid = false;
    }

    // Department required
    if (department === "") {
        document.getElementById("departmentError").textContent = "Department is required";
        isValid = false;
    }

    // Mark validation
    if (mark === "" || isNaN(mark)) {
        document.getElementById("markError").textContent = "Mark is required";
        isValid = false;
    } else if (mark < 0 || mark > 100) {
        document.getElementById("markError").textContent = "Mark must be between 0 and 100";
        isValid = false;
    }

    return isValid;
}

// ========== ADD STUDENT ==========
document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const department = document.getElementById("department").value.trim();
    const mark = document.getElementById("mark").value.trim();

    // Validate
    if (!validateForm(name, email, age, department, mark)) {
        return; // Stop if validation fails
    }

    // Create student object
    const student = {
        id: Date.now(), // Unique id using current time
        name: name,
        email: email,
        age: Number(age),
        department: department,
        mark: Number(mark),
        grade: getGrade(Number(mark))
    };

    // Add to array
    students.push(student);

    // Save and update UI
    saveToLocalStorage();
    updateDashboard();
    displayStudents(students);

    // Clear form
    document.getElementById("studentForm").reset();
});

// ========== DELETE STUDENT ==========
function deleteStudent(id) {
    // Filter out the student with matching id
    students = students.filter(function (student) {
        return student.id !== id;
    });

    saveToLocalStorage();
    updateDashboard();
    displayStudents(students);
}

// ========== SEARCH ==========
document.getElementById("searchInput").addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();

    if (searchText === "") {
        displayStudents(students); // Show all if search is empty
        return;
    }

    // Filter students
    const filtered = students.filter(function (student) {
        return (
            student.name.toLowerCase().includes(searchText) ||
            student.email.toLowerCase().includes(searchText) ||
            student.department.toLowerCase().includes(searchText)
        );
    });

    displayStudents(filtered);
});

// ========== ON PAGE LOAD ==========
// Show existing students and update dashboard when page opens
updateDashboard();
displayStudents(students);