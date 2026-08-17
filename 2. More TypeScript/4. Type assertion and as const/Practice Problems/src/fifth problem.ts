


function getLastElement<T>(arr: T[]):T | undefined{
    return arr[arr.length-1];
}

console.log(getLastElement([10, 20, 30]));       // 30
console.log(getLastElement(["a", "b", "c"]));    // c
console.log(getLastElement([true, false]));      // false

// return type T because "function T type-এর array নেবে এবং সেই array থেকে T type-এর একটা element return করবে।"


