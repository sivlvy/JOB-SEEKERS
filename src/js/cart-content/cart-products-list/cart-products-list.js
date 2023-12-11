import { getCurrentProducts } from '../../services/food-api';

import { onAddButtonClick } from '../../home-content/main-products/main-projects';

document.addEventListener("DOMContentLoaded", function () {
	console.log(document.querySelector('.js-cart-products'));
});

function createCartMarkup(products) {
	return products.map(({ name }) => `<div>${name}</div>`);
}
