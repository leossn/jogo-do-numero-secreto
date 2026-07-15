function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let linhaSpan = document.getElementById(`qtd-${ingresso}`);
    let ingressoQtdDisponivel = parseInt(linhaSpan.textContent);
    if (quantidade > 0 || quantidade <= ingressoQtdDisponivel) {
        ingressoQtdDisponivel = ingressoQtdDisponivel - quantidade;
        linhaSpan.textContent = ingressoQtdDisponivel
        alert(`Compra realizada.`)
    } else {
        alert(`Não possível realizar a compra, quantidade de ingressos inválida ou indisponível`)
    }

}