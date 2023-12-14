export { cardMarkup };
import { getProductById } from '../../services/food-api';
import { saveToLS, loadFromLS } from '../../services/helpers';
import icons from '/icons.svg';
// const mainproduct = document.querySelector('.card-wrapper');
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
			 <button class="add-button" type="button" data-id="${_id}" id="tocart">
			 <svg class="icon-button"width="18" height="18" id="tocart">
             <use href="${icons}#icon-cart-mob" class="svg-change" id="tocart">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`
		)

		.join('');
}

// let savedProducts = [];

// export async function onAddButtonClick(event) {
// 	const productID = event.currentTarget.dataset.id;
// 	console.log(productID);

// 	const existingProducts = loadFromLS('products') || [];

// 	console.log(existingProducts);

// 	try {
// 		const product = await getProductById(productID);
// 		console.log(product);

// 		if (existingProducts.length === 0) {
// 				existingProducts.push(product);
// 				saveToLS('products', existingProducts);

// 		}
// 		else if (existingProducts.length !== 0) {
// 			existingProducts.map((existingProduct) => {

// 				console.log(existingProduct)
// 				const existingProductID = existingProduct.data._id;

// 					if (existingProductID !== productID) {
// 						existingProducts.push(product);
// 				saveToLS('products', existingProducts);
// 					})

// 				const addButtons = document.querySelectorAll('.add-button');
// 				console.log(addButtons)

// 				for (const addButton of addButtons) {
// 					const buttonID = addButton.dataset.id;

// 					if (buttonID === productID) {
// 						addButton.removeEventListener('click', onAddButtonClick);
// 						const useElement = addButton.querySelector('svg use');
// 						addButton.style.backgroundColor = '#6D8434';

// 						useElement.setAttribute('href', './icons.svg#icon-cart-success');
// 					}
// 				}

// 			}

// 			})

// 		}

// 		// 	existingProducts.push(product);

// 		// saveToLS('products', existingProducts);
// 		// console.log(existingProducts);

// 		// const cartValue = document.querySelector('.js-cart-counter');
// 		// cartValue.textContent = existingProducts.length;

// 		// const basketProductID = product.data._id;
// 		// console.log(basketProductID);
// 		// }

// 		// savedProducts.push(product);

// 		// cardProductBasketList.insertAdjacentHTML(
// 		// 	'beforeend',
// 		// 	basketProductMarkUp(result)
// 		// );
// 	} catch (err) {
// 		throw new Error(err);
// 	}

// 	// const savedProducts = loadFromLS('products')

// 	// const cardCount = document.querySelector('.cart__item-count');
// 	// console.log(cardCount)

// 	// const cardProductBasketList = document.querySelector('.js-cart-products');
// 	// 	console.log(cardProductBasketList)
// 	// cardProductBasketList.insertAdjacentHTML(
// 	// 	'beforeend',
// 	// 	basketProductMarkUp(product)
// 	// );
// }

export async function onAddButtonClick(event) {
	const productID = event.currentTarget.dataset.id;
	console.log(productID);

	const existingProducts = loadFromLS('products') || [];

	console.log(existingProducts);

	try {
		const product = await getProductById(productID);
		console.log(product);

		if (existingProducts.length === 0) {
			existingProducts.push(product);
			saveToLS('products', existingProducts);
		} else if (existingProducts.length !== 0) {
			existingProducts.map(existingProduct => {
				console.log(existingProduct);
				const existingProductID = existingProduct.data._id;

				if (existingProductID !== productID) {
					existingProducts.push(product);
					saveToLS('products', existingProducts);
				}

				const addButtons = document.querySelectorAll('.add-button');
				console.log(addButtons);

				for (const addButton of addButtons) {
					const buttonID = addButton.dataset.id;

					if (buttonID === productID) {
						addButton.removeEventListener('click', onAddButtonClick);
						const useElement = addButton.querySelector('svg use');
						addButton.style.backgroundColor = '#6D8434';

						useElement.setAttribute('href', './icons.svg#icon-cart-success');
					}
				}
			});
		}
	} catch (err) {
		throw new Error(err);
	}
}

export function basketProductMarkUp({
	img,
	name,
	category,
	size,
	popularity,
	_id,
	price,
}) {
	return;
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
            Category:<span class="product-more-info"> &nbsp;${category}</span>
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
            <button class="add-button" type="button" data-id="${_id}" id="tocart">
            <svg class="icon-button"width="18" height="18" id="tocart">
            <use href="/icons.svg#icon-cart-mob" id="tocart" >
            </use></svg>
            </button>
            
            </div>
            
            </li>`;
}
