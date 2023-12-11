import { getCurrentProducts } from '../../services/food-api.js';
import { filters, changingLimit } from '../../filters/filters.js';
export { cardMarkup };
import { getProductById } from '../../services/food-api.js';

const cardProduct = document.querySelector('.product-list');
const loaderEl = document.querySelector('.loader');

let newFilters = filters;

console.log(newFilters);
changingLimit(newFilters);

getCurrentProducts(newFilters)
	.then(data => {
		loaderEl.style.display = 'none';

		const products = data.results;
		console.log(products);

		cardProduct.insertAdjacentHTML('afterbegin', cardMarkup(products));

		const addButtons = document.querySelectorAll('.add-button');

		for (const addButton of addButtons) {
			addButton.addEventListener('click', onAddButtonClick);
		}
	})
	.catch(error => {
		console.log(error);
	});

function cardMarkup(products) {
	return products
		.map(
			({ img, name, category, size, popularity, _id, price }) =>
				`<li class="card-wrapper" data-id="${_id}">
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
			 <button class="add-button" type="button" data-id="${_id}">
			 <svg class="icon-button"width="18" height="18">
             <use href="/icons.svg#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`
		)

		.join('');
}

async function onAddButtonClick(event) {
	const productID = event.currentTarget.dataset.id;

	const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

	try {
		const product = await getProductById(productID);

		savedProducts.push(product);

		basketProductMarkUp(product);

		localStorage.setItem('products', JSON.stringify(savedProducts));

		const addButtons = document.querySelectorAll('.add-button');

		for (const addButton of addButtons) {
			const buttonID = addButton.dataset.id;

			if (buttonID === productID) {
				addButton.removeEventListener('click', onAddButtonClick);
				 const useElement = addButton.querySelector('svg use');
				 addButton.style.backgroundColor = '#6D8434'
				 console.log(useElement)
			
				useElement.setAttribute("href", "./icons.svg#icon-cart-success");
			}
		}
	} catch (err) {
		throw new Error(err);
	}
}

function basketProductMarkUp({
	img,
	name,
	category,
	size,
	popularity,
	_id,
	price,
}) {
	return `<li class="card-wrapper" data-id="${_id}">
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
            <button class="add-button" type="button" data-id="${_id}">
            <svg class="icon-button"width="18" height="18">
            <use href="/icons.svg#icon-cart-mob" >
            </use></svg>
            </button>
            
            </div>
            
            </li>`;
}
