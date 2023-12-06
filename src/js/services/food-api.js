import axios from 'axios';

const refs = {
	popularList: document.querySelector('.popular-list'),
};

function getPopularProducts() {
	const BASE_URL = 'https://food-boutique.b.goit.study/api/products';
	return axios.get(`${BASE_URL}/popular?limit=5`).then(resp => resp.data);
}

getPopularProducts().then(resp => resp.data);
