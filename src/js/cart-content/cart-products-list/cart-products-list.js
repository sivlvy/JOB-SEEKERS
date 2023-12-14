import { getProductById } from '../../services/food-api';
import { basketProductMarkUp } from '../../home-content/main-products/main-projects';
import { loadFromLS } from '../../services/helpers';
import icons from '/icons.svg';

const cartContainer = document.querySelector('.cart-container');

const savedProductsBasket = loadFromLS('products');


const cartValueProducts = document.querySelectorAll('.js-cart-counter');


function updateCartCounter() {
	cartValueProducts.forEach(cartValue => {
		cartValue.textContent = savedProductsBasket.length;
	});
}

updateCartCounter();

for (const cartValueProduct of cartValueProducts) {
	cartValueProduct.textContent = savedProductsBasket.length;
}

const sectionProductList = document.querySelector('.cart-content-wrap');


if (savedProductsBasket.length === 0) {
	sectionProductList.style.display = 'none';
} else {
	cartContainer.style.display = 'none';
}

const cardProductBasketList = document.querySelector('.js-cart-products');

cardProductBasketList.insertAdjacentHTML(
	'beforeend',
	createBascetProductMarcup(savedProductsBasket)
);

const totalSummary = document.querySelector('.total__price');
export function createTotalNum() {
	const totalStorageNum = loadFromLS('products');
	const total = totalStorageNum.reduce((acc, el) => (acc += el.data.price), 0);
	totalSummary.textContent = `$${total}`;
}

createTotalNum();

const deleteAllBtn = document.querySelector('.cart__delete-button');

deleteAllBtn.addEventListener('click', onDeleteAllBtnClick);

export function onDeleteAllBtnClick() {
	localStorage.removeItem('products');

	localStorage.setItem('products', JSON.stringify([]));

	const test = JSON.parse(localStorage.getItem('products'));

	cartValueProducts.forEach(cartValue => {
		cartValue.textContent = test.length;
	});

	if (test.length === 0) {
		sectionProductList.style.display = 'none';
		cartContainer.style.display = 'block';
	}
}

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
