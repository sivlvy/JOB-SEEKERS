import { getCurrentProducts } from '../../services/food-api.js';
import { cardMarkup } from './main-projects.js';
import { filters, changingLimit } from '../../filters/filters.js';
import { saveToLS, loadFromLS } from '../../services/helpers.js';
import { onAddButtonClick } from './main-projects.js';

const cardProduct = document.querySelector('.product-list');
const paginationElement = document.querySelector('.pagination ul');
const paginationHidden = document.querySelector('.pagination');
const cardContainerHidden = document.querySelector('.card-container');
const hiddenForm = document.querySelector('.main-content-nothing');
const loaderEl = document.querySelector('.loader');

let newFilters = filters;
let totalPages = 0;

hiddenForm.style.display = 'none';

export async function updateProducts() {
	saveToLS('filters-parameters', newFilters);

	const dataFromLS = loadFromLS('filters-parameters');
	console.log(dataFromLS);

	try {
		const data = await getCurrentProducts(dataFromLS);
		loaderEl.style.display = 'none';

		const products = data.results;
		totalPages = data.totalPages;

		if (data.results.length) {
			hiddenForm.style.display = 'none';
			paginationHidden.style.display = 'block';
			cardContainerHidden.style.display = 'block';
			cardProduct.innerHTML = cardMarkup(products);
		} else {
			hiddenForm.style.display = 'block';
			paginationHidden.style.display = 'none';
			cardContainerHidden.style.display = 'none';
		}

		const addButtons = document.querySelectorAll('.add-button');
		for (const addButton of addButtons) {
			addButton.addEventListener('click', onAddButtonClick);
		}

		updatePagination();
	} catch (error) {
		console.log(error);
	}
}

function updatePagination() {
	if (totalPages <= 1) {
		paginationElement.innerHTML = ''; // Якщо так, то приховати пагінацію
		return;
	}
	paginationElement.innerHTML = paginationHTML(totalPages, newFilters.page);
	const pageButtons = document.querySelectorAll(
		'.pagination li:not(.disabled)'
	);

	pageButtons.forEach(button => {
		button.addEventListener('click', async event => {
			const pageNumber = parseInt(event.currentTarget.dataset.page);
			if (!isNaN(pageNumber) && pageNumber !== newFilters.page) {
				newFilters.page = pageNumber;
				await updateProducts();
			}
		});
	});
}

function paginationHTML(totalPages, currentPage) {
	let liTag = '';
	const maxVisibleButtons = 5;
	const halfVisibleButtons = Math.floor(maxVisibleButtons / 2);
	let startPage = currentPage - halfVisibleButtons;
	let endPage = currentPage + halfVisibleButtons;

	if (startPage < 1) {
		startPage = 1;
		endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);
	}
	if (endPage > totalPages) {
		endPage = totalPages;
		startPage = Math.max(1, endPage - maxVisibleButtons + 1);
	}
	if (currentPage > 1) {
		liTag += `<li class="btn prev" data-page="${
			currentPage - 1
		}"><span>&lt;</span></li>`;
	} else {
		liTag += `<li class="btn prev disabled"><span>&lt;</span></li>`;
	}
	if (startPage > 1) {
		liTag += `<li class="first numb" data-page="1"><span>1</span></li>`;
		if (startPage > 2) {
			liTag += `<li class="dots"><span>...</span></li>`;
		}
	}
	for (let page = startPage; page <= endPage; page++) {
		const active = page === currentPage ? 'active' : '';
		liTag += `<li class="numb ${active}" data-page="${page}"><span>${page}</span></li>`;
	}
	if (endPage < totalPages) {
		if (endPage < totalPages - 1) {
			liTag += `<li class="dots"><span>...</span></li>`;
		}
		liTag += `<li class="last numb" data-page="${totalPages}"><span>${totalPages}</span></li>`;
	}
	if (currentPage < totalPages) {
		liTag += `<li class="btn next" data-page="${
			currentPage + 1
		}"><span>&gt;</span></li>`;
	} else {
		liTag += `<li class="btn next disabled"><span>&gt;</span></li>`;
	}
	return liTag;
}

document.addEventListener('DOMContentLoaded', async function () {
	window.addEventListener('resize', handleResize);
	await updateProducts();

	function handleResize() {
		changingLimit();
		updateProducts();
	}
});
