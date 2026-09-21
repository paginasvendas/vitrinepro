    // ======================================
    // FORMULÁRIO DE PRODUTO
    // ======================================

    const formulario = {

        nome: document.getElementById("nomeProduto"),

        categoria: document.getElementById("categoriaProduto"),

        subcategoria: document.getElementById("subcategoriaProduto"),

        tipoProduto: document.getElementById("tipoProduto"),

        preco: document.getElementById("precoProduto"),

        promocao: document.getElementById("promocaoProduto"),

        custo: document.getElementById("custoProduto"),

        estoque: document.getElementById("estoqueProduto"),

        descricao: document.getElementById("descricaoProduto"),

        slug: document.getElementById("slugProduto"),

        tituloSeo: document.getElementById("tituloSeo"),

        descricaoSeo: document.getElementById("descricaoSeo"),

        destaque: document.getElementById("produtoDestaque"),

        ativo: document.getElementById("produtoAtivo"),

        imagens: document.getElementById("imagensProduto"),

        btnSalvar: document.getElementById("btnSalvarProduto")

    };


    // ======================================
    // OBTÉM TODOS OS DADOS DO FORMULÁRIO
    // ======================================

    // ======================================
// NOMES DA ESTRUTURA SELECIONADA
// ======================================

function obterCategoriaSelecionada() {

    const tema =
        obterTemaProdutoAtual();

    if (!tema) return null;


    return (tema.categorias || [])
        .find(categoria =>
            String(categoria.id) ===
            String(formulario.categoria.value)
        );

}


function obterSubcategoriaSelecionada() {

    const categoria =
        obterCategoriaSelecionada();

    if (!categoria) return null;


    return (categoria.subcategorias || [])
        .find(subcategoria =>
            String(subcategoria.id) ===
            String(formulario.subcategoria.value)
        );

}


function obterTipoSelecionado() {

    const subcategoria =
        obterSubcategoriaSelecionada();

    if (!subcategoria) return null;

    return (subcategoria.tiposProduto || [])
        .find(tipo =>
            String(tipo.id) ===
            String(formulario.tipoProduto.value)
        );

}


function obterNomeCategoriaSelecionada() {

    const categoria =
        obterCategoriaSelecionada();

    return categoria
        ? categoria.nome
        : "";

}


function obterNomeSubcategoriaSelecionada() {

    const subcategoria =
        obterSubcategoriaSelecionada();

    return subcategoria
        ? subcategoria.nome
        : "";

}


function obterNomeTipoSelecionado() {

    const tipo =
        obterTipoSelecionado();

    return tipo
        ? tipo.nome
        : "";

}

// ======================================
// OBTER ATRIBUTOS DO FORMULÁRIO
// ======================================

// ======================================
// OBTER ATRIBUTOS DO FORMULÁRIO
// ======================================

// ======================================
// OBTER ATRIBUTOS DO FORMULÁRIO
// ======================================

