

// array

let marks : number[] = [70, 75, 78, 97, 65];
console.log(marks);
marks.push(83);
console.log(marks);

// marks.push("hello");    will throw an error


let dishes : string[] = ["Beef Curry", "Chicken grill", "Malai Curry"];
console.log(dishes);




// object

let students : {name:string, age:number, isFail: boolean} = {
    name: "Farhan",
    age : 24,
    isFail: false
};

console.log(students);

// students.name = 65; tsc করতে গেলেই error দিবে।
// students.subject = "English"; tsc করতে গেলেই error দিবে। কারন type define এর সময় subject নামে কোনো propert define করা হয় নাই। This problem, will understand later. 
console.log(students);



// tuple or fixed array

let coordinates : [number, number] = [23.457, 43];
let entries : [string, number] = ["age", 24];

console.log(coordinates);
console.log(entries);