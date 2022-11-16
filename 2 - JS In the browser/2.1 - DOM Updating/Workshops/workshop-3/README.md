# Workshop 3

Vamos a pintar una lista de usuarios!

Lo primero, creemos el contenedor en html

```jsx
<div class="list"></div>

<script src="./index.js"></script>
```

Ahora vamos a crear un array en nuestro script. Esta será la lista de elementos que irá apareciendo en pantalla

```jsx
const list = [
	{ name: 'Jon', text: 'Hola!' },
	{ name: 'Carmen', text: 'Ey!' },
	{ name: 'Paco', text: 'Adios!' },
	{ name: 'Maria', text: 'Meh' },
];
```

Vamos a recorrer la lista primero

[Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	console.log(user);
});
```

Ahora vamos a pintar un <h1> por cada nombre de la lista

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	const title = `<h1>${user.name}</h1>`;
});
```

Y ahora, vamos a añadirlo al contenedor que hemos creado. Primero buscamos en el DOM

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	const title = `<h1>${user.name}</h1>`;
	const element = document.querySelector('.list');
});
```

Y vamos a usar innerHTML para obtener primero el html, y luego añadirle cada elemento

[element.innerHTML - Referencia de la API Web | MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	const title = `<h1>${user.name}</h1>`;
	const element = document.querySelector('.list');

	element.innerHTML = element.innerHTML + title;
});
```

Podemos tambien añadir el mensaje

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	const title = `<h1>${user.name}</h1>`;
	const text = `<p>${user.text}</p>`;

	const element = document.querySelector('.list');

	element.innerHTML = element.innerHTML + title + text;
});
```# Workshop 3

Vamos a pintar una lista de usuarios!

Lo primero, creemos el contenedor en html

```jsx
<div class="list"></div>

<script src="./index.js"></script>
```

Ahora vamos a crear un array en nuestro script. Esta será la lista de elementos que irá apareciendo en pantalla

```jsx
const list = [
	{ name: 'Jon', text: 'Hola!' },
	{ name: 'Carmen', text: 'Ey!' },
	{ name: 'Paco', text: 'Adios!' },
	{ name: 'Maria', text: 'Meh' },
];
```

Vamos a recorrer la lista primero

[Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	console.log(user);
});
```

Ahora vamos a pintar un <h1> por cada nombre de la lista

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	const title = `<h1>${user.name}</h1>`;
});
```

Y ahora, vamos a añadirlo al contenedor que hemos creado. Primero buscamos en el DOM

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	const title = `<h1>${user.name}</h1>`;
	const element = document.querySelector('.list');
});
```

Y vamos a usar innerHTML para obtener primero el html, y luego añadirle cada elemento

[element.innerHTML - Referencia de la API Web | MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	const title = `<h1>${user.name}</h1>`;
	const element = document.querySelector('.list');

	element.innerHTML = element.innerHTML + title;
});
```

Podemos tambien añadir el mensaje

```jsx
// user valdrá cada uno de los elementos del array
list.forEach(function(user) {
	const title = `<h1>${user.name}</h1>`;
	const text = `<p>${user.text}</p>`;

	const element = document.querySelector('.list');

	element.innerHTML = element.innerHTML + title + text;
});
```