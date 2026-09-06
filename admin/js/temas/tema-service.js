console.log("TEMA SERVICE CARREGADO");

// ======================================
// TEMA SERVICE
// ======================================


// ======================================
// BUSCAR TEMA
// ======================================

window.buscarTema = function(idTema) {

    return obterTemas().find(
        tema =>
            Number(tema.id) === Number(idTema)
    );

};


// ======================================
// BUSCAR CATEGORIA
// ======================================

function buscarCategoria(idTema, idCategoria) {

    const tema = buscarTema(idTema);

    if (!tema) return null;

    return (tema.categorias || []).find(
        categoria =>
            String(categoria.id) ===
            String(idCategoria)
    );

}


// ======================================
// BUSCAR SUBCATEGORIA
// ======================================

function buscarSubcategoria(
    idTema,
    idCategoria,
    idSubcategoria
) {

    const categoria =
        buscarCategoria(
            idTema,
            idCategoria
        );

    if (!categoria) return null;

    return (categoria.subcategorias || []).find(
        subcategoria =>
            String(subcategoria.id) ===
            String(idSubcategoria)
    );

}


// ======================================
// BUSCAR TIPO DE PRODUTO
// ======================================

function buscarTipoProduto(
    idTema,
    idCategoria,
    idSubcategoria,
    idTipo
) {

    const subcategoria =
        buscarSubcategoria(
            idTema,
            idCategoria,
            idSubcategoria
        );

    if (!subcategoria) return null;

    return (subcategoria.tiposProduto || []).find(
        tipo =>
            String(tipo.id) ===
            String(idTipo)
    );

}


// ======================================
// BUSCAR ATRIBUTO
// ======================================

function buscarAtributo(
    idTema,
    idCategoria,
    idSubcategoria,
    nomeAtributo,
    idTipo = null
) {

    const subcategoria =
        buscarSubcategoria(
            idTema,
            idCategoria,
            idSubcategoria
        );

    if (!subcategoria) return null;


    // ------------------------------
    // Procurar dentro de um tipo
    // ------------------------------

    if (idTipo) {

        const tipo =
            (subcategoria.tiposProduto || []).find(
                item =>
                    String(item.id) ===
                    String(idTipo)
            );

        if (!tipo) return null;

        return (tipo.atributos || []).find(
            atributo =>
                atributo.nome === nomeAtributo
        );

    }


    // ------------------------------
    // Compatibilidade
    // ------------------------------

    for (
        const tipo of
        (subcategoria.tiposProduto || [])
    ) {

        const atributo =
            (tipo.atributos || []).find(
                item =>
                    item.nome === nomeAtributo
            );

        if (atributo) {

            return atributo;

        }

    }

    return null;

}


// ======================================
// VERIFICAR ORIGEM
// ======================================

function itemDoSistema(item) {

    return item &&
        item.origem === "sistema";

}


function itemDoUsuario(item) {

    return item &&
        item.origem === "usuario";

}


// ======================================
// PODE EDITAR?
// ======================================

function podeEditar(item) {

    return itemDoUsuario(item);

}


// ======================================
// PODE EXCLUIR?
// ======================================

function podeExcluir(item) {

    return itemDoUsuario(item);

}


// ======================================
// SALVAR ESTRUTURA
// ======================================

function salvarEstrutura(temas) {

    if (!Array.isArray(temas)) {

        console.error(
            "salvarEstrutura: lista de temas inválida."
        );

        return false;

    }

    salvarTemas(temas);

    return true;

}


// ======================================
// TEMA SELECIONADO
// ======================================

window.obterTemaSelecionado = function() {

    return localStorage.getItem(
        "vitrinepro_tema_selecionado"
    );

};