function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosDescontos = livros.map(livro =>{
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    });
    return livrosDescontos;
};

   /* `return {...livro}` is creating a new object with the same properties as the `livro` object
        and returning it. The spread syntax (`...`) is used to copy all the properties of the
        `livro` object into the new object. This is a way to create a shallow copy of an object in
        JavaScript. */