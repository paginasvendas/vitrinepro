// ======================================
// CATEGORIAS
// ======================================

function abrirTema(id){

    const tema = obterTemas().find(t => t.id === id);

    if(!tema) return;

    document.getElementById("listaTemas").style.display = "none";

    document.getElementById("areaConteudoTema").style.display = "block";

    document.getElementById("tituloTema").innerHTML = `${tema.icone} ${tema.nome}`;

    const lista = document.getElementById("listaCategoriasTema");

    lista.innerHTML = "";

    tema.categorias.forEach((categoria,index)=>{

        lista.innerHTML += `

        <div class="card-tema categoria-card"

             data-tema="${tema.id}"

             data-categoria="${index}">

            <div class="icone">

                📁

            </div>

            <h2>${categoria.nome}</h2>

            <p>${categoria.subcategorias.length} Subcategorias</p>

            <button class="btn-gerenciar">

                Gerenciar

            </button>

        </div>

        `;

    });

}