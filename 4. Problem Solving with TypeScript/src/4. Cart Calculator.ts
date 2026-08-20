


interface Product{
    name: string;
    price: number;
}

function calculateCartTotal(products: Product[]): number {
    return products.reduce((acc,curr):number => acc+curr.price,0);
    // return products.reduce((acc, {price}):number => acc+price,0);     // Using Destructuring
}


console.log(calculateCartTotal([
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
])
);
