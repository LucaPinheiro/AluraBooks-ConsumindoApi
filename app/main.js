let books = [];
const endpointAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getFetchBooksAPI();

async function getFetchBooksAPI() {
  const res = await fetch(endpointAPI);
  books = await res.json();
  let discountBooks = applyDiscount(books);
  showBooks(discountBooks);
}
