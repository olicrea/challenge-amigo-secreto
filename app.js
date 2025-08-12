// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let ulListaAmigos = document.querySelector('.name-list');
let ulListaResultado = document.querySelector('.result-list');


function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo').value;
    console.log(inputAmigo);

    if (inputAmigo == '') {
        alert('Por favor, inserte un nombre.');
    } else if ((amigos.includes(inputAmigo))) {
        alert('Por favor, inserte un nombre no repetido.');
    } else {
            amigos.push(inputAmigo);
            console.log(amigos);
        }
    limpiarCaja()
    crearLista()
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function crearLista(){
    ulListaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let liItemAmigo = document.createElement('li');
        liItemAmigo.innerHTML = amigos[i];
        console.log(liItemAmigo);
        ulListaAmigos.appendChild(liItemAmigo);
                
    }
}

function sortearAmigo() {
    ulListaResultado.innerHTML = '';

    console.log(amigos.length);
    if (amigos.length === 0) {
        alert('Por favor, inserta nombres para sortear.');
    } else if (amigos.length < 2) {
        alert('Por favor, inserta más de un nombre para sortear.');
    } else {
        let indiceRandomAmigo = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceRandomAmigo];
        console.log(amigoSorteado);
        document.getElementById('resultado').innerHTML = amigoSorteado;
    }
}