function obterAtributosFormulario() {

    const atributos = {};

    document
        .querySelectorAll(".grupo-atributo-produto")
        .forEach(grupo => {

            const nome =
                grupo.dataset.atributo;

            if (!nome) return;


            const nomeNormalizado =
                nome
                    .toLowerCase()
                    .trim();


            // ==================================
            // ATRIBUTOS DE TEXTO
            // ==================================

            const atributosTexto = [
                "cor",
                "cores",
                "material",
                "marca"
            ];


            if (atributosTexto.includes(nomeNormalizado)) {

                const campo =
                    grupo.querySelector(
                        'input[type="text"]'
                    );


                atributos[nome] =
                    campo
                        ? campo.value.trim()
                        : "";

                return;

            }


            // ==================================
            // ATRIBUTOS COM CHECKBOX
            // Inclui TAMANHO
            // ==================================

            const selecionados = [];


            grupo
                .querySelectorAll(
                    'input[type="checkbox"]:checked'
                )
                .forEach(checkbox => {

                    selecionados.push(
                        checkbox.value
                    );

                });


            atributos[nome] =
                selecionados;

        });


    return atributos;

}






 









    function obterDadosFormulario(){

        const idEdicao = Number(localStorage.getItem("produtoEditando"));

    const produtoExistente = idEdicao

        ? obterProdutos().find(p => p.id === idEdicao)

        : null;

        return {

    id: produtoExistente ? produtoExistente.id : Date.now(),

codigo: produtoExistente
    ? produtoExistente.codigo
    : "PROD-" + Math.floor(10000000 + Math.random() * 90000000),

        nome: formulario.nome.value.trim(),

        slug: formulario.slug.value.trim(),

categoria: obterNomeCategoriaSelecionada(),

subcategoria: obterNomeSubcategoriaSelecionada(),

tipoProduto: obterNomeTipoSelecionado(),

categoriaId: formulario.categoria.value,

subcategoriaId: formulario.subcategoria.value,

tipoProdutoId: formulario.tipoProduto.value,

    atributos: obterAtributosFormulario(),

        descricao: formulario.descricao.value.trim(),

        preco: Number(formulario.preco.value),

        promocao: Number(formulario.promocao.value),

        custo: Number(formulario.custo.value),

        estoque: Number(formulario.estoque.value),

        ativo: formulario.ativo.checked,

        destaque: formulario.destaque.checked,

        imagem: imagemBase64,

        imagens: [],

        imagemPrincipal: 0,


        criadoEm: produtoExistente

        ? produtoExistente.criadoEm

        : new Date().toLocaleDateString("pt-BR"),

        atualizadoEm: new Date().toLocaleDateString("pt-BR"),

        seo: {

            titulo: formulario.tituloSeo.value.trim(),

            descricao: formulario.descricaoSeo.value.trim()

        }

    };

    }

formulario.btnSalvar.addEventListener("click", () => {

    const produto = obterDadosFormulario();

    console.log("PRODUTO PARA SALVAR:", produto);

    if (!validarProduto(produto)) {
        console.log("VALIDAÇÃO DO PRODUTO FALHOU");
        return;
    }



    // Verifica se está editando um produto
    const idEdicao = localStorage.getItem("produtoEditando");

    if(idEdicao){

        produto.id = Number(idEdicao);

        atualizarProduto(produto);

        localStorage.removeItem("produtoEditando");

    }else{

        adicionarProduto(produto);

    }

        // Modal de sucesso
        mostrarModal(
            "Produto salvo",
            "Produto cadastrado com sucesso!",
            "success"
        );

        // Limpa o formulário
        limparFormulario();

    });

// ======================================
// ESTRUTURA DO TEMA
// ======================================

function obterTemaProdutoAtual() {

    const idTema = obterTemaSelecionado();

    if (!idTema) {
        return null;
    }

    return buscarTema(Number(idTema));
}


// ======================================
// CARREGAR CATEGORIAS DO TEMA
// ======================================

function carregarCategoriasProduto() {

    const select = formulario.categoria;

    if (!select) return;

    select.innerHTML = "";

    const opcao = document.createElement("option");

    opcao.value = "";

    opcao.textContent = "Selecione uma categoria";

    select.appendChild(opcao);


    const tema = obterTemaProdutoAtual();

    if (!tema) {
        return;
    }


    const categorias = tema.categorias || [];


    categorias.forEach(categoria => {

        // Categoria inativa não aparece
        if (categoria.ativo === false) {
            return;
        }

        const option = document.createElement("option");

        option.value = String(categoria.id);

        option.textContent = categoria.nome;

        select.appendChild(option);

    });

}

// ======================================
// CARREGAR subCATEGORIAS DO TEMA
// ======================================

function carregarSubcategoriasProduto() {

    const select =
        formulario.subcategoria;

    if (!select) return;

    select.innerHTML = `
        <option value="">
            Selecione uma subcategoria
        </option>
    `;

    select.disabled = true;

    const tema =
        obterTemaProdutoAtual();

    if (!tema) return;


    const categoria =
        (tema.categorias || [])
            .find(categoria =>
                String(categoria.id) ===
                String(formulario.categoria.value)
            );


    if (!categoria) return;


    const subcategorias =
        categoria.subcategorias || [];


    subcategorias.forEach(subcategoria => {

        if (subcategoria.ativo === false) {
            return;
        }

        const option =
            document.createElement("option");

        option.value =
            subcategoria.id;

        option.textContent =
            subcategoria.nome;

        select.appendChild(option);

    });


    // HABILITA SUBCATEGORIA
    if (subcategorias.length > 0) {

        select.disabled = false;

    }

}
 





