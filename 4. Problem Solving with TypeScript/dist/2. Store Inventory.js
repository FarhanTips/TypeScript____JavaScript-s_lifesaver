"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStockStatus(stock) {
    if (stock === 0) {
        return "Out of Stock";
    }
    else if (stock < 6) {
        return "Almost Sold Out";
    }
    else if (stock < 21) {
        return "Available";
    }
    return "In Stock";
}
console.log(getStockStatus(0));
// "Out of Stock"
console.log(getStockStatus(3));
// "Almost Sold Out"
console.log(getStockStatus(12));
// "Available"
console.log(getStockStatus(50));
// "In Stock"
// boundary values to double-check:
console.log(getStockStatus(5));
console.log(getStockStatus(6));
console.log(getStockStatus(20));
console.log(getStockStatus(21));
//# sourceMappingURL=2.%20Store%20Inventory.js.map