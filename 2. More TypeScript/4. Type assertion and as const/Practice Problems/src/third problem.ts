


interface Product {
    title: string,
    price: number,
    inStock?: boolean
}

const product1: Product = {
    title: "Keyboard",
    price: 1700,
    inStock: true
}

const product2: Product = {
    title: "Mouse",
    price: 900
}

function display(obj: {}):void {
    console.log(obj);
}

display(product1);
display(product2);

