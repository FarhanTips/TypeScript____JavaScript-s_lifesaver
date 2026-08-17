"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let val = "Hello TypeScript";
let stringVal = val;
console.log(stringVal.length);
// console.log((val as string).length);
let stringVal2 = val; // এটাকে বলা হয় type assertion using angle-bracket syntax।
// console.log((<string>val).length);
console.log(stringVal2.length);
// both are same. Two different way to type assert.
//# sourceMappingURL=first%20problem.js.map