


let age: number = 24; // খানে number মানে age-এ যেকোনো number থাকতে পারে: 24, 12, 2000 etc.

// কিন্তু literal type ব্যবহার করলে তুমি বলে দিতে পারো: "এই variable-এ শুধু এই নির্দিষ্ট value-টাই থাকতে পারবে।"


let mark: 65 = 65;
console.log(mark)
// let salary: 65 = 75;  tsc করলে error দিবে।




// String Literal

let side: "left" = "left";

let currentStatus: "pending" | "shipped" | "delivered";

currentStatus = "pending";   // ✅
currentStatus = "shipped";   // ✅
currentStatus = "delivered"; // ✅

console.log(currentStatus);
// currentStatus = "cancelled"; // ❌ will throw an error.




// Array literal
let fruits: ("apple" | "banana")[] = ["apple", "banana", "apple"];
console.log(fruits);
// fruits.push("mango"); // ❌ Error. tsc করলে error দিবে।






// Object Literal

let user: {
  name: string,
  role: "admin" | "user",
  salary?: 580000          // it is called optional. So, object-এ salary না থাকলেও error দিবে না কারণ salary কে optional (?) করা হয়েছে। কিন্তু, salary আনতে চাইলে fixed ---> 580000 দিতে হবে। 
} = {
  name: "Farhan",
  role: "admin",
//   salary: 580000
};

// user.role = "guest"; // ❌ Error. tsc করলে error দিবে।
console.log(user);