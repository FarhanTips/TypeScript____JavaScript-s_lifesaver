


const getLargerName = (name1:string, name2:string):string =>{
    if (name1.length > name2.length){
        return name1;
    }
    return name2;
};
// both are correct below
// const biggerName = getLargerName("Farhan", "Saumik");
const biggerName:string = getLargerName("Farhan", "Saumik");
console.log(biggerName);





// map funtion using arrow function

const marks : number[] = [73, 55, 99];

const doubles : number[] = marks.map(elem => elem*2); // এখানে extra করে elem-এর type দেয়া লাগবে না, কারণ TypeScript অনেক কিছু infer করতে পারে। TypeScript auto বুঝে যায় কারন marks একটা number-এর array।



// এখন প্রশ্ন হচ্ছে যে traditional function দিয়েও এটা করা যায়, তাইলে কেনো arrow function দিয়ে করলাম। map() এই problem টা AI কে দিয়ে বলো traditional function দিয়ে করে দিতে। দেখবে অনেক বড়ো code করা লাগে। তাই, arrow function use করা হয় যাতে code কম লিখা লাগে যা অনেক convenient।


