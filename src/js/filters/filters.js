import { getAllProducts } from '../services/food-api';

const form = document.getElementById('filters-search-form');
const searchBtn = document.querySelector('.filters-search-button');

const searchQuery = form.value;

searchBtn.addEventListener('submit', onSubmit);

function onSubmit(e) {
	e.preventDefault();
}
getAllProducts().then(({ results }) => console.log(results));
