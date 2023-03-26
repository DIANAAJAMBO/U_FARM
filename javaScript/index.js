// Selectors
const orderForm = document.getElementById("order-form");
const orderTableBody = document.querySelector("#order-table tbody");
const totalPriceEl = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

// State
let items = [];

// Event Listeners
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const itemName = document.getElementById("item-name").value;
  const itemPrice = parseFloat(document.getElementById("item-price").value);
  const itemQuantity = parseInt(document.getElementById("item-quantity").value);
  addItem(itemName, itemPrice, itemQuantity);
  orderForm.reset();
});

orderTableBody.addEventListener("change", (e) => {
  const itemIndex = parseInt(e.target.dataset.itemIndex);
  const newQuantity = parseInt(e.target.value);
  changeQuantity(itemIndex, newQuantity);
});

orderTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item-btn")) {
    const itemIndex = parseInt(e.target.dataset.itemIndex);
    removeItem(itemIndex);
  }
});

// Functions
function addItem(name, price, quantity) {
  const item = {
    name,
    price,
    quantity,
    totalPrice: price * quantity,
  };
  items.push(item);
  renderItems();
  update
}