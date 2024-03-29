let livros = [];
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getLivrosAPI();


async function getLivrosAPI(){
    const res = await fetch(endpointAPI);
    livros = await res.json();
    livros = aplicarDesconto(livros);
    exibirLivros(livrosDescontos);
};