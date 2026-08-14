


function add(num1:number, num2:number):number {
    return num1+num2;
}

const result:number = add(5,16);
console.log(result);


function calculate(numbers:number[], tax:number, accountant?:string):boolean{
    return true;
}

calculate([12,54], 2530, "Farhan"); // accountant is optional here, তাই "Farhan" না দিলেও হবে।



// Important: যদি function কিছু return না করে তাইলে, return type = void দিতে হবে।

