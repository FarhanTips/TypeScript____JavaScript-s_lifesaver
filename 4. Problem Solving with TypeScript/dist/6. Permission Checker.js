"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canEdit(role) {
    return role === "admin" || role === "editor" ? true : false;
}
console.log(canEdit("admin"));
// true 
console.log(canEdit("editor"));
// true 
console.log(canEdit("viewer"));
// false 
//# sourceMappingURL=6.%20Permission%20Checker.js.map