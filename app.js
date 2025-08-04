let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Ingresar nombre válido');
        input.value = '';
        input.focus();
        return;
    }

    listaAmigos.push(nombre);
    mostrarListaAmigos();
    input.value = '';
    input.focus();
}

function mostrarListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Agrega al menos dos nombres para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceSorteado];

    const ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = '';

    // Solo mostrar el amigo elegido
    const li = document.createElement('li');
    li.innerHTML = `🎉 <strong>${amigoSecreto}</strong> fue el amigo secreto seleccionado 🎁`;
    li.style.color = 'limegreen';
    li.style.fontWeight = 'bold';

    ulResultado.appendChild(li);
}


function reiniciar() {
    listaAmigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}