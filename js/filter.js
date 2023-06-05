const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const btnCategoria = document.getElementById(this.id);
    const categoria = btnCategoria.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
   exibirLivros(livrosFiltrados);
};