// ======================================
// CARREGAR TIPOS DE PRODUTO
// ======================================

function carregarTiposProduto() {

    const select =
        formulario.tipoProduto;

    if (!select) return;


    select.innerHTML = `
        <option value="">
            Selecione um tipo de produto
        </option>
    `;

    select.disabled = true;


    const tema =
        obterTemaProdutoAtual();

    if (!tema) return;


    const categoria =
        (tema.categorias || [])
            .find(categoria =>
                String(categoria.id) ===
                String(formulario.categoria.value)
            );


    if (!categoria) return;


    const subcategoria =
        (categoria.subcategorias || [])
            .find(subcategoria =>
                String(subcategoria.id) ===
                String(formulario.subcategoria.value)
            );


    if (!subcategoria) return;


    // IMPORTANTE:
    // No banco o nome é tiposProduto
    const tipos =
        subcategoria.tiposProduto || [];


    tipos.forEach(tipo => {

        if (tipo.ativo === false) {
            return;
        }

        const option =
            document.createElement("option");

        option.value =
            tipo.id;

        option.textContent =
            tipo.nome;

        select.appendChild(option);

    });
select.disabled = false;

    // HABILITA TIPO DE PRODUTO
    if (tipos.length > 0) {

        select.disabled = false;

    }

}







// ======================================
// MUDOU A CATEGORIA
// ======================================

if (formulario.categoria) {

    formulario.categoria.addEventListener(
        "change",
        function() {

            // Carrega as subcategorias da categoria escolhida
            carregarSubcategoriasProduto();


            // Reseta o tipo de produto
            if (formulario.tipoProduto) {

                formulario.tipoProduto.innerHTML = `
                    <option value="">
                        Selecione uma subcategoria
                    </option>
                `;

                formulario.tipoProduto.disabled = true;

            }


            carregarAtributosProduto();

            

        }
    );

}


// ======================================
// MUDOU A SUBCATEGORIA
// ======================================

if (formulario.subcategoria) {

    formulario.subcategoria.addEventListener("change", function() {

        carregarTiposProduto();

        const atributos =
            document.getElementById("atributosProduto");

        if (atributos) {

            atributos.innerHTML = `
                <p class="atributos-vazio">
                    Selecione um tipo de produto para visualizar os atributos.
                </p>
            `;

        }

    });

}


// ======================================
// MUDOU O TIPO DE PRODUTO
// ======================================

if (formulario.tipoProduto) {

    formulario.tipoProduto.addEventListener("change", function() {

        carregarAtributosProduto();

    });

}














// ======================================
// INICIALIZAR
// ======================================

carregarCategoriasProduto();

// ======================================
// CARREGAR ATRIBUTOS DO TIPO
// ======================================

