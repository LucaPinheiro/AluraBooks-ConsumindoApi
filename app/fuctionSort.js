let btnOrderly = document.getElementById("btnOrdenarPorPreco");
btnOrderly.addEventListener("click", sortBooksPrice);

function sortBooksPrice() {
  let sortBooks = books.sort((a, b) => b.preco - a.preco);
  showBooks(sortBooks);
}
