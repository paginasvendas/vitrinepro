
// ======================================
// VALORES
// ======================================

function abrirAtributo(idTema,idCategoria,idSubcategoria,nomeAtributo){

const atributo = buscarAtributo(

    idTema,

    idCategoria,

    idSubcategoria,

    nomeAtributo

);

const tema = buscarTema(idTema);

const categoria = buscarCategoria(idTema,idCategoria);

const subcategoria = buscarSubcategoria(

    idTema,

    idCategoria,

    idSubcategoria

);

    document.getElementById("breadcrumb").innerHTML=`

        <span>${tema.icone} ${tema.nome}</span>

        >

        <span>${categoria.nome}</span>

        >

        <span>${subcategoria.nome}</span>

        >

        <strong>${atributo.nome}</strong>

    `;

    const conteudo = document.getElementById("conteudoTema");

    abrirTreeManager({

        titulo:`Valores de "${atributo.nome}"`,

        itens:atributo.valores,

        container:conteudo,

        textoBotao:"Novo Valor",

        onNovo(){

    acaoNovoValor(

        idTema,

        idCategoria,

        idSubcategoria,

        atributo.nome,

        () => abrirAtributo(

            idTema,

            idCategoria,

            idSubcategoria,

            atributo.nome

        )

    );

},

        onEditar(index){

    acaoEditarValor(

        idTema,

        idCategoria,

        idSubcategoria,

        atributo.nome,

        index,

        () => abrirAtributo(

            idTema,

            idCategoria,

            idSubcategoria,

            atributo.nome

        )

    );

},

        onExcluir(index){

    acaoExcluirValor(

        idTema,

        idCategoria,

        idSubcategoria,

        atributo.nome,

        index,

        () => abrirAtributo(

            idTema,

            idCategoria,

            idSubcategoria,

            atributo.nome

        )

    );

},

onAbrir(index){

    console.log(

        "Abrindo valor:",

        atributo.valores[index]

    );

}

    });

}