function carregarAtributosProduto() {

    const container =
        document.getElementById("atributosProduto");

    if (!container) return;


    container.innerHTML = "";


    const tema =
        obterTemaProdutoAtual();

    if (!tema) {

        container.innerHTML = `
            <p class="atributos-vazio">
                Nenhum tema selecionado.
            </p>
        `;

        return;

    }


    const categoria =
        (tema.categorias || [])
            .find(categoria =>
                String(categoria.id) ===
                String(formulario.categoria.value)
            );


    if (!categoria) {

        container.innerHTML = `
            <p class="atributos-vazio">
                Selecione uma categoria.
            </p>
        `;

        return;

    }


    const subcategoria =
        (categoria.subcategorias || [])
            .find(subcategoria =>
                String(subcategoria.id) ===
                String(formulario.subcategoria.value)
            );


    if (!subcategoria) {

        container.innerHTML = `
            <p class="atributos-vazio">
                Selecione uma subcategoria.
            </p>
        `;

        return;

    }


    const tipo =
        (subcategoria.tiposProduto || [])
            .find(tipo =>
                String(tipo.id) ===
                String(formulario.tipoProduto.value)
            );


    if (!tipo) {

        container.innerHTML = `
            <p class="atributos-vazio">
                Selecione um tipo de produto.
            </p>
        `;

        return;

    }


    const atributos =
        tipo.atributos || [];


    if (atributos.length === 0) {

        container.innerHTML = `
            <p class="atributos-vazio">
                Este tipo de produto não possui atributos cadastrados.
            </p>
        `;

        return;

    }


atributos.forEach((atributo, index) => {

    const nome =
        typeof atributo === "string"
            ? atributo
            : atributo.nome;


    if (!nome) return;


    const valores =
        typeof atributo === "object"
            ? (atributo.valores || [])
            : [];


    const campo =
        document.createElement("div");

    campo.className =
        "grupo-atributo-produto";

    campo.dataset.atributo =
        nome;

    let html = `

        <div class="atributo-titulo">

            <strong>
                ${nome}
            </strong>

        </div>

        <div class="atributo-opcoes">
    `;


// ==================================
// VALORES DO ATRIBUTO
// ==================================

const atributosTexto = [
    "cor",
    "cores",
    "material",
    "marca"
];


const nomeNormalizado =
    nome
        .toLowerCase()
        .trim();


// ==================================
// ATRIBUTOS DE TEXTO
// ==================================

if (atributosTexto.includes(nomeNormalizado)) {

    html += `

        <input

            type="text"

            class="atributo-produto atributo-texto"

            data-atributo="${nome}"

            placeholder="Informe ${nome.toLowerCase()}"

        >

    `;

}


// ==================================
// ATRIBUTOS COM CHECKBOX
// ==================================

else if (valores.length === 0) {

    html += `

        <p class="atributo-sem-valores">

            Nenhum valor cadastrado para
            este atributo.

        </p>

    `;

}


else {

    valores.forEach((valor, indexValor) => {

        const texto =
            typeof valor === "string"
                ? valor
                : valor.nome;


        if (!texto) return;


        html += `

            <label class="opcao-atributo">

                <input

                    type="checkbox"

                    class="atributo-produto"

                    name="atributo-${index}"

                    data-atributo="${nome}"

                    value="${texto}"

                >

                <span>
                    ${texto}
                </span>

            </label>

        `;

    });

}





    html += `

        </div>

    `;


    campo.innerHTML = html;

    container.appendChild(campo);

});

}



    // ======================================
    // LIMPAR FORMULÁRIO
    // ======================================

    function limparFormulario() {

        formulario.nome.value = "";

        formulario.categoria.selectedIndex = 0;

            formulario.subcategoria.innerHTML = `
        <option value="">
            Selecione uma subcategoria
        </option>
    `;

    formulario.tipoProduto.innerHTML = `
        <option value="">
            Selecione um tipo de produto
        </option>
    `;



        formulario.preco.value = "";

        formulario.promocao.value = "";

        formulario.custo.value = "";

        formulario.estoque.value = "";

        formulario.descricao.value = "";

        formulario.slug.value = "";

        formulario.tituloSeo.value = "";

        formulario.descricaoSeo.value = "";

        formulario.imagens.value = "";

        formulario.destaque.checked = false;

        formulario.ativo.checked = true;



        // Limpa preview das imagens
        const preview = document.getElementById("previewImagens");

        if (preview) {
            preview.innerHTML = "";
        }

        imagemBase64 = "../img/sem-imagem.png";

            const atributos =
        document.getElementById("atributosProduto");

    if (atributos) {

        atributos.innerHTML = `
            <p class="atributos-vazio">
                Selecione um tipo de produto para visualizar os atributos.
            </p>
        `;

    }

        // Sai do modo edição
        localStorage.removeItem("produtoEditando");

        // Volta o botão para "Salvar Produto"
        formulario.btnSalvar.textContent = "Salvar Produto";

        // Coloca o cursor novamente no nome
        formulario.nome.focus();

    }

    console.log("Formulário carregado.");

// ======================================
// CARREGAR PRODUTO PARA EDIÇÃO
// ======================================

