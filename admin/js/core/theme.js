/* =========================================
   VITRINEPRO
   CONTROLE DE TEMA
========================================= */

const btnTema = document.getElementById("btnTema");
const iframe = document.getElementById("paginaConteudo");


/* =========================================
   APLICAR TEMA NO IFRAME
========================================= */

function aplicarTemaIframe(){

    if(!iframe) return;

    try{

        const documento = iframe.contentDocument;

        if(!documento || !documento.body) return;

        const tema =
            localStorage.getItem("vitrinepro_tema") || "escuro";

        if(tema === "claro"){

            documento.body.classList.add("light-mode");

        }else{

            documento.body.classList.remove("light-mode");

        }

    }catch(erro){

        console.log("Não foi possível aplicar o tema no iframe.", erro);

    }

}


/* =========================================
   APLICAR TEMA
========================================= */

function aplicarTema(tema){

    const icone = btnTema?.querySelector("i");

    if(tema === "claro"){

        document.body.classList.add("light-mode");

        if(icone){

            icone.classList.remove("fa-moon");
            icone.classList.add("fa-sun");

        }

    }else{

        document.body.classList.remove("light-mode");

        if(icone){

            icone.classList.remove("fa-sun");
            icone.classList.add("fa-moon");

        }

    }

    aplicarTemaIframe();

}


/* =========================================
   CARREGAR TEMA SALVO
========================================= */

const temaSalvo =
    localStorage.getItem("vitrinepro_tema") || "escuro";

aplicarTema(temaSalvo);


/* =========================================
   QUANDO UMA PÁGINA DO IFRAME TERMINAR
   DE CARREGAR
========================================= */

if(iframe){

    iframe.addEventListener("load", function(){

        aplicarTemaIframe();

    });

}


/* =========================================
   ALTERAR TEMA
========================================= */

if(btnTema){

    btnTema.addEventListener("click", function(){

        const temaAtual =
            document.body.classList.contains("light-mode")
                ? "claro"
                : "escuro";

        const novoTema =
            temaAtual === "escuro"
                ? "claro"
                : "escuro";

        localStorage.setItem(
            "vitrinepro_tema",
            novoTema
        );

        aplicarTema(novoTema);

    });

}