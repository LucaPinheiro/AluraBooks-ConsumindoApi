const elementsForInsertBooks = document.getElementById("livros");
const elementBooksValues = document.getElementById("valor_total_livros_disponiveis");

function showBooks(list) {
  elementBooksValues.innerHTML = "";
  elementsForInsertBooks.innerHTML = "";
  list.forEach((book) => {
    // let availability = checkAvailable(book);
    let availability =
      book.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
    elementsForInsertBooks.innerHTML += `
           <div class="livro">
        <img class="${availability}" src="${book.imagem}" 
        alt="Capa do livro Cangaceiro JavaScript" />
        ${book.categoria} 
        <h2 class="livro__titulo">
          Cangaceiro JavaScript:
          Uma aventura no sertão da programação
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag"${book.categoria}></span>
        </div>
      </div>
          `;
  });
}

//Outra forma:

// function checkAvailable(book) {
//     if(book.quantidade > 0) {
//         return 'livro__imagens'
//     } else {
//         return 'livro__imagens indisponivel'
//     }
// }
