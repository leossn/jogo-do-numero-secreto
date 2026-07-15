function alterarStatus(id) {
    // 1. Pegamos o container do jogo 1
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    // 2. Pegamos o botão que está dentro dele
    let botao = gameClicado.querySelector('.dashboard__item__button');
   
     if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Se já está alugado, nós devolvemos:
        imagem.classList.remove('dashboard__item__img--rented');
        imagem.classList.add('dashboard__item__img');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = "Alugar";
    } else {
        // Se não está alugado, nós alugamos:
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = "Devolver";
       
    }

}
