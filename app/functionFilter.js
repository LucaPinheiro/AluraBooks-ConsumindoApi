const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => btn.addEventListener("click", filterBooks));

function filterBooks() {
  const elementBtn = document.getElementById(this.id);
  const category = elementBtn.value;
  let filteredBooks =
    category == "disponivel"
      ? filterByAvailability()
      : filterByCategory(category);
  showBooks(filteredBooks);
  if (category == "disponivel") {
    showBooksValueScreen();
  }
}

function filterByCategory(category) {
  return books.filter((book) => book.categoria == category);
}

function filterByAvailability() {
  return books.filter((book) => book.quantidade > 0);
}

function showBooksValueScreen() {
  elementBooksValues.innerHTML = `
  <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>
  `;
}
