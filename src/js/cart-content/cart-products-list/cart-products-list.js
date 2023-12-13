import { getProductById } from '../../services/food-api';
import { basketProductMarkUp } from '../../home-content/main-products/main-projects';

export async function onAddButtonClick(event) {
	const productID = event.currentTarget.dataset.id;
	// console.log(productID);

	try {
		const product = await getProductById(productID);

		const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
		// console.log(savedProducts);

		savedProducts.push(product);
		localStorage.setItem('products', JSON.stringify(savedProducts));

		// *********************************

		const cartValue = document.querySelector('.js-cart-counter');
		cartValue.textContent = savedProducts.length;

		// *********************************

		// const cardCount = document.querySelector('.cart__item-count');
		// console.log(cardCount)

		// const cardProductBasketList = document.querySelector('.js-cart-products');
		// 	console.log(cardProductBasketList)
		// cardProductBasketList.insertAdjacentHTML(
		// 	'beforeend',
		// 	basketProductMarkUp(product)
		// );

		const addButtons = document.querySelectorAll('.add-button');

		for (const addButton of addButtons) {
			const buttonID = addButton.dataset.id;

			if (buttonID === productID) {
				addButton.removeEventListener('click', onAddButtonClick);
				const useElement = addButton.querySelector('svg use');
				addButton.style.backgroundColor = '#6D8434';

				useElement.setAttribute('href', './icons.svg#icon-cart-success');
			}
		}
	} catch (err) {
		throw new Error(err);
	}
}

// document.addEventListener('DOMContentLoaded', function () {
// 	renderCart();
// });

// function renderCart() {
// 	const cartContainer = document.getElementById('cartContainer');
// 	cartContainer.innerHTML = '';

// 	const productsInCart = getProductsFromLocalStorage();

// 	if (productsInCart.length === 0) {
// 		cartContainer.innerHTML = '<p>Your basket is empty...</p>';
// 	} else {
// 		productsInCart.forEach(product => {
// 			const productCard = createProductCard(product);
// 			cartContainer.appendChild(productCard);
// 		});
// 	}
// }

// function createProductCard(product) {
// 	const card = document.createElement('div');
// 	card.classList.add('product-card');

// 	const image = document.createElement('img');
// 	image.src = product.image;
// 	image.alt = product.name;
// 	image.classList.add('product-image');

// 	const name = document.createElement('p');
// 	name.innerText = `${product.name}`;

// 	const category = document.createElement('p');
// 	category.innerText = `Category: ${product.category}`;

// 	const size = document.createElement('p');
// 	size.innerText = `Size: ${product.size}`;

// 	const cost = document.createElement('p');
// 	cost.innerText = `$${product.cost}`;

// 	const deleteButton = document.createElement('button');
// 	deleteButton.innerHTML = '&#10006;'; // Close (X) icon
// 	deleteButton.classList.add('delete-button');
// 	deleteButton.onclick = function () {
// 		deleteProductFromCart(product.id);
// 	};

// 	card.appendChild(image);
// 	card.appendChild(name);
// 	card.appendChild(category);
// 	card.appendChild(size);
// 	card.appendChild(cost);
// 	card.appendChild(deleteButton);

// 	return card;
// }

// function getProductsFromLocalStorage() {
// 	// Retrieve products from localStorage
// 	// Replace this with your actual localStorage logic
// 	return [];
// }

// function deleteProductFromCart(productId) {
// 	// Delete product from localStorage
// 	// Replace this with your actual localStorage logic

// 	// After deleting, re-render the cart
// 	renderCart();
// }

// function deleteAll() {
// 	// Delete all products from localStorage
// 	// Replace this with your actual localStorage logic

// 	// After deleting, re-render the cart
// 	renderCart();
// }
