"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateCartTotal(products) {
    return products.reduce((acc, curr) => acc + curr.price, 0);
    // return products.reduce((acc, {price}):number => acc+price,0);     // Using Destructuring
}
console.log(calculateCartTotal([
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
]));
//# sourceMappingURL=4.%20Cart%20Calculator.js.map