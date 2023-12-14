import { getCategoryList } from '../services/food-api';
import { saveToLS } from '../services/helpers';
import { updateProducts } from '../home-content/main-products/pagination';
import SlimSelect from 'slim-select';

const refs = {
	selectEl: document.querySelector('.filters-categories-select'),
	formEl: document.querySelector('.filters-form'),
};

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

refs.formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
	evt.preventDefault();
	filters.page = 1;
	filters.keyword = evt.currentTarget.elements.searchQuery.value
		.trim()
		.toLowerCase()
		.split(' ')
		.join(' ');
	saveToLS('filters-parameters', filters);
	updateProducts();
}

refs.selectEl.addEventListener('change', onSelect);

function onSelect(evt) {
	filters.category = evt.target.value;
	filters.page = 1;
	saveToLS('filters-parameters', filters);
	updateProducts();
}

export function changingLimit() {
	if (window.innerWidth >= 1440) {
		filters.limit = 9;
	} else if (window.innerWidth >= 768) {
		filters.limit = 8;
	} else {
		filters.limit = 6;
	}
	return filters.limit;
}
