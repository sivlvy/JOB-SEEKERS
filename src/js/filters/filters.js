import { getCategoryList } from '../services/food-api';
// import { cardMarkup } from '../home-content/main-products/main-projects';
// import { getCurrentProducts } from '../services/food-api';
import SlimSelect from 'slim-select';
import { cardMarkup } from '../home-content/main-products/main-projects';
import { getCurrentProducts } from '../services/food-api';
export { changingLimit } 

const refs = {
	selectEl: document.querySelector('.filterts-categories-select'),
	cardProduct: document.querySelector('.product-list'),
};



const STORAGE_FILTERS_KEY = 'filters-parameters';

export let filters = {
export let filters = {
	keyword: '',
	category: '',
	page: 1,
	limit: 6,
};

changingLimit();

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

export function changingLimit() {
	if (window.innerWidth >= 768 && window.innerWidth < 1440) {
		filters.limit = 8;
	} else if (window.innerWidth >= 1440) {
		filters.limit = 9;
	}
	return filters.limit;
}
