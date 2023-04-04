// const quantities = document.querySelectorAll("input[type='number']");

// // Calculate item total and update the total order price
// function calculateTotal() {
//   let total = 0;
//   for (let i = 0; i < quantities.length; i++) {
//     const quantity = quantities[i].value;
//     const price = quantities[i].parentNode.nextElementSibling.textContent.slice(1);
//     const itemTotal = quantity * price;
//     quantities[i].parentNode.nextElementSibling.nextElementSibling.textContent = `{itemTotal}`;
//     total += itemTotal;
//   }
//   document.getElementById("total").textContent = `ugx{total}`;
// }

// // Update item total and total order price when quantity is changed
// quantities.forEach(quantity => {
//   quantity.addEventListener("change", calculateTotal);
// });

// // Calculate item totals and total order price on page load
// calculateTotal();
