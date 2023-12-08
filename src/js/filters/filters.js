import { getCategoryList } from '../services/food-api';

const refs = {
	selectEl: document.querySelector('.filterts-categories-select'),
};
console.log(refs);

const STORAGE_KEY = 'search-parameters';
const savedFilters = JSON.parse(localStorage.getItem(STORAGE_KEY));
const defaultFilters = { keyword: null, category: null, page: 1, limit: 6 };
const initialFilters = savedFilters || defaultFilters;

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

	return;
}

refs.selectEl.addEventListener('change', onSelect);

function onSelect(evt) {
	const selectData = {
		category: evt.target.value,
	};
	console.log(selectData);
	saveFiltersToLocalStorage(selectData);
}

function saveFiltersToLocalStorage(filters) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(filters));
}

saveFiltersToLocalStorage(initialFilters);
