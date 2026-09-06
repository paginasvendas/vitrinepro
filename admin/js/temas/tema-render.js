// ======================================
// RENDERIZAÇÕES
// ======================================

function atualizarBreadcrumb(lista){

    const breadcrumb = document.getElementById("breadcrumb");

    breadcrumb.innerHTML = "";

    lista.forEach((item,index)=>{

        breadcrumb.innerHTML += `

            ${index>0 ? " &gt; " : ""}

            <span>${item}</span>

        `;

    });

}

function atualizarTitulo(titulo){

    document.getElementById("tituloTema").innerHTML = titulo;

}

function limparConteudo(){

    document.getElementById("conteudoTema").innerHTML = "";

}