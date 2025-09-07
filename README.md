#Amigo Secreto

Proyecto de Practicando Logica de Programacion de Alura :D

Aplicación web simple que permite organizar un juego de Amigo Secreto.

✨ Funcionalidades

Ingresa hasta 7 nombres en un listado.

El campo de entrada se limpia automáticamente al añadir un nombre.

Los nombres se muestran en una lista debajo del input.

Botón “Sortear Amigo” selecciona un nombre aleatorio.

Al sortear:

La lista se borra.

Se muestra el mensaje: “El amigo secreto es (nombre)” en verde y en negrita.

🛠️ Tecnologías

HTML5

CSS3

JavaScript (Vanilla)

📜 Explicación de la lógica en app.js
1. Arreglo de nombres

```js
let amigos = [];
```

Se utiliza para guardar los nombres ingresados por el usuario.

2. Función agregarAmigo()

```js
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "" || amigos.length >= 7) return;

    amigos.push(nombre);
    input.value = ""; 
    mostrarLista();
}
```

Toma el valor del input.

Valida que no esté vacío y que no se superen los 7 nombres.

Limpia el campo.

Añade el nombre al arreglo y actualiza la lista.

3. Función mostrarLista()
```js
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
```

Recorre el arreglo amigos.

Genera un <li> por cada nombre.

Muestra los nombres en la lista visual.

4. Función sortearAmigo()
```js
function sortearAmigo() {
    if (amigos.length === 0) return;

    const resultado = document.getElementById("resultado");
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    resultado.innerHTML = `<li><strong>El amigo secreto es ${amigoSecreto}</strong></li>`;
    amigos = [];
}
```

Verifica que exista al menos un nombre.

Selecciona un índice aleatorio.

Limpia la lista original.

Muestra el resultado en verde y negrita (CSS se encarga del estilo).
