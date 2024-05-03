const botoes  = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFilrados = categoria == 'disponivel' ? filtrarPordisponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFilrados)
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFilrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.
        categoria == categoria)
}

function filtrarPordisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela (valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
     </div>
    `
}