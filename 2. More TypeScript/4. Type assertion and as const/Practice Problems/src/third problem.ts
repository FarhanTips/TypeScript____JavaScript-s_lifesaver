


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

function display(obj: Product):void {
    console.log(obj);
}

display(product1);
display(product2);
display({ title: "JI", price: 200 });



// Interface মানে এটা না: "শুধু Product নামে তৈরি করা object-ই এখানে পাঠানো যাবে". বরং interface বলে: "যে object-এর এই structure আছে, সেটা Product হিসেবে গ্রহণ করা যাবে।" তাই এটা Product interface-এর structure/shape satisfy করছে।

