// ======================================
// CATEGORIAS DO TEMA
// ======================================

const tabela = document.getElementById("listaCategorias");


// ======================================
// TEMA SELECIONADO
// ======================================

function obterTemaAtual() {

    const idTema = obterTemaSelecionado();

    if (!idTema) {
        return null;
    }

    return buscarTema(Number(idTema));
}


// ======================================
// BADGE DA ORIGEM
// ======================================

function badgeOrigem(categoria) {

    if (categoria.origem === "sistema") {

        return `
            <span class="badge badge-secondary">
                Sistema
            </span>
        `;

    }

    return `
        <span class="badge badge-success">
            Personalizado
        </span>
    `;

}


// ======================================
// LISTAR CATEGORIAS
// ======================================

// ======================================
// LISTAR CATEGORIAS
// ======================================

function carregarCategorias() {

    if (!tabela) return;

    tabela.innerHTML = "";

    const tema = obterTemaAtual();

    if (!tema) {

        tabela.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    style="text-align:center;padding:40px;"
                >
                    Nenhum tema selecionado.
                </td>
            </tr>
        `;

        return;
    }

    const categorias = tema.categorias || [];

    // ==================================
    // NENHUMA CATEGORIA
    // ==================================

    if (categorias.length === 0) {

        tabela.innerHTML = `
            <tr>
                <td
                    colspan="7"
                    style="text-align:center;padding:40px;"
                >
                    Nenhuma categoria cadastrada.
                </td>
            </tr>
        `;

        return;
    }

    // ==================================
    // MONTAR TABELA
    // ==================================

    categorias.forEach((categoria, indexCategoria) => {

        const acoes = categoria.origem === "usuario"
    ? `
        <button
            type="button"
            class="btn-editar"
            data-index="${indexCategoria}"
            title="Editar categoria"
        >
            <i class="fa-solid fa-pen"></i>
        </button>

        <button
            type="button"
            class="btn-excluir"
            data-index="${indexCategoria}"
            title="Excluir categoria"
        >
            <i class="fa-solid fa-trash"></i>
        </button>
    `
    : `
        <span
            class="categoria-bloqueada"
            title="Categoria do sistema"
        >
            <i class="fa-solid fa-lock"></i>
        </span>
    `;

        const subcategorias =
            categoria.subcategorias || [];

        // ----------------------------------
        // Categoria sem subcategoria
        // ----------------------------------

        if (subcategorias.length === 0) {

            tabela.innerHTML += `
                <tr>

                    <td>
                        ${categoria.nome}
                    </td>

                    <td>
                        —
                    </td>

                    <td>
                        —
                    </td>

                    <td>
    ${gerarSlug(categoria.nome)}
</td>

<td>
    ${
        categoria.ativo !== false
            ? `
                <span class="badge badge-success">
                    Ativa
                </span>
            `
            : `
                <span class="badge badge-secondary">
                    Inativa
                </span>
            `
    }
</td>

<td>

    ${
        categoria.origem === "sistema"

                                ? `
                                    <span class="badge badge-secondary">
                                        Sistema
                                    </span>
                                `

                                : `
                                    <span class="badge badge-success">
                                        Personalizado
                                    </span>
                                `
                        }

                    </td>

                    <td class="acoes-categoria">
    ${acoes}
</td>

                </tr>
            `;

            return;
        }

        // ----------------------------------
        // Percorrer subcategorias
        // ----------------------------------

        subcategorias.forEach(subcategoria => {

const tipos =
    subcategoria.tiposProduto || [];

            // ----------------------------------
            // Subcategoria sem tipos
            // ----------------------------------

            if (tipos.length === 0) {

                tabela.innerHTML += `
                    <tr>

                        <td>
                            ${categoria.nome}
                        </td>

                        <td>
                            ${subcategoria.nome}
                        </td>

                        <td>
                            —
                        </td>

<td>
    ${gerarSlug(categoria.nome)}
</td>

<td>
    ${
        categoria.ativo !== false
            ? `
                <span class="badge badge-success">
                    Ativa
                </span>
            `
            : `
                <span class="badge badge-secondary">
                    Inativa
                </span>
            `
    }
</td>

<td>

    ${
        categoria.origem === "sistema"

                                    ? `
                                        <span class="badge badge-secondary">
                                            Sistema
                                        </span>
                                    `

                                    : `
                                        <span class="badge badge-success">
                                            Personalizado
                                        </span>
                                    `
                            }

                        </td>

                        <td class="acoes-categoria">
    ${acoes}
</td>

                    </tr>
                `;

                return;
            }

            // ----------------------------------
            // Um tipo = uma linha
            // ----------------------------------

            tipos.forEach(tipo => {

                tabela.innerHTML += `
                    <tr>

                        <td>
                            ${categoria.nome}
                        </td>

                        <td>
                            ${subcategoria.nome}
                        </td>

                        <td>
                            ${tipo.nome}
                        </td>

<td>
    ${gerarSlug(categoria.nome)}
</td>

<td>
    ${
        categoria.ativo !== false
            ? `
                <span class="badge badge-success">
                    Ativa
                </span>
            `
            : `
                <span class="badge badge-secondary">
                    Inativa
                </span>
            `
    }
</td>

<td>

    ${
        categoria.origem === "sistema"

                                    ? `
                                        <span class="badge badge-secondary">
                                            Sistema
                                        </span>
                                    `

                                    : `
                                        <span class="badge badge-success">
                                            Personalizado
                                        </span>
                                    `
                            }

                        </td>

                        <td class="acoes-categoria">
    ${acoes}
</td>

                    </tr>
                `;

            });

        });

    });

}   


// ======================================
// GERAR SLUG
// ======================================

function gerarSlug(texto) {

    return String(texto)

        .normalize("NFD")

        .replace(/[\u0300-\u036f]/g, "")

        .toLowerCase()

        .trim()

        .replace(/\s+/g, "-")

        .replace(/[^a-z0-9-]/g, "");

}


// ======================================
// INICIALIZA
// ======================================

carregarCategorias();


// ======================================
// MODAL
// ======================================

const modal =
    document.getElementById("modalCategoria");


const btnCancelar =
    document.getElementById(
        "btnCancelarCategoria"
    );


if (btnCancelar) {

    btnCancelar.onclick = function() {

        categoriaEditando = null;

        limparFormularioCategoria();

        modal.classList.remove("active");

    };

}



// ======================================
// NOVA CATEGORIA
// ======================================

const btnNovaCategoria =
    document.getElementById("btnNovaCategoria");

if (btnNovaCategoria) {

    btnNovaCategoria.addEventListener("click", function () {

        console.log("Clique em Nova Categoria");

        const tema = obterTemaAtual();

        console.log("Tema atual:", tema);


        // ==============================
        // VERIFICAR TEMA
        // ==============================

        if (!tema) {

            mostrarModal(
                "Nenhum tema selecionado",
                "Selecione um tema antes de criar uma categoria.",
                "warning"
            );

            return;
        }


        // ==============================
        // PREPARAR FORMULÁRIO
        // ==============================

        categoriaEditando = null;

        limparFormularioCategoria();


        // ==============================
        // ABRIR MODAL
        // ==============================

        if (!modal) {

            console.error(
                "Modal de categoria não encontrado: #modalCategoria"
            );

            return;
        }

        modal.classList.add("active");

    });

}


// ======================================
// FECHAR MODAL CLICANDO FORA
// ======================================

if (modal) {

    modal.onclick = function(e) {

        if (e.target === modal) {

            categoriaEditando = null;

            limparFormularioCategoria();

            modal.classList.remove("active");

        }

    };

}


// ======================================
// CATEGORIA SENDO EDITADA
// ======================================

let categoriaEditando = null;


// ======================================
// SALVAR CATEGORIA
// ======================================

const btnSalvarCategoria =
    document.getElementById(
        "btnSalvarCategoria"
    );


if (btnSalvarCategoria) {

    btnSalvarCategoria.onclick = function() {

        const nome =
            document.getElementById(
                "nomeCategoria"
            ).value.trim();

        const nomeSubcategoria =
            document.getElementById(
                "nomeSubcategoria"
            ).value.trim();

        const tiposTexto =
            document.getElementById(
                "tiposdeProdutos"
            ).value.trim();


        // ==================================
        // VALIDAR NOME
        // ==================================

        if (nome === "") {

            mostrarModal(
                "Campo obrigatório",
                "Informe o nome da categoria.",
                "warning"
            );

            return;

        }


        // ==================================
        // VALIDAR SUBCATEGORIA
        // ==================================

        if (nomeSubcategoria === "") {

            mostrarModal(
                "Campo obrigatório",
                "Informe o nome da subcategoria.",
                "warning"
            );

            return;

        }


        // ==================================
        // VALIDAR TIPOS
        // ==================================

        if (tiposTexto === "") {

            mostrarModal(
                "Campo obrigatório",
                "Informe pelo menos um tipo de produto.",
                "warning"
            );

            return;

        }


        // ==================================
        // TEMA
        // ==================================

        const idTema =
            obterTemaSelecionado();

        if (!idTema) {

            mostrarModal(
                "Nenhum tema selecionado",
                "Selecione um tema antes de salvar a categoria.",
                "warning"
            );

            return;

        }


        const temas =
            obterTemas();


        const tema =
            temas.find(
                item =>
                    Number(item.id) ===
                    Number(idTema)
            );


        if (!tema) {

            mostrarModal(
                "Tema não encontrado",
                "Não foi possível localizar o tema selecionado.",
                "warning"
            );

            return;

        }


        if (!Array.isArray(tema.categorias)) {

            tema.categorias = [];

        }


        // ==================================
        // VERIFICAR DUPLICIDADE
        // ==================================

        const existe =
            tema.categorias.some(
                (categoria, index) => {

                    if (
                        categoria.nome.toLowerCase() !==
                        nome.toLowerCase()
                    ) {

                        return false;

                    }

                    if (
                        categoriaEditando === null
                    ) {

                        return true;

                    }

                    return index !== categoriaEditando;

                }
            );


        if (existe) {

            mostrarModal(
                "Categoria existente",
                "Já existe uma categoria com este nome neste tema.",
                "warning"
            );

            return;

        }


        // ==================================
        // TIPOS
        // ==================================

        const nomesTipos =
            tiposTexto
                .split(",")
                .map(tipo => tipo.trim())
                .filter(tipo => tipo !== "");


        // ==================================
        // NOVA CATEGORIA
        // ==================================

        if (categoriaEditando === null) {

            const agora = Date.now();


            const tipos =
                nomesTipos.map(
                    (nomeTipo, index) => ({

                        id:
                            `${tema.id}-tipo-${agora}-${index}`,

                        nome:
                            nomeTipo,

                        origem:
                            "usuario",

                        atributos:
                            []

                    })
                );


const subcategoria = {

    id:
        `${tema.id}-subcategoria-${agora}`,

    nome:
        nomeSubcategoria,

    origem:
        "usuario",

    tiposProduto:
        tipos

};

const novaCategoria = {

    id:
        `${tema.id}-categoria-${Date.now()}`,

    nome:
        nome,

    origem:
        "usuario",

    ativo:
        document.getElementById("categoriaAtiva")?.checked ?? true,

    subcategorias: [
        subcategoria
    ]

};


            tema.categorias.push(
                novaCategoria
            );


            salvarTemas(temas);


            categoriaEditando = null;

            limparFormularioCategoria();

            modal.classList.remove("active");

            carregarCategorias();


            mostrarModal(
                "Categoria criada",
                `A categoria "${nome}" foi criada com sucesso.`,
                "success"
            );

            return;

        }


        // ==================================
        // EDITAR CATEGORIA
        // ==================================

        const categoria =
            tema.categorias[
                categoriaEditando
            ];


        if (!categoria) {

            return;

        }


        if (
            categoria.origem !== "usuario"
        ) {

            mostrarModal(
                "Categoria protegida",
                "Categorias do sistema não podem ser editadas.",
                "warning"
            );

            return;

        }


        // ==================================
        // ATUALIZAR CATEGORIA
        // ==================================

        categoria.nome = nome;

        categoria.ativo =
    document.getElementById("categoriaAtiva")?.checked ?? true;


        if (
            !Array.isArray(
                categoria.subcategorias
            )
        ) {

            categoria.subcategorias = [];

        }


        let subcategoria =
            categoria.subcategorias[0];


        if (!subcategoria) {

            subcategoria = {

                id:
                    `${tema.id}-subcategoria-${Date.now()}`,

                nome:
                    nomeSubcategoria,

                origem:
                    "usuario",

                tipos:
                    []

            };


            categoria.subcategorias.push(
                subcategoria
            );

        }


        subcategoria.nome =
            nomeSubcategoria;


        // ==================================
        // ATUALIZAR TIPOS
        // ==================================

const tiposAntigos =
    Array.isArray(
        subcategoria.tiposProduto
    )
        ? subcategoria.tiposProduto
        : [];


        subcategoria.tiposProduto =
            nomesTipos.map(
                (nomeTipo, index) => {

                    const tipoAntigo =
                        tiposAntigos[index];


                    return {

                        id:
                            tipoAntigo
                                ? tipoAntigo.id
                                : `${tema.id}-tipo-${Date.now()}-${index}`,

                        nome:
                            nomeTipo,

                        origem:
                            "usuario",

                        atributos:
                            tipoAntigo
                                ? (
                                    tipoAntigo.atributos || []
                                )
                                : []

                    };

                }
            );


        // ==================================
        // SALVAR
        // ==================================

        salvarTemas(temas);


        categoriaEditando = null;

        limparFormularioCategoria();

        modal.classList.remove("active");

        carregarCategorias();


        mostrarModal(
            "Categoria atualizada",
            `A categoria "${nome}" foi atualizada com sucesso.`,
            "success"
        );

    };

}
// ======================================
// LIMPAR FORMULÁRIO
// ======================================

function limparFormularioCategoria() {

    const campoNome =
        document.getElementById("nomeCategoria");


    if (campoNome) {

        campoNome.value = "";

    }


    const campoSubcategoria =
        document.getElementById("nomeSubcategoria");


    if (campoSubcategoria) {

        campoSubcategoria.value = "";

    }


    const campoTipos =
        document.getElementById("tiposdeProdutos");


    if (campoTipos) {

        campoTipos.value = "";

    }


    const campoSlug =
        document.getElementById("slugCategoria");


    if (campoSlug) {

        campoSlug.value = "";

    }


    const ativo =
        document.getElementById("categoriaAtiva");


    if (ativo) {

        ativo.checked = true;

    }

}


// ======================================
// EDITAR CATEGORIA
// ======================================

if (tabela) {

    tabela.addEventListener(
        "click",
        function(e) {

            const btnEditar =
                e.target.closest(".btn-editar");


            if (!btnEditar) {

                return;

            }


            const index =
                Number(btnEditar.dataset.index);


            editarCategoria(index);

        }
    );

}


function editarCategoria(index) {

    const tema = obterTemaAtual();


    if (!tema) {

        return;

    }


    const categoria =
        tema.categorias[index];


    if (!categoria) {

        return;

    }


    // ==================================
    // PROTEÇÃO DO SISTEMA
    // ==================================

    if (categoria.origem !== "usuario") {

        mostrarModal(

            "Categoria protegida",

            "Categorias do sistema não podem ser editadas.",

            "warning"

        );

        return;

    }


    categoriaEditando = index;


    document.getElementById(
    "nomeCategoria"
).value = categoria.nome;

const campoAtivo =
    document.getElementById("categoriaAtiva");

if (campoAtivo) {

    campoAtivo.checked =
        categoria.ativo !== false;

}

// ==================================
// SUBCATEGORIA
// ==================================

const campoSubcategoria =
    document.getElementById(
        "nomeSubcategoria"
    );


const subcategoria =
    (categoria.subcategorias || [])[0];


if (campoSubcategoria) {

    campoSubcategoria.value =
        subcategoria
            ? subcategoria.nome
            : "";

}


// ==================================
// TIPOS DE PRODUTOS
// ==================================

const campoTipos =
    document.getElementById(
        "tiposdeProdutos"
    );


if (campoTipos) {

    campoTipos.value =
        subcategoria

            ? (subcategoria.tiposProduto || [])
                .map(tipo => tipo.nome)
                .join(", ")

            : "";

}


// ==================================
// SLUG
// ==================================

const campoSlug =
    document.getElementById(
        "slugCategoria"
    );


if (campoSlug) {

    campoSlug.value =
        gerarSlug(categoria.nome);

}


modal.classList.add("active");

}


// ======================================
// EXCLUIR CATEGORIA
// ======================================

if (tabela) {

    tabela.addEventListener(
        "click",
        function(e) {

            const btnExcluir =
                e.target.closest(
                    ".btn-excluir"
                );


            if (!btnExcluir) {

                return;

            }


            const index =
                Number(
                    btnExcluir.dataset.index
                );


            confirmarExclusaoCategoria(
                index
            );

        }
    );

}


function confirmarExclusaoCategoria(index) {

    const idTema =
        obterTemaSelecionado();


    if (!idTema) {

        return;

    }


    const temas =
        obterTemas();


    const tema =
        temas.find(
            item =>
                Number(item.id) ===
                Number(idTema)
        );


    if (!tema) {

        return;

    }


    if (!Array.isArray(tema.categorias)) {

        return;

    }


    const categoria =
        tema.categorias[index];


    if (!categoria) {

        return;

    }


    if (
        categoria.origem !== "usuario"
    ) {

        mostrarModal(
            "Categoria protegida",
            "Categorias do sistema não podem ser excluídas.",
            "warning"
        );

        return;

    }


    mostrarModalConfirmacao(

        "Excluir categoria",

        `Deseja realmente excluir a categoria "${categoria.nome}"?`,

        function() {

            tema.categorias.splice(
                index,
                1
            );


            salvarTemas(temas);


            carregarCategorias();


            mostrarModal(
                "Categoria excluída",
                "A categoria foi excluída com sucesso.",
                "success"
            );

        }

    );

}

// ======================================
// PESQUISA
// ======================================

const pesquisa =
    document.getElementById(
        "pesquisaCategoria"
    );

if (pesquisa) {

    pesquisa.addEventListener(
        "input",
        function() {

            const texto =
                this.value
                    .toLowerCase()
                    .trim();

            const linhas =
                tabela.querySelectorAll("tr");

            linhas.forEach(linha => {

                const conteudo =
                    linha.textContent
                        .toLowerCase();

                linha.style.display =
                    conteudo.includes(texto)
                        ? ""
                        : "none";

            });

        }
    );

}

// ======================================
// SLUG AUTOMÁTICO
// ======================================

const campoNome =
    document.getElementById(
        "nomeCategoria"
    );


const campoSlug =
    document.getElementById(
        "slugCategoria"
    );


if (campoNome && campoSlug) {

    campoNome.addEventListener(
        "input",
        function() {

            campoSlug.value =
                gerarSlug(this.value);

        }
    );

}