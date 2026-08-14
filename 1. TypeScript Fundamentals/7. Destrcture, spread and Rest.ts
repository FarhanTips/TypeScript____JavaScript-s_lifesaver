

// Destructure
const student : {stuName:string, age: number, isFail:boolean}= {
    stuName:"Farhan",
    age: 24,
    isFail: false,
};

let {age, stuName} = student; // এখানে TypeScript age এবং stuName-এর type নিজে থেকেই infer করে। এখানে age বা stuName-এর আলাদা করে type দিতে হয় না। কারণ TypeScript student object-এর type দেখে destructured variableগুলোর type automatically infer করে নেয়.
// age → number
// stuName → string


console.log(age, stuName);




const numbers: number[] = [10, 20, 30, 40];

const [first, second] = numbers;   // এখানে TypeScript position অনুযায়ী type বুঝবে:
console.log(first, second);
// এখানে first এবং second-এর আলাদা করে type দিতে হয় না,
// কারণ TypeScript numbers array-এর type দেখে
// destructured variableগুলোর type automatically infer করে নেয়.
// first  → number
// second → number


const userInfo: [userName:string, userAge:number] = ["Farhan",24];

const [name_user, userAge] = userInfo;

// name_user --> string
// age --> number
// TypeScript array/tuple-এর type দেখে type infer করে।




// Rest operator

const device : {deviceName: string, model: string, price: number, isEmptyStock : boolean} = {
    deviceName: "Samsung",
    model: "A55",
    price: 350000,
    isEmptyStock : true
};

const {deviceName, ...deviceInfo} = device;
console.log(deviceName, deviceInfo);



// spread operator

const num1: number[] = [10,20,30];
const num2: number[] = [1,2,3];
const names:string[] = ["Farhan", "Akbor", "Khan"];
// const collect = [...num1, ...names];  This is also correct, TypeScript will automatically infer the type of collect variable.
const collect: (number | string)[] = [...num1, ...names];
const collect2: number[] = [...num2, 6,7,8];
console.log(collect);
console.log(collect2);


