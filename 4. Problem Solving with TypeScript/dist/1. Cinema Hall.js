"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTicketPrice(age) {
    if (age < 5) {
        return 0;
    }
    else if (age < 13) {
        return 100;
    }
    else if (age < 60) {
        return 200;
    }
    return 120;
}
console.log(getTicketPrice(3));
// 0
console.log(getTicketPrice(10));
// 100
console.log(getTicketPrice(25));
// 200
console.log(getTicketPrice(65));
// 120
//# sourceMappingURL=1.%20Cinema%20Hall.js.map