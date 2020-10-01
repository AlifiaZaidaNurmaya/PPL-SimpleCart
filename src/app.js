import { 
  incrementQty, 
  decrementQty,
  recalculateSubtotal, 
  absoluteQty,
  grandTotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const price = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');
const code = document.querySelector('#code');
const confirmButton = document.querySelector('#confirmButton');

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subtotal.textContent = `Rp. ${grandTotal(price.value, qtyInput.value, code.value)}`;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  qtyInput.value = absoluteQty(qtyInput.value);
  subtotal.textContent = `Rp. ${grandTotal(price.value, qtyInput.value, code.value)}`;
});

confirmButton.addEventListener('click', () => {
  subtotal.textContent = `Rp. ${grandTotal(price.value, qtyInput.value, code.value)}`;
});

price.addEventListener('click', () => {
  subtotal.textContent = `Rp. ${grandTotal(price.value, qtyInput.value, code.value)}`;
});

qtyInput.addEventListener('click', () => {
  subtotal.textContent = `Rp. ${grandTotal(price.value, qtyInput.value, code.value)}`;
});

code.addEventListener('click', () => {
  subtotal.textContent = `Rp. ${grandTotal(price.value, qtyInput.value, code.value)}`;
});