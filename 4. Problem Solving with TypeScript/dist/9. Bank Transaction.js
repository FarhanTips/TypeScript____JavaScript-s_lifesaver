"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processTransaction(balance, transaction) {
    return transaction.type === "deposit" ? balance + transaction.amount : balance >= transaction.amount ? balance - transaction.amount : "insufficient balance";
}
console.log(processTransaction(5000, { type: "deposit", amount: 2000 }));
// 7000 
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 }));
// 3000 
// insufficient balance: 
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 }));
// 5000  (unchanged)  
// insufficient balance 
//# sourceMappingURL=9.%20Bank%20Transaction.js.map