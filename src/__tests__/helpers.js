/*
    Gunakan file ini untuk membuat test case dengan Jest
*/
const {
    incrementQty,
    decrementQty,
    recalculateSubtotal,
    absoluteQty,
    discount,
    grandTotal
} = require('../helpers')

test('Qty 1 ditambah 1 harusnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Qty "1" ditambah 1 harusnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});

test('Qty 2 dikurang 1 harusnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('Subtotal dari 25000 dengan qty 2 adalah 50000', () => {
    expect(recalculateSubtotal(25000, 2)).toBe(50000);
});

test('Qty -1 maka jadi 0', () => {
    expect(absoluteQty(-1)).toBe(0);
});

test('Diskon kode KODE10 dari 25000 dengan qty 2 (total 50000) adalah 5000', () => {
    expect(discount(25000, 2, "KODE10")).toBe(5000);
});

test('Grand Total dari 25000 dengan qty 2 diskon KODE10 adalah 45000', () => {
    expect(grandTotal(25000, 2, "KODE10")).toBe(45000);
});