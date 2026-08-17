"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Placed"] = "PLACED";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Cancelled"] = "CANCELLED";
})(OrderStatus || (OrderStatus = {}));
function showStatus(status) {
    console.log(`Current status: ${status}`);
}
showStatus(OrderStatus.Shipped);
// showStatus("SHIPPED"); will throw an error. কারণ OrderStatus হলো enum type, আর "SHIPPED" হলো string literal type।
//# sourceMappingURL=eigth%20problem.js.map