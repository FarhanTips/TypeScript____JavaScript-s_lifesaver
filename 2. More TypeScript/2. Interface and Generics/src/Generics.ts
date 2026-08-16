


// Generics in TypeScript means: you can write code that works with different types without losing type safety. Generic = একই structure/code কে different types-এর সাথে reusable করা।


// Generic Interface
interface Mark<T> {
    data: T
}

const robinMark: Mark<string> = {
    data: "GPA - 5"
}
const mobinMark: Mark<number> = {
    data: 77
}
const lobinMark: Mark<boolean> = {
    data: false
}




// Generic function
// without generics ---> this func only finds length of number data-typed array.

// function findLength(arr:number[]):number{
//     return arr.length;
// }

// console.log(findLength([2,3,4,5,6]));
// console.log(findLength(["Hello"])); it will throw an error because func expects number array.


// with generics  ---> this func can find length of any data-typed array.

function findLength<T>(arr:T[]):number{
    return arr.length;
}

console.log(findLength<number>([2,3,4,5,6]));
console.log(findLength([2,3,4,5,6]));  // <number> না দিলেও হয়। TypeScript infer করে পেয়ে যায়।
console.log(findLength(["Hello"]));
console.log(findLength([false, true, false]));
console.log(findLength([{name: "Farhan",age: 25}]));

// T = any type
// T[] = an array containing values of type T
// number = the function always returns a number





