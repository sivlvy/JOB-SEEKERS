import axios from 'axios';
import { getCurrentProducts } from '../../services/food-api.js';
// import { resolvePackageEntry } from 'vite';
// import { Filters } from '../../filters/filters.js';
export { cardMarkup }
import { filters, changingLimit } from '../../filters/filters.js';





const cardProduct = document.querySelector('.product-list');
const loaderEl = document.querySelector('.loader');
// const cardContainer = document.querySelector('.card-container')


let newFilters = filters;
console.log(newFilters)
changingLimit(newFilters)
console.log(newFilters)

// let filters = {
// 	keyword: '',
// 	category: '',
// 	page: 1,
// 	limit: 6,
// };

// changingLimit()
// if (window.innerWidth >= 768 && window.innerWidth < 1440) {
// 	limit = 8;
// } else if (window.innerWidth >= 1440) {
// 	limit = 9;
// }

// changingLimit()

// if (cardContainer.offsetWidth >= 768 && cardContainer.offsetWidth < 1440) {
// 	limit = 8;
// }
// if (cardContainer.offsetWidth >= 1440) {
// 	limit = 9;
// }

getCurrentProducts(newFilters)
	.then(data => {
		loaderEl.style.display = 'none';

		const products = data.results;

		cardProduct.insertAdjacentHTML('afterbegin', cardMarkup(products));
	})
	.catch(error => {
		console.log(error);
	});

function cardMarkup(products) {
	return products
		.map(
			({ img, name, category, size, popularity, price }) =>
				`<li class="card-wrapper">
					<div class="image-wrapper">
					<img src="${img}" alt="${name}" loading="lazy" class="product-image" width="140" height="140" />
					</div>
		   <div class="product-info">
			 <p class="product-name">
			   ${name}
			 </p>
			<div class ="product-items">
			<p  class="product-item">
			Category:<span class="product-more-info"> &nbsp;${category.replaceAll(
				'_',
				' '
			)}</span>
		  </p>
		  <p class="product-item">
			Size:<span class="product-more-info"> &nbsp;${size}</span>
		  </p>
		  <p class="product-item">
			Popularity:<span class="product-more-info"> &nbsp;${popularity}</span>
		  </p></div>
			 
		   </div>
		   <div class="price-and-add">
			 <p class="product-price">$${price}</p>
			 <button class="add-button" type="button">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" >
             </use></svg>
			 </button>
	
			 </div>
		   
		   </li>`
		)

		.join('');
}
