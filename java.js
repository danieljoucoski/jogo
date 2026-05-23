let valor = Number(localStorage.getItem("valor")) || 0;

function adicionar(numero) {

    valor = valor + numero;

    localStorage.setItem("valor", valor);

    let elemento = document.getElementById("numero");

    if (elemento) {
        elemento.innerText = valor;
    }
}