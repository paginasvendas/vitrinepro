// ======================================
// ATRIBUTOS
// ======================================

function abrirSubcategoria(idTema,idCategoria,idSubcategoria){

    const tema = buscarTema(idTema);

    const categoria = buscarCategoria(idTema,idCategoria);

    const subcategoria = buscarSubcategoria(

        idTema,

        idCategoria,

        idSubcategoria

    );

    atualizarBreadcrumb([

        `${tema.icone} ${tema.nome}`,

        categoria.nome,

        subcategoria.nome

    ]);

    const conteudo = document.getElementById("conteudoTema");

    abrirTreeManager({

        titulo:`Atributos de "${subcategoria.nome}"`,

        itens:subcategoria.atributos,

        container:conteudo,

        textoBotao:"Novo Atributo",

        onNovo(){

            console.log("Novo atributo");

        },

        onEditar(index){

            console.log("Editar",index);

        },

        onExcluir(index){

            console.log("Excluir",index);

        },

        onAbrir(index){

            abrirAtributo(

                idTema,

                idCategoria,

                idSubcategoria,

                subcategoria.atributos[index].nome

            );

        }

    });

}