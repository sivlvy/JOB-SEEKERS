import { getCategoryList } from '../services/food-api';
import SlimSelect from 'slim-select';

const refs = {
	selectEl: document.querySelector('.filterts-categories-select'),
};

class Filters {
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

export const filtersInstance = new Filters();

console.log(filtersInstance);

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
}

console.log(Filters);

refs.selectEl.addEventListener('change', onSelect);

function onSelect(evt) {
	filtersInstance.searchOptionForLocalStorage({
		key: 'category',
		value: evt.target.value,
	});
}

console.log(filtersInstance);
