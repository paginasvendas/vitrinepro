// ======================================
// VALIDAÇÃO DO FORMULÁRIO
// ======================================

function validarProduto(produto){

    if(produto.nome === ""){

        alert("Informe o nome do produto.");

        return false;

    }

    if(produto.categoria === ""){

        alert("Selecione uma categoria.");

        return false;

    }

    if(produto.preco <= 0){

        alert("Informe um preço válido.");

        return false;

    }

    if(produto.estoque < 0){

        alert("Estoque inválido.");

        return false;

    }

    return true;

}