function carregarProdutoEdicao(){

    const id = Number(
        localStorage.getItem("produtoEditando")
    );

    if (!id) return;


    const produtos = obterProdutos();

    const produto =
        produtos.find(p => p.id === id);


    if (!produto) return;


    // ==================================
    // DADOS BÁSICOS
    // ==================================

    formulario.nome.value =
        produto.nome || "";

    formulario.slug.value =
        produto.slug || "";

    formulario.preco.value =
        produto.preco || "";

    formulario.promocao.value =
        produto.promocao || "";

        formulario.custo.value =
    produto.custo || "";

    formulario.estoque.value =
        produto.estoque || "";

    formulario.descricao.value =
        produto.descricao || "";

    formulario.destaque.checked =
        produto.destaque === true;

    formulario.ativo.checked =
        produto.ativo !== false;


    // ==================================
    // SEO
    // ==================================

    if (produto.seo) {

        formulario.tituloSeo.value =
            produto.seo.titulo || "";

        formulario.descricaoSeo.value =
            produto.seo.descricao || "";

    }


    // ==================================
    // IMAGEM
    // ==================================

    imagemBase64 =
        produto.imagem ||
        "../img/sem-imagem.png";


    const preview =
        document.getElementById("previewImagens");


    if (preview) {

        preview.innerHTML = `

            <img
                src="${imagemBase64}"
                style="
                    width:150px;
                    border-radius:12px;
                    object-fit:cover;
                "
            >

        `;

    }


    // ==================================
    // CATEGORIA
    // ==================================

    /*
     * As opções do select usam o ID da categoria.
     *
     * Por isso NÃO usamos:
     *
     * formulario.categoria.value = produto.categoria;
     *
     * Usamos categoriaId.
     */

    if (produto.categoriaId) {

        formulario.categoria.value =
            produto.categoriaId;

    } else {

        // Compatibilidade com produtos antigos
        const tema =
            obterTemaProdutoAtual();

        if (tema) {

            const categoria =
                (tema.categorias || [])
                    .find(c =>
                        c.nome === produto.categoria
                    );

            if (categoria) {

                formulario.categoria.value =
                    categoria.id;

            }

        }

    }


    // ==================================
    // CARREGAR SUBCATEGORIAS
    // ==================================

    carregarSubcategoriasProduto();

    formulario.subcategoria.disabled = false;


    // ==================================
    // SELECIONAR SUBCATEGORIA
    // ==================================

    if (produto.subcategoriaId) {

        formulario.subcategoria.value =
            produto.subcategoriaId;

    } else {

        // Compatibilidade com produtos antigos

        const categoria =
            obterCategoriaSelecionada();

        if (categoria) {

            const subcategoria =
                (categoria.subcategorias || [])
                    .find(sub =>
                        sub.nome ===
                        produto.subcategoria
                    );

            if (subcategoria) {

                formulario.subcategoria.value =
                    subcategoria.id;

            }

        }

    }


    // ==================================
    // CARREGAR TIPOS
    // ==================================

    carregarTiposProduto();

    formulario.tipoProduto.disabled = false;


    // ==================================
    // SELECIONAR TIPO
    // ==================================

    if (produto.tipoProdutoId) {

        formulario.tipoProduto.value =
            produto.tipoProdutoId;

    } else {

        // Compatibilidade com produtos antigos

        const subcategoria =
            obterSubcategoriaSelecionada();

        if (subcategoria) {

            const tipo =
                (subcategoria.tiposProduto || [])
                    .find(t =>
                        t.nome ===
                        produto.tipoProduto
                    );

            if (tipo) {

                formulario.tipoProduto.value =
                    tipo.id;

            }

        }

    }


    // ==================================
    // CARREGAR ATRIBUTOS
    // ==================================

    carregarAtributosProduto();

    // ==================================
// MARCAR ATRIBUTOS SALVOS
// ==================================

if (produto.atributos) {

    document
        .querySelectorAll(
            '.grupo-atributo-produto input[type="checkbox"]'
        )
        .forEach(checkbox => {

            const nomeAtributo =
                checkbox
                    .closest(".grupo-atributo-produto")
                    ?.dataset.atributo;

            if (!nomeAtributo) return;


            const valoresSalvos =
                produto.atributos[nomeAtributo];


            if (!Array.isArray(valoresSalvos)) return;


            checkbox.checked =
                valoresSalvos.includes(
                    checkbox.value
                );

        });

}



    // ==================================
    // BOTÃO
    // ==================================

    formulario.btnSalvar.textContent =
        "Atualizar Produto";

}


// ======================================
// INICIAR EDIÇÃO
// ======================================

carregarProdutoEdicao();

    