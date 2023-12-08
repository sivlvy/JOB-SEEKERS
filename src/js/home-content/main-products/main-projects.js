import axios from 'axios';
import { getCurrentProducts } from '../../services/food-api.js';


const cardProduct = document.querySelector('.card-container');


let value = ""; 
let category = ""; 
let page = 1;
let limit = 6;

getCurrentProducts({value, category, page, limit})
	.then(data => {
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
				`<div class="card-wrapper">
				<div class="image-wrapper">
				<img src="${img}" alt="${name}" loading="lazy" class="product-image" width="140" height="140" />
				</div>
       <div class="product-info">
         <p class="product-name">
           ${name}
         </p>
         <p  class="product-item">
           Category:<span class="product-more-info"> &nbsp;${category}</span>
         </p>
         <p class="product-item">
           Size:<span class="product-more-info"> &nbsp;${size}</span>
         </p>
         <p class="product-item">
           Popularity:<span class="product-more-info"> &nbsp;${popularity}</span>
         </p>
		 
       </div>
	   <div class="price-and-add">
		 <p class="product-price">$${price}</p>
		 <button class="add-button" type="button">
		 <svg class="icon-button"width="18" height="18">
		 <use href="../../../icons.svg#icon-cart-mob" >
		 </use></svg>
		 </button>

		 </div>
	   
	   </div>`
		)
		.join('');
}
