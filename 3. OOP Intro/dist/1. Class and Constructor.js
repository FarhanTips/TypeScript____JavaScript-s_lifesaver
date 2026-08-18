"use strict";
/**
 * name
 * email
 * age
 * marks
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    email;
    age;
    marks;
    // Constructor → special method
    constructor(name, email, age, marks) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
    }
}
// Instantiate
// Instance
const rafi = new Student("Rafi", "rafi@gmail.com", 16, "100");
const sadia = new Student("Sadia", "sadia@gmail.com", 17, 200);
console.log(sadia);
//# sourceMappingURL=1.%20Class%20and%20Constructor.js.map