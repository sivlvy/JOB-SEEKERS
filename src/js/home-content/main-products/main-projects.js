export { cardMarkup };
import { getProductById } from '../../services/food-api';
import { saveToLS, loadFromLS } from '../../services/helpers';
import icons from '/icons.svg';

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
             <use href="${icons}#icon-cart-mob" class="svg-change">
             </use>
			 </svg>
			 </button>
	
			 </div>
		   
		   </li>`
		)

		.join('');
}

// const cartContainerMain = document.querySelector('.js-cart-counter')

// export function loadFromLocalStorageMain() {
// 	const storageLength = loadFromLS('products');
// 	console.log(storageLength);
// 	// return cartContainerMain.textContent = storageLength.length

// }

// loadFromLocalStorageMain()
if (!localStorage.getItem('products')) {
	const defaultProducts = []; 
	localStorage.setItem('products', JSON.stringify(defaultProducts));
}


export async function onAddButtonClick(event) {
	const productID = event.currentTarget.dataset.id;
	
	// saveToLS('products', [])
	const existingProducts = loadFromLS('products') || [];

	console.log(existingProducts);

	try {
		const product = await getProductById(productID);
		// console.log(product);

		if (
			!existingProducts.some(
				existingProduct => existingProduct.data._id === productID
			)
		) {
			existingProducts.push(product);
			saveToLS('products', existingProducts);

			const addButtons = document.querySelectorAll('.add-button');
			// console.log(addButtons);

			addButtons.forEach(addButton => {
				const buttonID = addButton.dataset.id;

				if (buttonID === productID) {
					addButton.removeEventListener('click', onAddButtonClick);
					const useElement = addButton.querySelector('svg use');
					addButton.style.backgroundColor = '#6D8434';
					useElement.setAttribute('href', `${icons}#icon-cart-success`);
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
            <button class="add-button" type="button" data-id="${_id}">
            <svg class="icon-button"width="18" height="18">
            <use href="/icons.svg#icon-cart-mob" >
            </use></svg>
            </button>
            
            </div>
            
            </li>`;
}
