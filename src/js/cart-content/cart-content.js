import './cart-products-list/cart-products-list.js';
import './cart-order/cart-order.js';


const cartLink = document.getElementById('cartLink');
const addButton = document.getElementsByClassName('addButton');

let productsCount = 0;


function updateCartLink() {
  cartLink.textContent = `Cart (${productsCount})`;
}

addButton.addEventListener('click', function () {
  productsCount += 1;
  updateCartLink();
});
