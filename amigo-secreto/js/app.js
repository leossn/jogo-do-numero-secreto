let amigos = [];

function adicionar() {
    let amigoAdd = document.getElementById('nome-amigo').value;
    if (amigoAdd != '' || amigos.includes(amigoAdd)) {
        amigos.push(amigoAdd);
        return;
    } else {
        alert("Amigo inválido, não deve ser vazio ou repetir amigo");
        return;
    }
    let listaAmigos = document.getElementById('lista-amigos');
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigoAdd;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigoAdd;
    }
    amigoAdd = '';
}

function sortear() {  
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    if (amigos.length >= 4) {
        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
             sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
    } else {
        alert("É necessário no mínimo 4 participantes para realizar o sorteio")
        return;
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice-1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}