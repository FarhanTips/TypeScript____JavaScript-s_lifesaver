


// ==================== UNION TYPE ====================

// Union (|) means a variable can have MORE THAN ONE type.
// Here, id can be either number OR string.

let id: number | string;

id = 101;        //  number
id = "ABC101";   //  string
// id = true;    // ❌ boolean is not allowed


// ==================== NULL ====================

// null means: "there is intentionally NO value."
// We use | null when a variable can contain a value OR null.

let username: string | null = "Farhan";

username = null;      //  no value
username = "Akbor";   //  string


// ==================== UNDEFINED ====================

// undefined means: a value has NOT been assigned
// or the value is currently unavailable.

let age: number | undefined;

age = 24;         
age = undefined;  


// ==================== NEVER ====================

// never means a function NEVER successfully returns a value.
// Usually used when a function always throws an error
// or runs forever.

function throwError(message: string): never {
    throw new Error(message);
}

// This function never reaches a normal return statement.


// ==================== ANY ====================

// any means TypeScript will NOT properly check the type.
// The variable can contain almost anything.

let value: any = 10;

value = "Farhan"; 
value = true;     
value = [];       
value = {};       

// ⚠️ Avoid any when possible because it removes TypeScript's type safety.


// ==================== UNKNOWN ====================

// unknown means: "I don't know the type yet."
// It can store ANY type of value,
// BUT TypeScript does NOT allow us to use the value directly
// until we check its type.

let value2: unknown;

value2 = 10;        
value2 = "Farhan";  
value2 = true;     


// We CANNOT directly use an unknown value
// because TypeScript doesn't know its actual type.

// value.toUpperCase();  // ❌ Error


// We must CHECK the type first.
// After checking, TypeScript allows us to use it safely.

if (typeof value2 === "string") {
    value2.toUpperCase();  // TypeScript now knows value is string
}

if (typeof value2 === "number") {
    value2.toFixed(2);     // TypeScript now knows value is number
}



// let a = "Farhan"
// → TS নিজে type বের করে
// → string


// let b: unknown = "Farhan". "Farhan" assign করা আছে → TypeScript তো দেখতেই পাচ্ছে এটা string → তাহলে toFixed() কেন আটকাচ্ছে? কারণ unknown explicitly বলে দেয়: "এই variable-এর value-এর type সম্পর্কে এখন safe ধরে নিও না."
// → তুমি TS-কে বলেছো "type unknown"
// → TS ধরে নেবে না যে এটা string
// → আগে check করতে হবে


// unknown-এর মতো check লাগে যখন variable-এর type string | null, অর্থাৎ value হয় string, নয়তো null or anything else.





// unknown → আগে type check করো
// null | something → null check করো
// undefined | something → undefined check করো
// শুধু string, number, boolean ইত্যাদি → সাধারণত সরাসরি ব্যবহার করা যায়।