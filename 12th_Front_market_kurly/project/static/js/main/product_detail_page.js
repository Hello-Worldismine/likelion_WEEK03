let quantity = 1;
const unitPrice = parseInt(document.getElementById('unit-price').dataset.unitPrice);
const quantityDisplay = document.getElementById('quantity');
const totalPriceDisplay = document.getElementById('total-price');

function updateTotal() {
  totalPriceDisplay.innerText = (quantity * unitPrice).toLocaleString();
}

function increaseQuantity() {
  quantity += 1;
  quantityDisplay.innerText = quantity;
  updateTotal();
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity -= 1;
    quantityDisplay.innerText = quantity;
    updateTotal();
  }
}
