/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbod = document.querySelector('tbody');
  tbod.innerHTML = '';

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbod = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart

  for (let cartItem of cart.items) {
    let row = document.createElement('tr');
    tbod.appendChild(row);
    
    let deleteItem = document.createElement('td');
    deleteItem.innerHTML = `<a id='${cartItem.product}' href="#">X</a>`;
    row.appendChild(deleteItem);

    let quantity = document.createElement('td');
    quantity.innerText = cartItem.quantity;
    row.appendChild(quantity);

    let item = document.createElement('td');
    item.innerHTML = cartItem.product;
    row.appendChild(item);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  let deleteLink = document.querySelectorAll('tbody a');
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    let id = event.target.id;
    console.log(id);
    for (let cartItem of cart.items) {
      if (cartItem.product === id) {
        console.log(cartItem.product);
        console.log(cartItem);
        cart.removeItem(cartItem);
      }
    }
  
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
