const filtrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
filtrarLivrosFront.addEventListener('click', filtrarLivros);

function filtrarLivros(){
    let livrosFiltrados = livros.filter(livro => livro.categoria == 'front-end');
    console.table(livrosFiltrados);
};