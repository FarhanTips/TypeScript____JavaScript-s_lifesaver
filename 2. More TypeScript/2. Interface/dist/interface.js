"use strict";
// object-এর জন্য interface ব্যবহার করা ভালো।
Object.defineProperty(exports, "__esModule", { value: true });
const elon = {
    name: "Elon",
    id: 101,
    department: "HR",
    salary: 20000
};
const bill = {
    name: "Bill",
    id: 1012,
    department: "CEO"
};
const team = [elon, bill, {
        name: "Farhan",
        id: 12,
        department: "Software",
        salary: 12000050
    }];
function printEmploueeDetails(employee) {
    console.log(employee.name);
    console.log(employee.id);
    console.log(employee.department);
}
printEmploueeDetails(elon);
printEmploueeDetails({ name: "Montu", id: 3, department: "Search" });
// destructuring directly in the parameter
function displayEmploueeDetails({ name, department }) {
    console.log(name);
    console.log(department);
}
displayEmploueeDetails(bill);
displayEmploueeDetails({ name: "Banti", id: 37, department: "Supply Chain" });
// So an Employee object must have:
// name
// id
// department
// salary is optional
// destructure = From the Employee object, I only want to extract name and department. It doesn't mean that id is no longer required.
// Even though you don't use id inside the displayEmploueeDetails() function, TypeScript still requires the id property because the parameter is typed as Employee.
// We can think like Give me an Employee, but inside this function I only need its name and department.
//# sourceMappingURL=interface.js.map