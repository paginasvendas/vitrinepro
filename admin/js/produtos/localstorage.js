// ======================================
// LOCAL STORAGE - PRODUTOS
// ======================================

const CHAVE_PRODUTOS = "vitrinepro_produtos";

// Retorna todos os produtos
// Sempre do último cadastrado para o primeiro
function obterProdutos() {

    const produtos =
        JSON.parse(
            localStorage.getItem(CHAVE_PRODUTOS)
        ) || [];

    return produtos.sort((a, b) => {

        return Number(b.id) - Number(a.id);

    });

}

// Salva todos os produtos
function salvarProdutos(produtos) {

    localStorage.setItem(   
        CHAVE_PRODUTOS,
        JSON.stringify(produtos)
    );

}

// Adiciona um novo produto
function adicionarProduto(produto) {

    const produtos = obterProdutos();

    produtos.push(produto);

    salvarProdutos(produtos);

}

// Remove um produto pelo ID
function excluirProduto(id) {

    let produtos = obterProdutos();

    console.log("Antes:", produtos.length);

    produtos = produtos.filter(produto => Number(produto.id) !== Number(id));

    console.log("Depois:", produtos.length);

    salvarProdutos(produtos);

}

function atualizarProduto(produtoAtualizado){

    let produtos = obterProdutos();

    produtos = produtos.map(produto =>

        produto.id === produtoAtualizado.id

            ? produtoAtualizado

            : produto

    );

    salvarProdutos(produtos);

}