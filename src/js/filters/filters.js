<<<<<<< Updated upstream
import { getCategoryList } from '../services/food-api';
import SlimSelect from 'slim-select';
import { cardMarkup } from '../home-content/main-products/main-projects';
import { getCurrentProducts } from '../services/food-api';
export { changingLimit } 

const refs = {
	selectEl: document.querySelector('.filterts-categories-select'),
};

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
