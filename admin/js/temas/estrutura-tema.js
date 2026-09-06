// ======================================
// ESTRUTURA DO TEMA
// ======================================

function mostrarEstruturaTema(tema) {

    const area = document.getElementById("estruturaTema");

    if (!area) return;

        // ======================================
    // VERIFICA TEMA JÁ SELECIONADO
    // ======================================

    const temaSelecionado =
        localStorage.getItem(
            "vitrinepro_tema_selecionado"
        );

    const temaJaSelecionado =
        Number(temaSelecionado) === Number(tema.id);

    area.innerHTML = `

        <div class="estrutura-tema">

            <div class="estrutura-cabecalho">

                <h2>
                    ${tema.icone} ${tema.nome}
                </h2>

 ${
    temaJaSelecionado

    ?

    `
    <button
        type="button"
        class="btn-selecionar-tema tema-ja-selecionado"
        id="btnSelecionarTema"
        data-tema="${tema.id}"
        disabled
    >
        ✔ Tema selecionado
    </button>
    `

    :

    `
    <button
        type="button"
        class="btn-selecionar-tema"
        id="btnSelecionarTema"
        data-tema="${tema.id}"
    >
        💾 Selecionar este tema
    </button>
    `
}

            </div>


            <div class="estrutura-categorias">

                ${tema.categorias.map((categoria, indexCategoria) => `

                    <div
                        class="estrutura-categoria"
                        data-tema="${tema.id}"
                        data-categoria="${indexCategoria}"
                    >

                        <div class="estrutura-categoria-titulo">

                            <span class="estrutura-icone">
                                📁
                            </span>

                            <h3>
                                ${categoria.nome}
                            </h3>

                            ${
                                categoria.origem === "usuario"
                                    ? `
                                        <span class="badge-personalizado">
                                            Personalizado
                                        </span>
                                    `
                                    : `
                                        <span class="badge-sistema">
                                            Sistema
                                        </span>
                                    `
                            }

                        </div>


                        <div class="estrutura-subcategorias">

                            ${
                                (categoria.subcategorias || []).length === 0

                                ?

                                `
                                    <div class="estrutura-vazio">
                                        Nenhuma subcategoria cadastrada.
                                    </div>
                                `

                                :

                                categoria.subcategorias.map(
                                    (subcategoria, indexSubcategoria) => `

                                        <div
                                            class="estrutura-subcategoria"
                                            data-tema="${tema.id}"
                                            data-categoria="${indexCategoria}"
                                            data-subcategoria="${indexSubcategoria}"
                                        >

                                            <div class="estrutura-subcategoria-titulo">

                                                <span>
                                                    📂
                                                </span>

                                                <strong>
                                                    ${subcategoria.nome}
                                                </strong>

                                                ${
                                                    subcategoria.origem === "usuario"
                                                        ? `
                                                            <span class="badge-personalizado">
                                                                Personalizado
                                                            </span>
                                                        `
                                                        : `
                                                            <span class="badge-sistema">
                                                                Sistema
                                                            </span>
                                                        `
                                                }

                                            </div>


                                            <div class="estrutura-tipos">

                                                ${
                                                    (subcategoria.tiposProduto || []).length === 0

                                                    ?

                                                    `
                                                        <span class="estrutura-sem-tipos">
                                                            Nenhum tipo de produto cadastrado.
                                                        </span>
                                                    `

                                                    :

                                                    subcategoria.tiposProduto.map(
                                                        tipo => `

                                                            <div class="estrutura-tipo">

                                                                <span>
                                                                    🛍️
                                                                </span>

                                                                <span>
                                                                    ${tipo.nome}
                                                                </span>

                                                                ${
                                                                    tipo.origem === "usuario"
                                                                        ? `
                                                                            <span class="badge-personalizado">
                                                                                Personalizado
                                                                            </span>
                                                                        `
                                                                        : `
                                                                            <span class="badge-sistema">
                                                                                Sistema
                                                                            </span>
                                                                        `
                                                                }

                                                            </div>

                                                        `
                                                    ).join("")
                                                }

                                            </div>

                                        </div>

                                    `
                                ).join("")
                            }

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    `;


    // ======================================
    // CLIQUE EM SELECIONAR TEMA
    // ======================================

    const botao =
    document.getElementById("btnSelecionarTema");

if (botao) {

    botao.addEventListener("click", function() {

        const idTema =
            Number(this.dataset.tema);

        // ==================================
        // SALVA O TEMA SELECIONADO
        // ==================================

        localStorage.setItem(
            "vitrinepro_tema_selecionado",
            String(idTema)
        );

        console.log(
            "Tema selecionado:",
            idTema
        );


        // ==================================
        // ATUALIZA O BOTÃO
        // ==================================

        this.textContent = "✔ Tema selecionado";

        this.disabled = true;

        this.classList.add(
            "tema-selecionado"
        );


        // ==================================
        // MODAL DE SUCESSO
        // ==================================

        mostrarModal(

            "Tema selecionado",

            `O tema "${tema.nome}" foi selecionado com sucesso.`,

            "success"

        );

    });

}

}