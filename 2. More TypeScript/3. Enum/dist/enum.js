"use strict";
// Enum = কিছু fixed value-কে meaningful নাম দেওয়া।
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Developer"] = 0] = "Developer";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["HR"] = 2] = "HR";
})(Role || (Role = {}));
// Developer → 0
// Manager   → 1
// HR        → 2
let employeeRole = Role.Developer;
console.log(employeeRole);
// We can assign value also inside enum
var userRole;
(function (userRole) {
    userRole["Developer"] = "DEVELOPER";
    userRole["Manager"] = "MANAGER";
    userRole["HR"] = "HR";
})(userRole || (userRole = {}));
let role = userRole.HR;
console.log(role);
// interface and enum both used in object
var Department;
(function (Department) {
    Department["IT"] = "IT";
    Department["HR"] = "HR";
    Department["Finance"] = "Finance";
})(Department || (Department = {}));
const employee = {
    id: 101,
    name: "Sadat",
    department: Department.IT,
    salary: 20000
};
console.log(employee);
//# sourceMappingURL=enum.js.map