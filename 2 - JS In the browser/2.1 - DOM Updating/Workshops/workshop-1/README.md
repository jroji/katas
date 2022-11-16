# Workshop 1

Vamos a construir un conversor de textos a mayúscula.

- Tener un Input
- Tener un botón
- Al clickar el botón debemos transformar el texto del input a mayúsculas
- Pintar el nuevo texto al lado del input

Lo primero, es construir un poco de HTML.

```html
<input id="input">
<button id="button">Convertir!</button>

<!-- En este div, pintaremos el texto que convertimos -->
<div id="result"></div>
```

Ahora vamos a incluir el script **AL FINAL DEL HTML**

```jsx
<script src="./script.js"></script>
```

**Creamos el archivo script.js** y vamos a buscar el botón en el DOM

[Document.querySelector() - Referencia de la API Web | MDN](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector)

```jsx
const button = document.querySelector('#button');
```

Añadimos ahora el **evento de click sobre el botón** que hemos encontrado

[element.addEventListener - Referencia de la API Web | MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)

```jsx
button.addEventListener('click', function(evento) {
	alert("FUNCIONA");
});
```

Y ahora, vamos a buscar el valor del Input. Lo primero es buscar el elemento al hacer click

```jsx
button.addEventListener('click', function(evento) {
	const $input = document.querySelector('#input');
});
```

Una vez lo tenemos, podemos conseguir el texto del input

```jsx
button.addEventListener('click', function(evento) {
	const $input = document.querySelector('#input');
	alert($input.value);
});
```

Con el valor del botón, vamos a pintarlo en el contenedor ”result”. Primero lo guardamos...

```jsx
button.addEventListener('click', function(evento) {
	const $input = document.querySelector('#input');
	const value = $input.value;

	const $result = document.querySelector('#result');
});
```

Y ahora lo rellenamos!

[Node.textContent - Referencia de la API Web | MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)

```jsx
button.addEventListener('click', function(evento) {
	const $input = document.querySelector('#input');
	const value = $input.value;

	const $result = document.querySelector('#result');
	$result.textContent = value;
});
```

Solo nos falta ponerlo en mayusculas...

[String.prototype.toUpperCase() - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

```jsx
button.addEventListener('click', function(evento) {
	const $input = document.querySelector('#input');
	const value = $input.value;

	const $result = document.querySelector('#result');
	$result.textContent = value.toUpperCase();
});
```