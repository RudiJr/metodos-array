const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    const btnCategoria = document.getElementById(this.id);
    const categoria = btnCategoria.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponibilidade() : filtrarCategoria(categoria);
   exibirLivros(livrosFiltrados);
   if(categoria == 'disponivel'){
    const total = calcularValorTotal(livrosFiltrados);
    exibirValorTotal(total);
   };
};

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(total){
    valorTotal.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
  </div>`;
};