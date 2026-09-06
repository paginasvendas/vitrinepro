const banco = {

    produtos: [],

    categorias: [

    {
        id:1,
        nome:"Rock"
    },

    {
        id:2,
        nome:"Heavy Metal"
    },

    {
        id:3,
        nome:"Punk"
    },

    {
        id:4,
        nome:"Anime"
    },

    {
        id:5,
        nome:"Filmes"
    }

],

    bandas: [

    {
        id: 1,
        nome: "Metallica"
    },

    {
        id: 2,
        nome: "Iron Maiden"
    },

    {
        id: 3,
        nome: "Slipknot"
    },

    {
        id: 4,
        nome: "AC/DC"
    },

    {
        id: 5,
        nome: "Nirvana"
    }

],

    banners: [],

    pedidos: [],

    clientes: [],

    configuracoes: {}

};

// Modelo de um produto:
//
// {
//     id: 1,
//     nome: "",
//     slug: "",
//     categoria: "",
//     banda: "",
//     descricao: "",
//     preco: 0,
//     promocao: 0,
//     estoque: 0,
//     ativo: true,
//     destaque: false,
//     tabelaMedidas: "",
//     imagens: [],
//     imagemPrincipal: 0,
//     tamanhos: [],
//     cores: [],
//     seo: {
//         titulo: "",
//         descricao: ""
//     }
// }