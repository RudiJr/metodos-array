const btn = document.querySelectorAll('.btn');
btn.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const btnCategoria = document.getElementById(this.id);
    const categoria = btnCategoria.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
   exibirLivros(livrosFiltrados);
};