"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let value = "100";
// Safe cast to number
let num = Number(value);
console.log(num + 10); // 110
// Double assertion — risky
// let risky = value as unknown as number;
// This is risky because TypeScript is forced to treat
// the value as a number even if it is actually a string.
//# sourceMappingURL=second%20problem.js.map