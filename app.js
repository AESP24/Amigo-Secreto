// ===== app.js =====
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    if (amigos.length >= 7) {
        alert("Solo puedes agregar hasta 7 amigos.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // limpiar input
    mostrarLista();
}

// Mostrar lista de amigos
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar la lista

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo para sortear.");
        return;
    }

    const resultado = document.getElementById("resultado");
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // vaciar la lista

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    resultado.innerHTML = `<li><strong>El amigo secreto es ${amigoSecreto}</strong></li>`;

    // Reiniciar el array por si quieren jugar otra vez
    amigos = [];
}
