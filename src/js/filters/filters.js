import { getCategoryList } from '../services/food-api';
import SlimSelect from 'slim-select';
import { cardMarkup } from '../home-content/main-products/main-projects';
import { getCurrentProducts } from '../services/food-api';

const refs = {
	selectEl: document.querySelector('.filterts-categories-select'),
};

const cardProduct = document.querySelector('.product-list');


getCategoryList()
	.then(data => {
		renderSelectList(data);
		console.log(data)
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



const settings = {
	keyword: null,
	category: null,
	page: 1,
	limit: 6
  };

  let value = '';
let category = '';
let page = 1;
let limit = 6;

  localStorage.setItem('filter-parameters', JSON.stringify(settings))

refs.selectEl.addEventListener('change', evt => {
	const newCategory = evt.target.value;
	settings['category'] = newCategory;
	category = newCategory;
	console.log(newCategory)
	localStorage.setItem('filter-parameters', JSON.stringify(settings))
	const savedParameters = localStorage.getItem('filter-parameters');
	const parsedParameters = JSON.parse(savedParameters);
	console.log(parsedParameters)


	getCurrentProducts({ value, category, page, limit })
	.then(data => {
		

		const products = data.results;

		cardProduct.innerHTML = cardMarkup(products)
	})
	.catch(error => {
		console.log(error);
	});
}
	
);




// export class Filters {
// 	constructor() {
// 		this.STORAGE_FILTERS_KEY = 'filters-parameters';
// 		this.defaultFilters = new Map([
// 			['keyword', null],
// 			['category', null],
// 			['page', 1],
// 			['limit', 6],
// 		]);
// 		this.setDefaultFilters();
// 		this.saveFiltersToLocalStorage();
// 	}

// 	setDefaultFilters() {
// 		this.filtersData =
// 			JSON.parse(localStorage.getItem(this.STORAGE_FILTERS_KEY)) ||
// 			new Map(this.defaultFilters);
// 	}

// 	saveFiltersToLocalStorage() {
// 		localStorage.setItem(
// 			this.STORAGE_FILTERS_KEY,
// 			JSON.stringify([...this.filtersData])
// 		);
// 	}

// 	updateFilters({ key, value }) {
// 		if (this.filtersData.get(key) !== value) {
// 			this.filtersData.set(key, value);
// 			this.saveFiltersToLocalStorage();
// 		}
// 	}

// 	searchOptionForLocalStorage({ key, value }) {
// 		this.updateFilters({ key, value });
// 		console.log(Object.fromEntries([...this.filtersData]));
// 	}
// }

// console.log(Filters);
