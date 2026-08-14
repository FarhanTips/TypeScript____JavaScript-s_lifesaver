

let district : string = "Noakhali";
let isAvailable : boolean = true;
let stock:number = 200; 
district = 145;      // district এর type deifne করা string. but, number assign করায় লাল দাগ দেখাচ্ছে এবং compile করলে error দিচ্ছে। কিন্তু, js file-এ convert হয়ে যায়। তাই সবসময় ts এর compile error মুক্ত করে js file run করা উচিৎ।
console.log(district);
console.log(isAvailable);
console.log(stock);