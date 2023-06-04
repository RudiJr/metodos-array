let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getLivrosAPI();
const insertLivros = document.getElementById('livros');

async function getLivrosAPI(){
    const res = await fetch(endpointAPI);
    livros = await res.json();

    console.table(livros);
    exibirLivros(livros);
};

function exibirLivros(listaLivros){
    listaLivros.forEach(livro  => {
        insertLivros.innerHTML += `<div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
    });
}