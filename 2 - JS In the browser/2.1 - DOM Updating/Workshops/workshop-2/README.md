# Workshop 2

Vamos a crear un generador de frases célebres para inspirarnos en el día a día. La idea sería

- Tener un array de frases y autores
- Tener un botón para mostrar una frase
- Al pulsar el botón debemos seleccionar una frase aleatoria de la lista y mostrarla

Ahora vamos a añadir un poco de HTML a nuestras vidas

```html
<div class="phrase"></div>

<button class="show-phrase">Mostrar frase</button>
```

Una vez tenemos el html que deseamos (un elemento para mostrar la frase, y un botón para escuchar el evento de click), vamos a añadirle el evento de click al elemento de botón

```jsx
const button = document.querySelector('.show-phrase');
```

Vamos a añadir la lista de frases célebres en una constante.

```jsx
const button = document.querySelector('.show-phrase');
const sentences = [
	{ phrase: 'Frase Célebre 1', author: 'Jon' },
	{ phrase: 'Frase Célebre 2', author: 'Jon' },
	{ phrase: 'Frase Célebre 3', author: 'Jon' },
	{ phrase: 'Frase Célebre 4', author: 'Jon' },
];
```

Ahora, necesitamos que al hacer click en un elemento, debe mostrar una alerta

```jsx
const button = document.querySelector('.show-phrase');
const sentences = [
	{ phrase: 'Frase Célebre 1', author: 'Jon' },
	{ phrase: 'Frase Célebre 2', author: 'Jon' },
	{ phrase: 'Frase Célebre 3', author: 'Jon' },
	{ phrase: 'Frase Célebre 4', author: 'Jon' },
];

button.addEventListener('click', function() {
	alert('click!');
});
```

Al hacer click, vamos a buscar el elemento para reemplazar el contenido

```jsx
const button = document.querySelector('.show-phrase');
const sentences = [
	{ phrase: 'Frase Célebre 1', author: 'Jon' },
	{ phrase: 'Frase Célebre 2', author: 'Jon' },
	{ phrase: 'Frase Célebre 3', author: 'Jon' },
	{ phrase: 'Frase Célebre 4', author: 'Jon' },
];

button.addEventListener('click', function() {
	const textElement = document.querySelector('.phrase');
});
```

Ahora vamos a obtener un elemento aleatorio de un array. Si no sabes como hacerlo, vamos a buscarlo

[Get a random item from a JavaScript array](https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array)

```jsx
const button = document.querySelector('.show-phrase');
const sentences = [
	{ phrase: 'Frase Célebre 1', author: 'Jon' },
	{ phrase: 'Frase Célebre 2', author: 'Jon' },
	{ phrase: 'Frase Célebre 3', author: 'Jon' },
	{ phrase: 'Frase Célebre 4', author: 'Jon' },
];

button.addEventListener('click', function() {
	const textElement = document.querySelector('.phrase');
	const randomItem = sentences[Math.floor(Math.random()*sentences.length)];
});
```

Vamos a construir el elemento HTML para poder añadir al DOM

```jsx
const button = document.querySelector('.show-phrase');
const sentences = [
	{ phrase: 'Frase Célebre 1', author: 'Jon' },
	{ phrase: 'Frase Célebre 2', author: 'Jon' },
	{ phrase: 'Frase Célebre 3', author: 'Jon' },
	{ phrase: 'Frase Célebre 4', author: 'Jon' },
];

button.addEventListener('click', function() {
	const textElement = document.querySelector('.phrase');
	const randomItem = sentences[Math.floor(Math.random()*sentences.length)];

	textElement.innerHTML = `
		<h1>${randomItem.phrase}</h1>
		<p>${randomItem.author}</p>
	`;
});
```