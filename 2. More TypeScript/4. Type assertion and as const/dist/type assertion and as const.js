"use strict";
// Type Assertion — as
// Type assertion means: “TypeScript, I know this value better than you do. Treat it as this type.”
Object.defineProperty(exports, "__esModule", { value: true });
let value;
// value.toUpperCase();  // this will throw an error because type is unknown.
let text = value;
// text.toUpperCase();
// value as string tells TypeScript to treat value as a string. It doesn't convert the value. যদি value তে string না আসে তাইলে error দিবে। তাই confident হলেই এটা ব্যবহার করা উচিৎ।
let data;
let userData = data;
// userData.name; // We can do this using type assertion.
// as const means: “Make this value as specific and readonly as possible.”
// without as const
const kamrul = {
    name: "Kamrul"
};
kamrul.name = "Bogda Kamrul";
console.log(kamrul.name);
const masum = {
    name: "Masum"
};
// masum.name = "Masum Khan";  // will throw an error.
console.log(masum.name);
//# sourceMappingURL=type%20assertion%20and%20as%20const.js.map