// ======================================
// CRUD UNIVERSAL
// ======================================

function renderizarLista(opcoes){

    const{

        titulo,

        itens,

        container,

        textoBotao="Novo",

        onNovo,

        onEditar,

        onExcluir

    }=opcoes;

    container.innerHTML=`

<div class="gerenciador">

    <div class="gerenciador-topo">

        <h2>${titulo}</h2>

        <button id="btnNovoItem" class="btn-novo-item">

            + ${textoBotao}

        </button>

    </div>

    <div class="crud-toolbar">

        <input

            id="crudPesquisa"

            type="text"

            placeholder="Pesquisar..."

        >

    </div>

    <div

        class="lista-itens"

        id="listaCrud">

    </div>

</div>

`;

    const lista=container.querySelector("#listaCrud");

    function montarLista(filtro=""){

        lista.innerHTML="";

        itens

        .filter(item=>{

            const nome=(item.nome??item)

                .toLowerCase();

            return nome.includes(

                filtro.toLowerCase()

            );

        })

        .forEach((item,index)=>{

            lista.innerHTML+=`

<div class="item-gerenciador">

    <div class="item-esquerda">

        <span class="drag">

            ☰

        </span>

        <strong>

            ${item.nome??item}

        </strong>

    </div>

    <div class="acoes">

        <button

            class="btn-editar"

            data-index="${index}">

            ✏️

        </button>

        <button

            class="btn-excluir"

            data-index="${index}">

            🗑️

        </button>

    </div>

</div>

`;

        });

    }

    montarLista();

    document

    .getElementById("crudPesquisa")

    .oninput=function(){

        montarLista(this.value);

    };

    document

    .getElementById("btnNovoItem")

    .onclick=onNovo;

    lista.onclick=function(e){

        const editar=e.target.closest(".btn-editar");

        const excluir=e.target.closest(".btn-excluir");

        if(editar){

            onEditar(

                Number(

                    editar.dataset.index

                )

            );

        }

        if(excluir){

            onExcluir(

                Number(

                    excluir.dataset.index

                )

            );

        }

    };

}