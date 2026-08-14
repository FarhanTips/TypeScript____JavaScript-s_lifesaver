"use strict";
let age = 24; // খানে number মানে age-এ যেকোনো number থাকতে পারে: 24, 12, 2000 etc.
// কিন্তু literal type ব্যবহার করলে তুমি বলে দিতে পারো: "এই variable-এ শুধু এই নির্দিষ্ট value-টাই থাকতে পারবে।"
let mark = 65;
console.log(mark);
// let salary: 65 = 75;  tsc করলে error দিবে।
// String Literal
let side = "left";
let currentStatus;
currentStatus = "pending"; // ✅
currentStatus = "shipped"; // ✅
currentStatus = "delivered"; // ✅
console.log(currentStatus);
// currentStatus = "cancelled"; // ❌ will throw an error.
// Array literal
let fruits = ["apple", "banana", "apple"];
console.log(fruits);
// fruits.push("mango"); // ❌ Error. tsc করলে error দিবে।
// Object Literal
let user = {
    name: "Farhan",
    role: "admin",
    //   salary: 580000
};
// user.role = "guest"; // ❌ Error. tsc করলে error দিবে।
console.log(user);
