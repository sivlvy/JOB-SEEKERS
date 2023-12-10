import { getCategoryList } from '../services/food-api';
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

	const filtersInstance = new Filters();

	console.log(filtersInstance);

	refs.selectEl.addEventListener('change', evt =>
		filtersInstance.searchOptionForLocalStorage({
			key: 'category',
			value: evt.target.value,
		})
	);
}

export class Filters {
	constructor() {
		this.STORAGE_FILTERS_KEY = 'filters-parameters';
		this.defaultFilters = new Map([
			['keyword', null],
			['category', null],
			['page', 1],
			['limit', 6],
		]);
		this.setDefaultFilters();
		this.saveFiltersToLocalStorage();
	}

	setDefaultFilters() {
		this.filtersData =
			JSON.parse(localStorage.getItem(this.STORAGE_FILTERS_KEY)) ||
			new Map(this.defaultFilters);
	}

	saveFiltersToLocalStorage() {
		localStorage.setItem(
			this.STORAGE_FILTERS_KEY,
			JSON.stringify([...this.filtersData])
		);
	}

	updateFilters({ key, value }) {
		if (this.filtersData.get(key) !== value) {
			this.filtersData.set(key, value);
			this.saveFiltersToLocalStorage();
		}
	}

	searchOptionForLocalStorage({ key, value }) {
		this.updateFilters({ key, value });
		console.log(Object.fromEntries([...this.filtersData]));
	}
}

console.log(Filters);
