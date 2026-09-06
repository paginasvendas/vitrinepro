// ======================================
// AÇÕES DOS TEMAS
// ======================================

function acaoNovoValor(

    idTema,

    idCategoria,

    idSubcategoria,

    nomeAtributo,

    atualizar

){

    abrirFormulario({

        titulo:"Novo Valor",

        label:"Nome do valor",

        placeholder:"Digite um valor",

        textoBotao:"Salvar",

        onSalvar(valor){

            const atributo = buscarAtributo(

                idTema,

                idCategoria,

                idSubcategoria,

                nomeAtributo

            );

            atributo.valores.push(valor);

            salvarEstrutura();

            atualizar();

        }

    });

}

function acaoEditarValor(

    idTema,

    idCategoria,

    idSubcategoria,

    nomeAtributo,

    index,

    atualizar

){

    const atributo = buscarAtributo(

        idTema,

        idCategoria,

        idSubcategoria,

        nomeAtributo

    );

    abrirFormulario({

        titulo:"Editar Valor",

        label:"Nome",

        valor:atributo.valores[index],

        textoBotao:"Salvar",

        onSalvar(valor){

            atributo.valores[index]=valor;

            salvarEstrutura();

            atualizar();

        }

    });

}

function acaoExcluirValor(

    idTema,

    idCategoria,

    idSubcategoria,

    nomeAtributo,

    index,

    atualizar

){

    mostrarModalConfirmacao(

        "Excluir valor?",

        "Esta ação não poderá ser desfeita.",

        function(){

            const atributo = buscarAtributo(

                idTema,

                idCategoria,

                idSubcategoria,

                nomeAtributo

            );

            atributo.valores.splice(index,1);

            salvarEstrutura();

            atualizar();

        }

    );

}