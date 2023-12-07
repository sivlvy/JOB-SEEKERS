document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
  
    body.innerHTML += `
      <div id="content"></div>
      <div id="pagination"></div>
    `;
  
    const contentContainer = document.getElementById('content');
    const paginationContainer = document.getElementById('pagination');
  
    const itemsPerPage = 9;
    let currentPage = 1;
    let totalPages = 0;
  
    function fetchData(page) {
      const apiUrl = `https://food-boutique.b.goit.study/api/products?page=${page}&limit=${itemsPerPage}`;
  
      return fetch(apiUrl)
        .then(response => response.json())
        .catch(error => {
          console.error('Error fetching data:', error);
          return Promise.reject(error);
        });
    }
  
    function displayContent(products) {
      contentContainer.innerHTML = products.map(product => `<div>${product.name}</div>`).join('');
    }
  
    function updatePaginationUI() {
      paginationContainer.innerHTML = '';
  
      if (totalPages > 1) {
        const buttons = [];
  
        const addButton = (text, onClick, isDisabled) => {
          buttons.push(`<button onclick="(${onClick})()" ${isDisabled ? 'disabled' : ''}>${text}</button>`);
        };
  
        addButton('Назад', () => changePage(currentPage - 1), currentPage === 1);
  
        if (totalPages <= 7) {
          for (let i = 1; i <= totalPages; i++) {
            addButton(i, () => changePage(i), i === currentPage);
          }
        } else {
          addButton(1, () => changePage(1), currentPage === 1);
  
          const startPage = Math.max(2, currentPage - 2);
          const endPage = Math.min(totalPages - 1, currentPage + 2);
  
          if (startPage > 2) {
            addButton('...', () => {}, true);
          }
  
          for (let i = startPage; i <= endPage; i++) {
            addButton(i, () => changePage(i), i === currentPage);
          }
  
          if (endPage < totalPages - 1) {
            addButton('...', () => {}, true);
          }
  
          addButton(totalPages, () => changePage(totalPages), currentPage === totalPages);
        }
  
        addButton('Вперед', () => changePage(currentPage + 1), currentPage === totalPages);
  
        paginationContainer.innerHTML = buttons.join('');
      }
    }
  
    function changePage(newPage) {
      if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        fetchData(currentPage)
          .then(data => {
            displayContent(data.products);
            totalPages = Math.ceil(data.total / itemsPerPage);
            updatePaginationUI();
          })
          .catch(error => console.error('Error updating page:', error));
      }
    }
  
    function initializePage() {
      fetchData(currentPage)
        .then(data => {
          displayContent(data.products);
          totalPages = Math.ceil(data.total / itemsPerPage);
          updatePaginationUI();
        })
        .catch(error => console.error('Error initializing page:', error));
    }
  
    initializePage();
  });
  