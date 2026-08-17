


let val: unknown = "Hello TypeScript";
let stringVal = val as string;
console.log(stringVal.length)
// console.log((val as string).length);

let stringVal2 = <string>val;    // এটাকে বলা হয় type assertion using angle-bracket syntax।
// console.log((<string>val).length);
console.log(stringVal2.length)

// both are same. Two different way to type assert.

