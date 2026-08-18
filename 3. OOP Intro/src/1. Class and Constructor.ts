


/**
 * name
 * email
 * age 
 * marks
 */

class Student {
    name: string;     // We don't use const/let because name, email, marks and age are class properties, not standalone variables.
    email: string;
    age: number;
    marks: number;

    // Constructor → special method
    constructor(name: string, email: string, age: number, marks: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.marks = marks;
    }
}

// Instantiate
// Instance
const rafi = new Student("Rafi", "rafi@gmail.com", 16, 100);
const sadia = new Student("Sadia", "sadia@gmail.com", 17, 200);

console.log(sadia);


