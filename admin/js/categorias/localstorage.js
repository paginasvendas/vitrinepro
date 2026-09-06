// ======================================
// LOCAL STORAGE - CATEGORIAS
// ======================================

const CHAVE_CATEGORIAS = "vitrinepro_categorias";

// Retorna todas as categorias
function obterCategorias() {

    return JSON.parse(localStorage.getItem(CHAVE_CATEGORIAS)) || [];

}

// Salva todas as categorias
function salvarCategorias(categorias) {

    localStorage.setItem(
        CHAVE_CATEGORIAS,
        JSON.stringify(categorias)
    );

}

// Adiciona uma categoria
function adicionarCategoria(categoria) {

    const categorias = obterCategorias();

    categorias.push(categoria);

    salvarCategorias(categorias);

}

// Atualiza categoria
function atualizarCategoria(categoriaAtualizada) {

    let categorias = obterCategorias();

    categorias = categorias.map(categoria =>

        categoria.id === categoriaAtualizada.id

            ? categoriaAtualizada

            : categoria

    );

    salvarCategorias(categorias);

}

// Exclui categoria
function excluirCategoria(id) {

    const categorias = obterCategorias().filter(categoria => categoria.id !== id);

    salvarCategorias(categorias);

}