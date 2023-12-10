import axios from 'axios';
import { getCurrentProducts } from '../../services/food-api.js';
// import { resolvePackageEntry } from 'vite';


const cardProduct = document.querySelector('.product-list');
const cardContainer = document.querySelector('.card-container');
const loaderEl = document.querySelector('.loader');


let value = ""; 
let category = ""; 
let page = 1;
let limit = 6;



if(cardContainer.offsetWidth >= 768 && cardContainer.offsetWidth < 1440){
	limit = 8;
	
	
} 
if (cardContainer.offsetWidth >= 1440) {
	limit = 9;
}



getCurrentProducts({value, category, page, limit})
	.then(data => {
		loaderEl.style.visibility = 'hidden';
		const products = data.results;
		
		// for(const product of products) {
		// 	const replaceSymbolsOfCategory = product.category;
		// 	const replacedCategory = replaceSymbolsOfCategory.replace('_', ' ');
		// 	console.log(replacedCategory)
		// }
		
		
		

	
	
		cardProduct.insertAdjacentHTML('afterbegin', cardMarkup(products));
	})
	.catch(error => {
		console.log(error);
	});

	export function cardMarkup(products) {

		// products.forEach(product => {
		// 	category = product.category.replace('_', ' ')
		// 	console.log(category)
			
		// });
		
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
			 <button class="add-button" type="button">
			 <svg class="icon-button"width="18" height="18">
             <use href="../../../icons.svg#icon-cart-mob" >
             </use></svg>
			 </button>
	
			 </div>
		   
		   </li>`
				)
		
			.join('')
			
	}
