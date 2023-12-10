import { getCategoryList } from '../services/food-api';
// import { cardMarkup } from '../home-content/main-products/main-projects';
// import { getCurrentProducts } from '../services/food-api';
import SlimSelect from 'slim-select';
import { cardMarkup } from '../home-content/main-products/main-projects';
import { getCurrentProducts } from '../services/food-api';
import { getProductById } from '../services/food-api';

const refs = {
	selectEl: document.querySelector('.filterts-categories-select'),
	cardProduct: document.querySelector('.product-list'),
	form: document.getElementById('filters-search-form'),
	input: document.querySelector('.filters-search-input'),
	btn: document.querySelector('.filters-search-button'),
};

const STORAGE_FILTERS_KEY = 'filters-parameters';

export let filters = {
	keyword: '',
	category: '',
	page: 1,
	limit: 6,
};

// const cardProduct = document.querySelector('.product-list');

// ************************************\\

getCurrentProducts()
	.then(data => renderProductsForValue(data))
	.catch(err => console.log(err));

// **************************************\\

getCategoryList()
	.then(data => {
		renderSelectList(data);
		console.log(data);
	})
	.catch(err => console.log(err));

function renderSelectList(data) {
	const placeholderStr = `<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>`;

	refs.selectEl.insertAdjacentHTML('afterbegin', placeholderStr);

	const markupSelectList = data
		.map(elem => {
			return `<option value="${elem}">${elem.replaceAll('_', ' ')}</option>`;
		})
		.join('')
		.concat(`<option value="">Show All</option>`);

	refs.selectEl.insertAdjacentHTML('beforeend', markupSelectList);

	new SlimSelect({
		select: refs.selectEl,
		settings: {
			showSearch: false,
			searchHighlight: true,
		},
	});
}

changingLimit();

localStorage.setItem(STORAGE_FILTERS_KEY, JSON.stringify(filters));

// ******************************\\

refs.form.addEventListener('submit', renderProductsForValue);

function renderProductsForValue(event) {
	event.preventDefault();
	filters.keyword = refs.form.elements.searchQuery.value.trim();
	getCurrentProducts(filters).then(data => {
		const products = data.results;
		const matchingProducts = products.filter(product => {
			return product.name.toLowerCase().includes(filters.keyword.toLowerCase());
		});
		console.log(matchingProducts);
	});
}

// ****************************\\

refs.selectEl.addEventListener('change', onSelect);

function onSelect(evt) {
	filters.category = evt.target.value;
	renderProductList();
}

async function renderProductList() {
	localStorage.setItem(STORAGE_FILTERS_KEY, JSON.stringify(filters));
	try {
		const data = await getCurrentProducts(filters);
		refs.cardProduct.innerHTML = cardMarkup(data.results);
	} catch (err) {
		console.log(err);
	}
}

export function changingLimit() {
	if (window.innerWidth >= 768 && window.innerWidth < 1440) {
		filters.limit = 8;
	} else if (window.innerWidth >= 1440) {
		filters.limit = 9;
	}
	return filters.limit;
}
