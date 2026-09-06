// ======================================
// LOCAL STORAGE - TEMAS
// ======================================

const CHAVE_TEMAS = "vitrinepro_temas";

// ======================================
// OBTER TEMAS
// ======================================

function obterTemas() {

    return JSON.parse(
        localStorage.getItem(CHAVE_TEMAS)
    ) || [];

}

// ======================================
// SALVAR TEMAS
// ======================================

function salvarTemas(temas) {

    localStorage.setItem(
        CHAVE_TEMAS,
        JSON.stringify(temas)
    );

}

// ======================================
// ESTRUTURA PADRÃO
// ======================================

const temasPadrao = [

    // ==================================
    // MODA
    // ==================================

    {

        id: 1,

        nome: "Moda",

        icone: "👕",

        categorias: [

            {

                id: "moda-feminino",

                nome: "Feminino",

                origem: "sistema",

                subcategorias: [

                    {

                        id: "moda-feminino-roupas",

                        nome: "Roupas",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "moda-feminino-camiseta",

                                nome: "Camiseta Feminina",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Tamanho",
                                        valores: []
                                    },

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            },

                            {

                                id: "moda-feminino-camisa",

                                nome: "Camisa Feminina",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Tamanho",
                                        valores: []
                                    },

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    },

                    {

                        id: "moda-feminino-calcados",

                        nome: "Calçados",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "moda-feminino-tenis",

                                nome: "Tênis Feminino",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Tamanho",
                                        valores: []
                                    },

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    }

                ]

            },

            // ==================================
            // MASCULINO
            // ==================================

            {

                id: "moda-masculino",

                nome: "Masculino",

                origem: "sistema",

                subcategorias: [

                    {

                        id: "moda-masculino-roupas",

                        nome: "Roupas",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "moda-masculino-camiseta",

                                nome: "Camiseta Masculina",

                                origem: "sistema",

                                atributos: [

                                     {
        nome: "Tamanho",

        valores: [
            "P",
            "M",
            "G",
            "GG",
            "XGG"
        ]
    },

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            },

                            {

                                id: "moda-masculino-camisa",

                                nome: "Camisa Masculina",

                                origem: "sistema",

                                atributos: [

                                     {
        nome: "Tamanho",

        valores: [
            "P",
            "M",
            "G",
            "GG",
            "XGG"
        ]
    },

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            },

                            {

                                id: "moda-masculino-calca",

                                nome: "Calça Masculina",

                                origem: "sistema",

                                atributos: [

                                    {
    nome: "Tamanho",

    valores: [
        "36",
        "38",
        "40",
        "42",
        "44",
        "46",
        "48",
        "50",
        "52",
        "54"
    ]
},

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    },

                    {

                        id: "moda-masculino-calcados",

                        nome: "Calçados",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "moda-masculino-tenis-casual",

                                nome: "Tênis Casual",

                                origem: "sistema",

                                atributos: [

                                    {
    nome: "Tamanho",
    valores: [
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44"
    ]
},

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            },

                            {

                                id: "moda-masculino-tenis-esportivo",

                                nome: "Tênis Esportivo",

                                origem: "sistema",

                                atributos: [

                                    {
    nome: "Tamanho",
    valores: [
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44"
    ]
},

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    },

                                    {
                                        nome: "Tipo de Solado",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    },

                    {

                        id: "moda-masculino-acessorios",

                        nome: "Acessórios",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "moda-masculino-bone",

                                nome: "Boné",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            },

                            {

                                id: "moda-masculino-carteira",

                                nome: "Carteira",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            },

                            {

                                id: "moda-masculino-cinto",

                                nome: "Cinto",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Tamanho",
                                        valores: []
                                    },

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    }

                ]

            },

            // ==================================
            // INFANTIL
            // ==================================

            {

                id: "moda-infantil",

                nome: "Infantil",

                origem: "sistema",

                subcategorias: [

                    {

                        id: "moda-infantil-roupas",

                        nome: "Roupas",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "moda-infantil-camiseta",

                                nome: "Camiseta Infantil",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Tamanho",
                                        valores: []
                                    },

                                    {
                                        nome: "Cor",
                                        valores: []
                                    },

                                    {
                                        nome: "Material",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    }

                ]

            }

        ]

    },

    // ==================================
    // ALIMENTOS
    // ==================================

    {

        id: 2,

        nome: "Alimentos",

        icone: "🍰",

        categorias: [

            {

                id: "alimentos-doces",

                nome: "Doces",

                origem: "sistema",

                subcategorias: [

                    {

                        id: "alimentos-doces-brigadeiros",

                        nome: "Brigadeiros",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "alimentos-brigadeiro-tradicional",

                                nome: "Brigadeiro Tradicional",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Sabor",
                                        valores: []
                                    },

                                    {
                                        nome: "Peso",
                                        valores: []
                                    },

                                    {
                                        nome: "Recheio",
                                        valores: []
                                    },

                                    {
                                        nome: "Cobertura",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    },

                    {

                        id: "alimentos-doces-bolos",

                        nome: "Bolos",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "alimentos-bolo",

                                nome: "Bolo",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Sabor",
                                        valores: []
                                    },

                                    {
                                        nome: "Peso",
                                        valores: []
                                    },

                                    {
                                        nome: "Recheio",
                                        valores: []
                                    },

                                    {
                                        nome: "Cobertura",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    }

                ]

            },

            // ==================================
            // BEBIDAS
            // ==================================

            {

                id: "alimentos-bebidas",

                nome: "Bebidas",

                origem: "sistema",

                subcategorias: [

                    {

                        id: "alimentos-bebidas-refrigerantes",

                        nome: "Refrigerantes",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "alimentos-refrigerante",

                                nome: "Refrigerante",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Volume",
                                        valores: []
                                    },

                                    {
                                        nome: "Tipo de Embalagem",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    },

                                    {
                                        nome: "Sabor",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    },

                    {

                        id: "alimentos-bebidas-sucos",

                        nome: "Sucos",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "alimentos-suco",

                                nome: "Suco",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Volume",
                                        valores: []
                                    },

                                    {
                                        nome: "Tipo de Embalagem",
                                        valores: []
                                    },

                                    {
                                        nome: "Marca",
                                        valores: []
                                    },

                                    {
                                        nome: "Sabor",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    }

                ]

            }

        ]

    },

    // ==================================
    // TECNOLOGIA
    // ==================================

    {

        id: 3,

        nome: "Tecnologia",

        icone: "💻",

        categorias: [

            {

                id: "tecnologia-informatica",

                nome: "Informática",

                origem: "sistema",

                subcategorias: [

                    {

                        id: "tecnologia-informatica-computadores",

                        nome: "Computadores",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "tecnologia-notebook",

                                nome: "Notebook",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Marca",
                                        valores: []
                                    },

                                    {
                                        nome: "Processador",
                                        valores: []
                                    },

                                    {
                                        nome: "Memória RAM",
                                        valores: []
                                    },

                                    {
                                        nome: "Armazenamento",
                                        valores: []
                                    },

                                    {
                                        nome: "Cor",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    }

                ]

            }

        ]

    },

    // ==================================
    // PET SHOP
    // ==================================

    {

        id: 4,

        nome: "Pet Shop",

        icone: "🐶",

        categorias: [

            {

                id: "pet-alimentacao",

                nome: "Alimentação",

                origem: "sistema",

                subcategorias: [

                    {

                        id: "pet-racao",

                        nome: "Rações",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "pet-racao-cachorro",

                                nome: "Ração para Cachorro",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Marca",
                                        valores: []
                                    },

                                    {
                                        nome: "Peso",
                                        valores: []
                                    },

                                    {
                                        nome: "Sabor",
                                        valores: []
                                    },

                                    {
                                        nome: "Indicação",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    }

                ]

            }

        ]

    },

    // ==================================
    // SAÚDE
    // ==================================

    {

        id: 5,

        nome: "Saúde",

        icone: "❤️",

        categorias: [

            {

                id: "saude-higiene",

                nome: "Higiene",

                origem: "sistema",

                subcategorias: [

                    {

                        id: "saude-cuidados",

                        nome: "Cuidados Pessoais",

                        origem: "sistema",

                        tiposProduto: [

                            {

                                id: "saude-produto-higiene",

                                nome: "Produto de Higiene",

                                origem: "sistema",

                                atributos: [

                                    {
                                        nome: "Marca",
                                        valores: []
                                    },

                                    {
                                        nome: "Volume",
                                        valores: []
                                    },

                                    {
                                        nome: "Tipo",
                                        valores: []
                                    }

                                ]

                            }

                        ]

                    }

                ]

            }

        ]

    }

];

// ======================================
// CRIAR ESTRUTURA INICIAL
// ======================================

if (obterTemas().length === 0) {

    salvarTemas(temasPadrao);

    console.log("Estrutura padrão dos temas criada.");

}

// ======================================
// TEMA SELECIONADO
// ======================================

const CHAVE_TEMA_SELECIONADO = "vitrinepro_tema_selecionado";

function obterTemaSelecionado() {

    return localStorage.getItem(
        CHAVE_TEMA_SELECIONADO
    );

}

function salvarTemaSelecionado(idTema) {

    localStorage.setItem(
        CHAVE_TEMA_SELECIONADO,
        String(idTema)
    );

}

function limparTemaSelecionado() {

    localStorage.removeItem(
        CHAVE_TEMA_SELECIONADO
    );

}

// ======================================
// MIGRAR ESTRUTURA ANTIGA
// tipos -> tiposProduto
// ======================================

function migrarTiposProduto() {

    const temas = obterTemas();

    let alterou = false;


    temas.forEach(tema => {

        (tema.categorias || []).forEach(categoria => {

            (categoria.subcategorias || []).forEach(subcategoria => {

                // Se existe "tipos" e não existe "tiposProduto"
                if (
                    Array.isArray(subcategoria.tipos) &&
                    !Array.isArray(subcategoria.tiposProduto)
                ) {

                    subcategoria.tiposProduto =
                        subcategoria.tipos;

                    delete subcategoria.tipos;

                    alterou = true;

                }


                // Se por algum motivo ambos existem,
                // mantém tiposProduto e remove o antigo
                else if (
                    Array.isArray(subcategoria.tipos) &&
                    Array.isArray(subcategoria.tiposProduto)
                ) {

                    if (
                        subcategoria.tiposProduto.length === 0 &&
                        subcategoria.tipos.length > 0
                    ) {

                        subcategoria.tiposProduto =
                            subcategoria.tipos;

                    }

                    delete subcategoria.tipos;

                    alterou = true;

                }

            });

        });

    });


    if (alterou) {

        salvarTemas(temas);

        console.log(
            "Migração de tipos para tiposProduto concluída."
        );

    } else {

        console.log(
            "Nenhuma migração necessária."
        );

    }

}


// Executar migração
migrarTiposProduto();