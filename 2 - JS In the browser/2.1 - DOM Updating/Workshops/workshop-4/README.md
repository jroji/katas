# Workshop 4

Vamos a construir uno de los elementos más famosos de las webs, los elementos modales o diálogos.

Un modal, no es más que un elemento HTML posicionado de forma absoluta o fixed, que ocultamos o mostramos mediante JS. Vamos a ver como podemos hacerlo

```html
<article class="dialog">
	Gracias por suscribirte!
</article>
```

```css
.dialog {
	position: fixed;
  min-width: 300px;
  min-height: 200px;
  box-shadow: 0px 1px 2px black;
  margin: auto;
  left: 0;
  right: 0;
  width: 50%;
  top: 20%;
  padding: 12px;
}
```

Vamos a añadir un botón para hacer que el popup aparezca, y añadir el display none para que el modal empiece oculto

```html
<article class="dialog">
	Gracias por suscribirte!
</article>

<button class="button">Gracias por suscribirte a la newsletter</button>
```

```css
.dialog {
	position: fixed;
  min-width: 300px;
  min-height: 200px;
  box-shadow: 0px 1px 2px black;
  margin: auto;
  left: 0;
  right: 0;
  width: 50%;
  top: 20%;
  padding: 12px;

	display: none;
}
```

Para mostrar el popup, vamos a jugar con las clases, así que vamos a añadir una clase activa que cambie el display del elemento 

```css
.dialog {
	position: fixed;
  min-width: 300px;
  min-height: 200px;
  box-shadow: 0px 1px 2px black;
  margin: auto;
  left: 0;
  right: 0;
  width: 50%;
  top: 20%;
  padding: 12px;

	display: none;
}

.active {
	display: block;
}
```

Ahora, solo tenemos que hacer que al hacer click en el botón, aparezca el popup

```jsx
const button = document.querySelector('.button');
```

```jsx
const button = document.querySelector('.button');

button.addEventListener('click', function () {

});
```

```jsx
const button = document.querySelector('.button');

button.addEventListener('click', function () {
	const dialog = document.querySelector('.dialog');
	dialog.classList.add('.button');
});
```

Ahora que es visible, podemos hacer que el popup se cierre por ejemplo automáticamente pasado un tiempo, utilizando un setTimeout

[WindowOrWorkerGlobalScope.setTimeout - Referencia de la API Web | MDN](https://developer.mozilla.org/es/docs/Web/API/setTimeout)

```jsx
const button = document.querySelector('.button');

button.addEventListener('click', function () {
	const dialog = document.querySelector('.dialog');
	dialog.classList.add('active');

	setTimeout(function() {
		dialog.classList.remove('active');
	}, 3000);
});
```