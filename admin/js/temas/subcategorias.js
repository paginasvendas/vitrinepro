// ======================================
// SUBCATEGORIAS
// ======================================

function abrirCategoria(idTema,idCategoria){

    const tema = buscarTema(idTema);

    const categoria = buscarCategoria(idTema,idCategoria);

    atualizarBreadcrumb([

        `${tema.icone} ${tema.nome}`,

        categoria.nome

    ]);

    const conteudo = document.getElementById("conteudoTema");

    abrirTreeManager({

        titulo:`Subcategorias de "${categoria.nome}"`,

        itens:categoria.subcategorias,

        container:conteudo,

        textoBotao:"Nova Subcategoria",

        onNovo(){

            console.log("Nova subcategoria");

        },

        onEditar(index){

            console.log("Editar",index);

        },

        onExcluir(index){

            console.log("Excluir",index);

        },

        onAbrir(index){

            abrirSubcategoria(

                idTema,

                idCategoria,

                index

            );

        }

    });

}