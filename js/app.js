let listaAmigos = document.getElementById("lista-amigos");
let nomes = [];
let listaSorteio = document.getElementById("lista-sorteio");

function adicionar() {
  if (nomes.length !== 0) {
    listaAmigos.textContent += ", ";
  }
  let nomeAmigo = document.getElementById("nome-amigo");
  listaAmigos.textContent += `${nomeAmigo.value}`;
  nomes.push(nomeAmigo.value);
  nomeAmigo.value = "";
}

function sortear() {
  if (nomes.length % 2 !== 0) {
    alert(
      "Impossível sortear amigos em números ímpar, adicione ou retire alguém da lista."
    );
    return;
  }
  while (nomes.length !== 0) {
    let amigo1 = nomes.pop();
    let indice = Math.floor(Math.random() * nomes.length);
    let amigo2 = nomes.splice(indice, 1);
    listaSorteio.innerHTML += `${amigo1} --> ${amigo2}<br>`;
  }
}

function reiniciar() {
    listaAmigos.textContent = '';
    listaSorteio.innerHTML = '';
}