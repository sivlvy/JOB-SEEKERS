import { getCategoryList } from '../services/food-api';
import SlimSelect from 'slim-select';

const refs = {
	selectEl: document.querySelector('.filterts-categories-select'),
};

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

	return;
}

// ------------------LocalStorage--------------------

const STORAGE_FILTERS_KEY = 'filters-parameters';
const savedFilters = JSON.parse(localStorage.getItem(STORAGE_FILTERS_KEY));
const defaultFilters = new Map([
	['keyword', null],
	['category', null],
	['page', 1],
	['limit', 6],
]);
const initialFilters = savedFilters || defaultFilters;
let filtersData = new Map(initialFilters);

refs.selectEl.addEventListener('change', onSelect);

function onSelect(evt) {
	const [key, value] = ['category', evt.target.value];
	filtersData.set(key, value);

	const isAnyParameterSelected = [...filtersData.values()].some(
		value => value !== null && value !== undefined && value !== ''
	);

	if (!isAnyParameterSelected) {
		filtersData = new Map(defaultFilters);
	}

	console.log(Object.fromEntries(filtersData));
	saveFiltersToLocalStorage(Object.fromEntries(filtersData));
}

function saveFiltersToLocalStorage(filters) {
	localStorage.setItem(STORAGE_FILTERS_KEY, JSON.stringify(filters));
}

saveFiltersToLocalStorage(Object.fromEntries(initialFilters));
