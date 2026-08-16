"use strict";
// Generics in TypeScript means: you can write code that works with different types without losing type safety.
Object.defineProperty(exports, "__esModule", { value: true });
const robinMark = {
    data: "GPA - 5"
};
const mobinMark = {
    data: 77
};
const lobinMark = {
    data: false
};
// Generic function
// without generics ---> this func only finds length of number data-typed array.
// function findLength(arr:number[]):number{
//     return arr.length;
// }
// console.log(findLength([2,3,4,5,6]));
// console.log(findLength(["Hello"])); it will throw an error because func expects number array.
// with generics  ---> this func can find length of any data-typed array.
function findLength(arr) {
    return arr.length;
}
console.log(findLength([2, 3, 4, 5, 6]));
console.log(findLength([2, 3, 4, 5, 6])); // <number> না দিলেও হয়। TypeScript infer করে পেয়ে যায়।
console.log(findLength(["Hello"]));
console.log(findLength([false, true, false]));
console.log(findLength([{ name: "Farhan", age: 25 }]));
// T = any type
// T[] = an array containing values of type T
// number = the function always returns a number
//# sourceMappingURL=Generics.js.map