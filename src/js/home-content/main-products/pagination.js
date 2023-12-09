document.addEventListener('DOMContentLoaded', function () {
  // Вибір елемента
  const element = document.querySelector(".pagination ul");
  let totalPages = 20;
  let page = 10;

  // Виклик функції з передачею параметрів та додавання в елемент ul
  element.innerHTML = createPagination(totalPages, page);

  function createPagination(totalPages, page) {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;

    // ваша функція тут

    element.innerHTML = liTag;
    return liTag;
  }

  // Додавання обробника подій для кнопок пагінації
  element.addEventListener("click", function (event) {
    if (event.target.tagName === "LI" && !event.target.classList.contains("dots")) {
      const pageNumber = parseInt(event.target.innerText);
      if (!isNaN(pageNumber)) {
        element.innerHTML = createPagination(totalPages, pageNumber);
      }
    }
  });
});
