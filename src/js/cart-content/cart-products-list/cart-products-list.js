import { getProductById } from '../../services/food-api';
import { basketProductMarkUp } from '../../home-content/main-products/main-projects';
import { loadFromLS } from '../../services/helpers';
import icons from '/icons.svg';

const savedProductsBasket = loadFromLS('products');

const cartValue = document.querySelector('.js-cart-counter');
cartValue.textContent = savedProductsBasket.length;

console.log(savedProductsBasket);

const cardProductBasketList = document.querySelector('.js-cart-products');
console.log(cardProductBasketList);
cardProductBasketList.insertAdjacentHTML(
	'beforeend',
	createBascetProductMarcup(savedProductsBasket)
);

const cartContainer = document.querySelector('.cart-container');

export function loadFromLocalStorage() {
	const storageLength = loadFromLS('products');
	return storageLength.length >= 1
		? (cartContainer.style.display = 'none')
		: (cartContainer.style.display = 'block');
}

loadFromLocalStorage();

function createBascetProductMarcup(arr) {
	return arr
		.map(
			product =>
				`<li class="cart-item" data-id="${product.data._id}">
						<div class="cart-item-wrap">
							<div class="cart-img-container">
								<img
									class="cart-img"
									src="${product.data.img}"
									alt="${product.data.name}"
								/>
							</div>
							<div class="cart-img-text">
								<div class="cart-item-title-wrap">
									<h3 class="cart-item-title">${product.data.name}</h3>
									<button
										name="button"
										type="button"
										class="cart-btn-close"
										aria-label="Close modal window"
									>
										<svg width="18" height="18" class="cart-icon-close">
											<use href="${icons}#icon-icon-close"></use>
										</svg>
									</button>
								</div>

								<div class="cart-info-container">
									<p class="cart-info">
										Category:
										<span>${product.data.category.replaceAll('_', ' ')}</span>
									</p>
									<p class="cart-info cart-info-overflow">
										Size:
										<span>${product.data.size}</span>
									</p>
								</div>
								<h3 class="cart-info-price">${product.data.price}</h3>
							</div>
						</div>
					</li>`
		)
		.join('');
}
console.log(createBascetProductMarcup);

/****************************** */

// const ID = savedProductsBasket.map((savedProduct) => {
// console.log(savedProduct)

// })

// export async function onAddButtonClick(event) {
// 	const productID = event.currentTarget.dataset.id;
// 	console.log(productID);

// 	try {
// 		const product = await getProductById(productID);

//         const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
// 		console.log(savedProducts);

// 		savedProducts.push(product);
// 		localStorage.setItem('products', JSON.stringify(savedProducts));

// 		// const cardCount = document.querySelector('.cart__item-count');
//         // console.log(cardCount)

// 		// const cardProductBasketList = document.querySelector('.js-cart-products');
// 		// 	console.log(cardProductBasketList)
// 		// cardProductBasketList.insertAdjacentHTML(
// 		// 	'beforeend',
// 		// 	basketProductMarkUp(product)
// 		// );

// 		const addButtons = document.querySelectorAll('.add-button');

// 		for (const addButton of addButtons) {
// 			const buttonID = addButton.dataset.id;

// 			if (buttonID === productID) {
// 				addButton.removeEventListener('click', onAddButtonClick);
// 				const useElement = addButton.querySelector('svg use');
// 				addButton.style.backgroundColor = '#6D8434';

// 				useElement.setAttribute('href', './icons.svg#icon-cart-success');
// 			}
// 		}
// 	} catch (err) {
// 		throw new Error(err);
// 	}
// }

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
