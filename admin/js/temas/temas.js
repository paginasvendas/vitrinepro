// ======================================
// TEMAS
// ======================================

const listaTemas = document.getElementById("listaTemas");

function carregarTemas() {

    const temas = obterTemas();

    listaTemas.innerHTML = "";

    temas.forEach(tema => {

        listaTemas.innerHTML += `

            <div
                class="card-tema"
                data-id="${tema.id}"
            >

                <div class="icone">
                    ${tema.icone}
                </div>

                <h2>
                    ${tema.nome}
                </h2>

                <div class="info-tema">

                    <span>
                        <strong>
                            ${tema.categorias.length}
                        </strong>
                        Categorias
                    </span>

                    <span>
                        <strong>
                            ${contarSubcategorias(tema)}
                        </strong>
                        Subcategorias
                    </span>

                    <span>
                        <strong>
                            ${contarAtributos(tema)}
                        </strong>
                        Atributos
                    </span>

                </div>

            </div>

        `;

    });

}


// ======================================
// CONTADORES
// ======================================

function contarSubcategorias(tema) {

    let total = 0;

    tema.categorias.forEach(categoria => {

        total += (categoria.subcategorias || []).length;

    });

    return total;

}


function contarAtributos(tema) {

    let total = 0;

    tema.categorias.forEach(categoria => {

        categoria.subcategorias.forEach(sub => {

            total += (sub.atributos || []).length;

        });

    });

    return total;

}


// ======================================
// SELECIONAR TEMA
// ======================================

listaTemas.addEventListener("click", function(e) {

    const card = e.target.closest(".card-tema");

    if (!card) return;

    const idTema = Number(card.dataset.id);

    selecionarTema(idTema);

});

// ======================================
// CONTINUAR SELEÇÃO DO TEMA
// ======================================

function continuarSelecionandoTema(idTema) {

    const tema = buscarTema(idTema);

    if (!tema) return;


    // ======================================
    // SALVA O TEMA
    // ======================================

    salvarTemaSelecionado(idTema);


    console.log(
        "Tema selecionado:",
        tema.nome
    );


    // ======================================
    // DESTACA O TEMA SELECIONADO
    // ======================================

    document
        .querySelectorAll(".card-tema")
        .forEach(card => {

            card.classList.remove(
                "tema-selecionado"
            );

        });


    const cardSelecionado =
        document.querySelector(
            `.card-tema[data-id="${idTema}"]`
        );


    if (cardSelecionado) {

        cardSelecionado.classList.add(
            "tema-selecionado"
        );

    }


    // ======================================
    // MOSTRA A ESTRUTURA DO TEMA
    // ======================================

    mostrarEstruturaTema(tema);

}

// ======================================
// MOSTRAR TEMA
// ======================================

function selecionarTema(idTema) {

    const tema = buscarTema(idTema);

    if (!tema) return;


    // ======================================
    // VERIFICA TEMA ATUAL
    // ======================================

    const temaAtual =
        obterTemaSelecionado();


// ======================================
// SE ESTÁ TENTANDO ALTERAR O TEMA
// ======================================

if (
    temaAtual &&
    String(temaAtual) !== String(idTema)
) {

    mostrarModalConfirmacao(

        "Alterar tema",

        "Ao alterar o tema, todos os produtos e configurações cadastradas serão perdidos e não será possível recuperá-los. Deseja realmente alterar o tema?",

        function() {

            continuarSelecionandoTema(idTema);

        }

    );

    return;

}



    // ======================================
    // SALVA O TEMA
    // ======================================

    salvarTemaSelecionado(idTema);


    console.log(
        "Tema selecionado:",
        tema.nome
    );


    // ======================================
    // DESTACA O TEMA SELECIONADO
    // ======================================

    document
        .querySelectorAll(".card-tema")
        .forEach(card => {

            card.classList.remove(
                "tema-selecionado"
            );

        });


    const cardSelecionado =
        document.querySelector(
            `.card-tema[data-id="${idTema}"]`
        );


    if (cardSelecionado) {

        cardSelecionado.classList.add(
            "tema-selecionado"
        );

    }


    // ======================================
    // MOSTRA A ESTRUTURA DO TEMA
    // ======================================

    mostrarEstruturaTema(tema);

}




// ======================================
// INICIALIZA
// ======================================

carregarTemas();