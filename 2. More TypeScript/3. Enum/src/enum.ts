


// Enum = কিছু fixed value-কে meaningful নাম দেওয়া।

enum Role {
    Developer,
    Manager,
    HR
}
// Developer → 0
// Manager   → 1
// HR        → 2
let employeeRole: Role = Role.Developer;
console.log(employeeRole);



// We can assign value also inside enum
enum userRole {
    Developer = "DEVELOPER",
    Manager = "MANAGER",
    HR = "HR"
}

let role: userRole = userRole.HR;
// let role = UserRole.HR; ts infer kore nibe role er type
console.log(role);




// interface and enum both used in object

enum Department {
    IT = "IT",
    HR = "HR",
    Finance = "Finance"
}

interface Employee {
    id: number;
    name: string;
    department: Department;   // এখানে department-এর type interface-এর মধ্যে দেওয়া হয়েছে।
    salary: number;
}

const employee: Employee = {
    id: 101,
    name: "Sadat",
    department: Department.IT,
    salary: 20000
};

console.log(employee);



