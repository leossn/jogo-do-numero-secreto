let carrinhoTotal = 0;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let partesDoProduto = produto.split(' - R$');
    let nomeProduto = partesDoProduto[0];
    let precoProduto = partesDoProduto[1];
    let subtotal = quantidade * precoProduto;
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x </span> ${nomeProduto} <span class="texto-azul">R$${precoProduto}</span></section>`;
    let valorTotal = document.getElementById('valor-total');
    carrinhoTotal = carrinhoTotal + subtotal;
    valorTotal.textContent = `R$ ${carrinhoTotal}`;
    console.log(valorTotal)

}

function limpar() {
    carrinhoTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = '0';
}