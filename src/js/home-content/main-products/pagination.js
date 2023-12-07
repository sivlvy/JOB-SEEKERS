import Pagination from 'tui-pagination';

document.addEventListener('DOMContentLoaded', function () {
  const contentContainer = document.createElement('div');
  contentContainer.id = 'content';
  document.body.appendChild(contentContainer);

  const itemsPerPage = 9;
  let currentPage = 1;
  let totalPages = 0;

  const paginationContainer = document.createElement('div');
  paginationContainer.id = 'pagination';
  document.body.appendChild(paginationContainer);

  function fetchData(page) {
    const apiUrl = `https://food-boutique.b.goit.study/api/products?&page=${page}&limit=${itemsPerPage}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayContent(data.results);
        totalPages = data.totalPages;
        updatePaginationUI();
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  function displayContent(products) {
    contentContainer.innerHTML = '';

    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.textContent = product.name;
      contentContainer.appendChild(productElement);
    });
  }

  function updatePaginationUI() {
    paginationContainer.innerHTML = '';

    const options = {
      totalItems: totalPages * itemsPerPage,
      itemsPerPage: itemsPerPage,
      visiblePages: Math.min(totalPages, 5),
      centerAlign: true,
    };

    const pagination = new Pagination(paginationContainer, options);

    pagination.on('beforeMove', event => {
      const newPage = event.page;
      if (newPage !== currentPage) {
        currentPage = newPage;
        fetchData(currentPage);
      }
    });
  }

  fetchData(currentPage);
  updatePaginationUI();
});
