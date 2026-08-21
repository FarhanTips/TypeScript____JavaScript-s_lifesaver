
interface Deposit {
    type: "deposit", 
    amount: number 
}

interface Withdrawal  {
    type: "withdraw", 
    amount: number 
}

function processTransaction(balance: number, transaction: Deposit | 
Withdrawal): number|string { 
    return transaction.type === "deposit" ? balance+transaction.amount : balance >= transaction.amount ? balance-transaction.amount : "insufficient balance";
} 



console.log(processTransaction(5000, { type: "deposit", amount: 2000 })); 
// 7000 
console.log(processTransaction(5000, { type: "withdraw", amount: 2000 })); 
// 3000 
// insufficient balance: 
console.log(processTransaction(5000, { type: "withdraw", amount: 7000 })); 
// 5000  (unchanged)  
// insufficient balance 
