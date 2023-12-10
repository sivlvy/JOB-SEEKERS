import axios from 'axios';
import { getCurrentProducts } from '../../services/food-api.js';

const cardProduct = document.querySelector('.product-list');
const paginationElement = document.querySelector('.pagination ul');

let value = ""; 
let category = ""; 
let page = 1;
let limit = 6;
let totalPages = 0;

document.addEventListener("DOMContentLoaded", async function () {
  await updateProducts();

  function updateProducts() {
    getCurrentProducts({ value, category, page, limit })
      .then(data => {
        const products = data.results;
        totalPages = data.totalPages;

        cardProduct.innerHTML = cardMarkup(products);
        updatePagination();
      })
      .catch(error => {
        console.log(error);
      });
  }

  function updatePagination() {
    paginationElement.innerHTML = createPagination(totalPages, page);
    const pageButtons = document.querySelectorAll('.pagination li:not(.disabled)');
  
    pageButtons.forEach(button => {
      button.addEventListener('click', async event => {
        const pageNumber = parseInt(event.currentTarget.dataset.page);
        if (!isNaN(pageNumber) && pageNumber !== page) {
          page = pageNumber;
          updateProducts();
        }
      });
    });
  }
  
  

  function createPagination(totalPages, currentPage) {
    let liTag = '';
    let active;
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;
  
    if (currentPage > 1) {
      liTag += `<li class="btn prev" data-page="${currentPage - 1}"><span>&lt;</span></li>`;
    } else {
      liTag += `<li class="btn prev disabled"><span>&lt;</span></li>`;
    }
  
    if (currentPage > 2) {
      liTag += `<li class="first numb" data-page="1"><span>1</span></li>`;
      if (currentPage > 3) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }
  
    if (currentPage == totalPages) {
      beforePage = beforePage - 2;
    } else if (currentPage == totalPages - 1) {
      beforePage = beforePage - 1;
    }
  
    if (currentPage == 1) {
      afterPage = afterPage + 2;
    } else if (currentPage == 2) {
      afterPage = afterPage + 1;
    }
  
    for (var plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength == 0) {
        plength = plength + 1;
      }
      if (currentPage == plength) {
        active = "active";
      } else {
        active = "";
      }
      liTag += `<li class="numb ${active}" data-page="${plength}"><span>${plength}</span></li>`;
    }
  
    if (currentPage < totalPages - 1) {
      if (currentPage < totalPages - 2) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb" data-page="${totalPages}"><span>${totalPages}</span></li>`;
    }
  
    if (currentPage < totalPages) {
      liTag += `<li class="btn next" data-page="${currentPage + 1}"><span>&gt;</span></li>`;
    } else {
      liTag += `<li class="btn next disabled"><span>&gt;</span></li>`;
    }
  
    return liTag;
  }
  

  function cardMarkup(products) {
    return products
      .map(({ img, name, category, size, popularity, price }) => `
        <li class="card-wrapper">
          <div class="image-wrapper">
            <img src="${img}" alt="${name}" loading="lazy" class="product-image" width="140" height="140" />
          </div>
          <div class="product-info">
            <p class="product-name">${name}</p>
            <div class="product-items">
              <p class="product-item">Category:<span class="product-more-info">&nbsp;${category}</span></p>
              <p class="product-item">Size:<span class="product-more-info">&nbsp;${size}</span></p>
              <p class="product-item">Popularity:<span class="product-more-info">&nbsp;${popularity}</span></p>
            </div>
          </div>
          <div class="price-and-add">
            <p class="product-price">$${price}</p>
            <button class="add-button" type="button">
              <svg class="icon-button" width="18" height="18">
                <use href="../../../icons.svg#icon-cart-mob"></use>
              </svg>
            </button>
          </div>
        </li>`
      )
      .join('');
  }
});
