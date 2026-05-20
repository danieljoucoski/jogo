let valor = localStorage.getItem("valor") || 0;

function adicionar(numero) {
    valor = Number(valor) + numero;

    localStorage.setItem("valor", valor);

    let elemento = document.getElementById("numero");

    if (elemento) {
        elemento.innerText = valor;
    }
}