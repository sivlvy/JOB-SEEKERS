
const cardProduct = document.querySelector('.card-container')

console.log(cardProduct)

const getProductList = async () => {
	const response = await fetch(
		'https://food-boutique.b.goit.study/api/products?page=1&limit=6'
	);
	const products = await response.json();
	return products;
};

getProductList()
	.then(data => {
		console.log(data);
		const products = data.results;
        cardProduct.insertAdjacentHTML('afterbegin', cardMarkup(products))
        
        
	})
	.catch(error => {
		console.log(error);
	});



function cardMarkup(products) {
	return products
		.map(
			({ img, name, category, size, popularity, price }) =>
				`<img src="${img}" alt="${name}" loading="lazy" class="product-image"/>
       <div class="product-info">
         <p>
           ${name}
         </p>
         <p>
           Category: ${category}
         </p>
         <p>
           Size: ${size}
         </p>
         <p>
           Populyrity: ${popularity}
         </p>
         <p>
         ${price}</p>
       </div>`
		)
		.join('');
}