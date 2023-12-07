import axios from 'axios';
import Notiflix from 'notiflix';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products/discount';

async function searchImg() {
	return axios.get(`${BASE_URL}`).then(({ data }) => data);
}

function createMarkup(array) {
	return array
		.slice(0, 2)
		.map(
			({
				_id,
				name,
				img,
				category,
				price,
				size,
				is10PercentOff,
				popularity,
			}) => {
				return `<div class="discount-card">
        <div class="discount-img-wrap">
            <a class="discount-gallery-link" href="${_id}">
                <img src="${img}" alt="${name}" width="114" height="114" loading="lazy" />
            </a>
         <p class="discount-info-item">${name}      ${price}</p>
        </div>        
        </div>`;
			}
		)
		.join('');
}

const refs = {
	discount: document.querySelector('.discount'),
};
const { discount } = refs;

let page = 1;
const paramDiscount = {
	position: 'top-right',
	timeout: 3000,
	width: '400px',
	fontSize: '30px',
};

function onSubmit() {
	page = 1;
	discount.innerHTML = '';
	searchImg()
		.then(data => {
			discount.innerHTML = createMarkup(data);
		})
		.catch(onSearchError);
}

function onSearchError() {
	Notiflix.Notify.failure(
		'Something went wrong! Please try again.',
		paramDiscount
	);
}

onSubmit();
