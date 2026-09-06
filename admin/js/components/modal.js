// ======================================
// MODAL VITRINEPRO
// ======================================

let modalOverlay = null;

function criarModal() {

    if (document.getElementById("modalOverlay")) {

        modalOverlay = document.getElementById("modalOverlay");
        return;

    }

    modalOverlay = document.createElement("div");

    modalOverlay.id = "modalOverlay";
    modalOverlay.className = "modal-overlay";

    modalOverlay.innerHTML = `
        <div class="modal">

            <div id="modalIcon" class="modal-icon"></div>

            <h2 id="modalTitulo"></h2>

            <p id="modalMensagem"></p>

            <div id="modalBotoes"></div>

        </div>
    `;

    document.body.appendChild(modalOverlay);

}

function configurarIcone(tipo){

    const icon = document.getElementById("modalIcon");

    icon.className = "modal-icon";

    switch(tipo){

        case "success":

            icon.classList.add("modal-success");
            icon.innerHTML = "✔";
            break;

        case "error":

            icon.classList.add("modal-error");
            icon.innerHTML = "✖";
            break;

        case "warning":

            icon.classList.add("modal-warning");
            icon.innerHTML = "⚠";
            break;

        default:

            icon.classList.add("modal-success");
            icon.innerHTML = "✔";

    }

}

function mostrarModal(titulo,mensagem,tipo="success"){

    criarModal();

    configurarIcone(tipo);

    document.getElementById("modalTitulo").textContent = titulo;

    document.getElementById("modalMensagem").textContent = mensagem;

    document.getElementById("modalBotoes").innerHTML = `

        <button id="modalOk">

            OK

        </button>

    `;

    document.getElementById("modalOk").onclick = fecharModal;

    modalOverlay.classList.add("active");

}

function mostrarModalConfirmacao(titulo,mensagem,onConfirmar){

    criarModal();

    configurarIcone("warning");

    document.getElementById("modalTitulo").textContent = titulo;

    document.getElementById("modalMensagem").textContent = mensagem;

    document.getElementById("modalBotoes").innerHTML = `

        <button id="btnCancelar">

            Cancelar

        </button>

        <button id="btnConfirmar">

            Excluir

        </button>

    `;

    document.getElementById("btnCancelar").onclick = fecharModal;

document.getElementById("btnConfirmar").onclick = function(){

    console.log("CLICOU NO BOTÃO EXCLUIR");

    fecharModal();

    if(typeof onConfirmar === "function"){

        console.log("Executando callback...");

        onConfirmar();

    }else{

        console.log("Callback inválido:", onConfirmar);

    }

};

    modalOverlay.classList.add("active");

}

function fecharModal(){

    if(modalOverlay){

        modalOverlay.classList.remove("active");

    }

}