// ======================================
// UPLOAD DE IMAGEM
// ======================================

let imagemBase64 = "../img/sem-imagem.png";

const inputImagem = document.getElementById("imagensProduto");

const preview = document.getElementById("previewImagens");

inputImagem.addEventListener("change", function () {

    const arquivo = this.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function (e) {

        imagemBase64 = e.target.result;

        preview.innerHTML = `

            <img
                src="${imagemBase64}"
                style="
                    width:150px;
                    border-radius:12px;
                    object-fit:cover;
                ">

        `;

    };

    leitor.readAsDataURL(arquivo);

});