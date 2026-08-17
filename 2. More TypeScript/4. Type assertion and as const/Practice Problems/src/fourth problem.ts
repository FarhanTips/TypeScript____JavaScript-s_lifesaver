


type PaymentMethod = "cash" | "card" | "mobile";
// Interface cannot directly represent a union of string literal types.
// interface PaymentMethod = "cash" | "card" | "mobile"; // ❌

interface Order {
    id: number;
    method: PaymentMethod;
}

let method: PaymentMethod = "card";

const order1 : Order = {
    id: 1,
    method: method
}

console.log(order1);
