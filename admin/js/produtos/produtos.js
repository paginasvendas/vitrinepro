// ======================================
// LISTA DE PRODUTOS
// ======================================

const tabela = document.getElementById("listaProdutos");

function badgeStatus(ativo){

    if(ativo){

        return `<span class="badge badge-success">Ativo</span>`;

    }

    return `<span class="badge badge-danger">Inativo</span>`;

}

function badgeDestaque(destaque){

    if(destaque){

        return `<span class="badge badge-warning">Sim</span>`;

    }

    return "-";

}

function carregarProdutos(){

    if(!tabela) return;

    tabela.innerHTML = "";

    const produtos = obterProdutos();

    if(produtos.length===0){

        tabela.innerHTML=`

            <tr>

                <td colspan="14" style="text-align:center;padding:40px;">

                    Nenhum produto cadastrado.

                </td>

            </tr>

        `;

        return;

    }

    produtos.forEach(produto=>{

        tabela.innerHTML += `

            <tr>

                <td>

                    <img
                        src="${produto.imagem}"
                        width="60"
                        height="60"
                        style="border-radius:8px;object-fit:cover;">

                </td>

                <td>${produto.codigo}</td>

                <td>${produto.nome}</td>

                <td>${produto.categoria || "-"}</td>

<td>${produto.subcategoria || "-"}</td>

<td>${produto.tipoProduto || "-"}</td>

<td>
    R$ ${Number(produto.preco || 0).toFixed(2).replace(".", ",")}
</td>

<td>
    ${
        Number(produto.promocao || 0) > 0
            ? `R$ ${Number(produto.promocao).toFixed(2).replace(".", ",")}`
            : "-"
    }
</td>

<td>
    R$ ${Number(produto.custo || 0).toFixed(2).replace(".", ",")}
</td>

                <td>${produto.estoque}</td>

                <td>${badgeStatus(produto.ativo)}</td>

                <td>${badgeDestaque(produto.destaque)}</td>

                <td>${produto.criadoEm}</td>

                <td>

                    <button
                        class="btn-editar"
                        data-id="${produto.id}">

                        <i class="fa-solid fa-pen"></i>

                    </button>

                    <button
                        class="btn-excluir"
                        data-id="${produto.id}">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </td>

            </tr>

        `;

    });

}

carregarProdutos();

// ===============================
// EVENTOS DA TABELA
// ===============================







if (tabela) {

    tabela.addEventListener("click", function(e) {

        // ===============================
        // EDITAR
        // ===============================

        const btnEditar =
            e.target.closest(".btn-editar");

        if (btnEditar) {

            const id =
                Number(btnEditar.dataset.id);

            editarProduto(id);

            return;
        }


        // ===============================
        // EXCLUIR
        // ===============================

        const btnExcluir =
            e.target.closest(".btn-excluir");

        if (btnExcluir) {

            const id =
                Number(btnExcluir.dataset.id);

            confirmarExclusao(id);

            return;
        }

    });

}


function confirmarExclusao(id){

    mostrarModalConfirmacao(

        "Excluir Produto",

        "Deseja realmente excluir este produto?",

        function(){

            excluirProduto(id);

            carregarProdutos();

            mostrarModal(

                "Sucesso",

                "Produto excluído com sucesso.",

                "success"

            );

        }

    );

}

// ======================================
// EDITAR PRODUTO
// ======================================

function editarProduto(id){

    localStorage.setItem(

        "produtoEditando",

        id

    );

    window.location.href = "novo-produto.html";

}
