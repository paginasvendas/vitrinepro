// ======================================
// DASHBOARD
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    carregarGraficoProdutosLucrativos();

});


// ======================================
// PRODUTOS MAIS LUCRATIVOS
// ======================================

function carregarGraficoProdutosLucrativos() {

    const canvas =
        document.getElementById("graficoProdutosLucrativos");

    if (!canvas) return;


    // ==================================
    // PRODUTOS CADASTRADOS
    // ==================================

    const produtos =
        JSON.parse(
            localStorage.getItem("vitrinepro_produtos")
        ) || [];


    // ==================================
    // CALCULAR LUCRO
    // ==================================

    const produtosLucrativos = produtos

        .map(produto => {

            const valorVenda =
                Number(
                    produto.promocao > 0
                        ? produto.promocao
                        : produto.preco
                ) || 0;


            const custoProduto =
                Number(produto.custo) || 0;


            const lucro =
                valorVenda - custoProduto;


            return {

                nome:
                    produto.nome || "Sem nome",

                lucro:
                    lucro

            };

        })


        // Maior lucro primeiro
        .sort((a, b) =>
            b.lucro - a.lucro
        )


        // TOP 10
        .slice(0, 10);


    // ==================================
    // LABELS
    // ==================================

    const labels =
        produtosLucrativos.map(produto => {

            // Limita o tamanho do nome
            if (produto.nome.length > 18) {

                return produto.nome.substring(0, 18) + "...";

            }

            return produto.nome;

        });


    // ==================================
    // VALORES
    // ==================================

    const valores =
        produtosLucrativos.map(
            produto => produto.lucro
        );


    // ==================================
    // CRIAR GRÁFICO
    // ==================================

    new Chart(canvas, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [{

                label: "Lucro",

                data: valores,

                backgroundColor: "#2ecc71",

                borderColor: "#27ae60",

                borderWidth: 1,

                borderRadius: 6,

                maxBarThickness: 55

            }]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,


            plugins: {

                legend: {

                    display: false

                },


                tooltip: {

                    callbacks: {

                        label: function(context) {

                            return (
                                " Lucro: R$ " +
                                Number(context.raw)
                                    .toLocaleString(
                                        "pt-BR",
                                        {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        }
                                    )
                            );

                        }

                    }

                }

            },


            scales: {

                // ==========================
                // EIXO X
                // ==========================

                x: {

                    grid: {

                        display: false

                    },

                    ticks: {

                        color: "#bfbfbf",

                        maxRotation: 0,

                        minRotation: 0

                    }

                },


                // ==========================
                // EIXO Y
                // ==========================

                y: {

                    beginAtZero: true,

                    grid: {

                        color:
                            "rgba(255,255,255,0.08)"

                    },

                    ticks: {

                        color: "#bfbfbf",

                        callback: function(value) {

                            return "R$ " +
                                Number(value)
                                    .toLocaleString(
                                        "pt-BR",
                                        {
                                            minimumFractionDigits: 0
                                        }
                                    );

                        }

                    }

                }

            }

        }

    });

}