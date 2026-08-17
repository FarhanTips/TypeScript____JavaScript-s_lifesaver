


enum OrderStatus {
    Placed = "PLACED",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

function showStatus(status: OrderStatus): void {
    console.log(`Current status: ${status}`);
}

showStatus(OrderStatus.Shipped);
// showStatus("SHIPPED"); will throw an error. কারণ OrderStatus হলো enum type, আর "SHIPPED" হলো string literal type।

