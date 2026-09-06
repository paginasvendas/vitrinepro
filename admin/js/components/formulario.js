// ======================================
// FORMULÁRIO UNIVERSAL
// ======================================

function abrirFormulario(opcoes){

    const{

        titulo,

        label,

        valor="",

        placeholder="",

        textoBotao="Salvar",

        onSalvar

    } = opcoes;

    criarModal();

    configurarIcone("success");

    document.getElementById("modalTitulo").textContent = titulo;

    document.getElementById("modalMensagem").innerHTML = `

        <div class="form-modal">

            <label>${label}</label>

            <input

                id="campoFormulario"

                type="text"

                value="${valor}"

                placeholder="${placeholder}"

            >

        </div>

    `;

    document.getElementById("modalBotoes").innerHTML = `

        <button id="btnCancelar">

            Cancelar

        </button>

        <button id="btnSalvar">

            ${textoBotao}

        </button>

    `;

    document.getElementById("btnCancelar").onclick = fecharModal;

    document.getElementById("btnSalvar").onclick = function(){

        const texto = document
            .getElementById("campoFormulario")
            .value
            .trim();

        if(texto===""){

            mostrarModal(

                "Campo obrigatório",

                "Informe um valor.",

                "warning"

            );

            return;

        }

        onSalvar(texto);

        fecharModal();

    };

    modalOverlay.classList.add("active");

}