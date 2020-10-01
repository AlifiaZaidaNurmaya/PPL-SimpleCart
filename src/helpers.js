const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function recalculateSubtotal(price, qty) {
    return price * qty;
}

function absoluteQty(qty) {
    return (parseInt(qty) < 0) ? 0 : qty;
}

function grandTotal(price, qty, code) {
    return recalculateSubtotal(price, qty) - discount(price, qty, code);
}

function discount(price, qty, code) {
    const subTotal = recalculateSubtotal(price, qty);
    switch (code) {
        case "KODE10":
            resultDiscount = subTotal * 0.10;
            break;
        case "KODE25":
            resultDiscount = subTotal * 0.25;
            break;
        case "KODE50":
            resultDiscount = subTotal * 0.50;
            break;
        case "KODE75":
            resultDiscount = subTotal * 0.75;
            break;
        default:
            resultDiscount = 0;
            break;
    }
    return resultDiscount;
}

module.exports = {
    incrementQty,
    decrementQty,
    recalculateSubtotal,
    absoluteQty,
    discount,
    grandTotal
};