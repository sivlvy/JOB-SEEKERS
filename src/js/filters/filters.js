import { getAllProducts } from '../services/food-api';

const form = document.getElementById('filters-search-form');
const searchBtn = document.querySelector('.filters-search-button');

const searchQuery = form.value;

searchBtn.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
}
getAllProducts().then(({ results }) => console.log(results));
import { getCategoryList } from '../services/food-api';
import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';
const refs = {
	selectEl: document.querySelector('filterts-categories-select'),
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

	refs.selectEl.insertAdjacentHTML('afterbegin', markupSelectList);

	new SlimSelect({
		select: refs.selectEl,
		settings: {
			showSearch: false,
			searchHighlight: true,
		},
	});
	return;
}
