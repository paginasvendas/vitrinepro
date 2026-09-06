// ======================================
// TREE MANAGER
// ======================================

function abrirTreeManager(opcoes){

    const{

        titulo,

        itens,

        container,

        textoBotao,

        onNovo,

        onEditar,

        onExcluir,

        onAbrir

    }=opcoes;

    renderizarLista({

        titulo,

        itens,

        container,

        textoBotao,

        onNovo,

        onEditar,

        onExcluir

    });

    const lista=document.getElementById("listaCrud");

    lista.addEventListener("dblclick",function(e){

        const item=e.target.closest(".item-gerenciador");

        if(!item) return;

        const index=item.querySelector(".btn-editar").dataset.index;

        onAbrir(Number(index));

    });

}