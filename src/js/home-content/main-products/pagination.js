document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;

  // Створення елементів контенту і пагінації
  body.innerHTML += `
    <div id="content"></div>
    <div id="pagination"></div>
  `;

  // Отримання посилань на контейнери
  const contentContainer = document.getElementById('content');
  const paginationContainer = document.getElementById('pagination');

  const itemsPerPage = 9;
  let currentPage = 1;
  let totalPages = 0;

  function fetchData(page) {
    const apiUrl = `https://food-boutique.b.goit.study/api/products?&page=${page}&limit=${itemsPerPage}`;

    return fetch(apiUrl)
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching data:', error);
        throw error; // Перенаправлення помилки для обробки в блоках catch
      });
  }

  function displayContent(data) {
    // Перевірка наявності results в об'єкті даних
    if (data && data.results) {
      contentContainer.innerHTML = data.results.map(product => `<div>${product.name}</div>`).join('');
    } else {
      console.error('Error: Missing "results" property in data:', data);
    }
  }

  function updatePaginationUI() {
    // Очищення контейнера пагінації
    paginationContainer.innerHTML = '';

    if (totalPages > 1) {
      // Додавання кнопки "Назад"
      addButton('Назад', currentPage > 1 ? () => changePage(currentPage - 1) : null, currentPage === 1);

      // Логіка для відображення кнопок сторінок
      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          addButton(i, () => changePage(i), i === currentPage);
        }
      } else {
        // Логіка для відображення трикрапок і додавання перших і останніх кнопок
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

      // Додавання кнопки "Вперед"
      addButton('Вперед', currentPage < totalPages ? () => changePage(currentPage + 1) : null, currentPage === totalPages);
    }
  }

  function addButton(text, onClick, isDisabled) {
    const button = document.createElement('button');
    button.textContent = text;
    if (onClick) {
      button.addEventListener('click', onClick);
    }
    button.disabled = isDisabled;
    paginationContainer.appendChild(button);
  }

  function changePage(newPage) {
    if (newPage >= 1) {
      currentPage = newPage;
      fetchData(currentPage)
        .then(data => {
          displayContent(data);
          totalPages = data.totalPages || Math.ceil(data.total / itemsPerPage);
          updatePaginationUI();
        })
        .catch(error => console.error('Error changing page:', error));
    }
  }

  // Ініціалізація сторінки при завантаженні
  fetchData(currentPage)
    .then(data => {
      displayContent(data);
      totalPages = data.totalPages || Math.ceil(data.total / itemsPerPage);
      updatePaginationUI();
    })
    .catch(error => console.error('Error initializing page:', error));
});
