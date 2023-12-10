import { getAllProducts } from '../services/food-api';

const form = document.getElementById('filters-search-form');
const searchBtn = document.querySelector('.filters-search-button');

const searchQuery = form.value;

searchBtn.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
}
getAllProducts().then(({ results }) => console.log(results));
<<<<<<< Updated upstream
import { getCategoryList } from '../services/food-api';
import { cardMarkup } from '../home-content/main-products/main-projects';
import { getCurrentProducts } from '../services/food-api';
import SlimSelect from 'slim-select';

const refs = {
	selectEl: document.querySelector('.filterts-categories-select'),
	form: document.getElementById('filters-search-form'),
	input: document.querySelector('.filters-search-input'),
	btn: document.querySelector('.filters-search-button'),
};

// getCurrentProducts()
// 	.then(data => renderProductsForValue(data))
// 	.catch(err => console.log(err));

async function renderProductsForValue(event) {
	event.preventDefault();
	const searchQuery = refs.input.value;

	try {
		const data = await getCurrentProducts({
			value: searchQuery,
			category: refs.selectEl.value,
			page: 1,
			limit: 6,
			sortBy: 'relevant',
		});

		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

refs.form.addEventListener('submit', renderProductsForValue);

// *********************************************\\

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

function changingLimit() {
	if (window.innerWidth >= 768 && window.innerWidth < 1440) {
		filters.limit = 8;
	} else if (window.innerWidth >= 1440) {
		filters.limit = 9;
	}
	return filters.limit;
}
=======
import axios from 'axios';
import { getAllProducts } from '../services/food-api';
import { getCurrentProducts } from '../services/food-api';

// const input = document.querySelector('.filters-search-input');
// const searchBtn = document.querySelector('.filters-search-button');

// let value = input.value;
// let page = 1;
// let limit = 6;

// searchBtn.addEventListener('submit', onSubmit);

// function onSubmit(e) {}
// // getAllProducts().then(({ results }) => console.log(results));

// getCurrentProducts({ value, page, limit }).then(data => {
// 	const products = data.results;
// 	console.log(products);
// });

const searchForm = document.getElementById('filters-search-form');

searchForm.addEventListener('submit', async event => {
	event.preventDefault();

	const searchValue = event.target.elements.searchQuery.value;

	const products = await getCurrentProducts({
		name: searchValue,
		page: 1,
		limit: 6,
	});

	console.log(products);
});
>>>>>>> Stashed changes
