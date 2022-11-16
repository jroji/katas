# Workshop 5

Vamos a jugar a las parejas. El objetivo es, partiendo de unas cartas dadas la vuelta, conseguir jugar al juego de las parejas.

- Un click en la carta debe mostrar su contenido (hacer visible el div .front)
- Si al hacer click, existe una carta ya activa, comparamos valores
    - si coinciden, le damos la clase block a los dos elementos
    - coincidan o no, les quitamos la clase activa

Copia este contenido en tu HTML 👇🏻 y en tu CSS

```html
<div class="list">
   <article class="card">
     <div class="front">1</div>
  </article>
  <article class="card">
     <div class="front">2</div>
  </article>
     <article class="card">
     <div class="front">3</div>
  </article>
     <article class="card">
     <div class="front">2</div>
  </article>
     <article class="card">
     <div class="front">3</div>
  </article>
       <article class="card">
     <div class="front">4</div>
  </article>
       <article class="card">
     <div class="front">4</div>
  </article>
     <article class="card">
     <div class="front">1</div>
  </article>
</div>
```

[https://www.notion.so](https://www.notion.so)

```css
.list {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
}

.card {
  width: 100px;
  height: 150px;
  background: red;
  border-radius: 10px;
  margin: 10px;
}

.front {
  height: 100%;
  width: 100%;
  border: 5px solid red;
  background: white;
  padding: 12px;
  border-radius: 10px;
  font-size: 40px;
  display: flex;
  box-sizing: border-box;
}

.card.is-active .front{
  display: block;
}

.card.is-active .back {
  display: none;
}

.card .front {
  display: none;
}

.card.blocked .front {
	display: block;
}
```

Lo primero es encontrar el listado de las cartas

```jsx
const listOfCards = document.querySelectorAll('.card');
```

Una vez las tenemos, como es un array de elementos, vamos a recorrerlo

```jsx
const listOfCards = document.querySelectorAll('.card');
listOfCards.forEach(function(card) {
	console.log(card);
});
```

Vamos a añadir el evento de click a cada uno de los elementos dentro del bucle

```jsx
const listOfCards = document.querySelectorAll('.card');
listOfCards.forEach(function(card) {
	card.addEventListener('click', () => {
		
	})
});
```

Para “darles la vuelta” hemos preparado el CSS para que, si la carta tiene la clase activa, se pinte. Por lo tanto, lo único que tenemos que hacer es añadir a la card, la clase activa

```jsx
const listOfCards = document.querySelectorAll('.card');
listOfCards.forEach(function(card) {
	card.addEventListener('click', () => {
		card.classList.add('is-active');
	})
});
```

Genial! ya tenemos la posibilidad de darles la vuelta!

Ahora, tendríamos que comprobar, al darle la vuelta a una, si ya existe otra boca arriba, para poder comparar.

Primero, buscamos si ya existe una carta con **is-active ANTES DE ACTIVAR LA NUEVA!** 

- Si buscamos si hay una activa ANTES de activar la que acabamos de clickar, sabemos si al clickar, tenemos ya otra levantada para comparar

```jsx
const listOfCards = document.querySelectorAll('.card');

listOfCards.forEach(function(card) {

	card.addEventListener('click', () => {
		const flippedCard = document.querySelector('.is-active');
		card.classList.add('is-active');
	})

});
```

**querySelector** devuelve null o undefined si el elemento no existe en el DOM. En este caso, eso nos indica si existe o no un elemento con la clase activa

```jsx
const listOfCards = document.querySelectorAll('.card');

listOfCards.forEach(function(card) {

	card.addEventListener('click', () => {
		const flippedCard = document.querySelector('.is-active');
 		card.classList.add('is-active');

    // Si es distinto de null, existe la carta
		if (flippedCard != null) {
			alert("TENGO DOS CARTAS LEVANTADAS!");
		}
	})
});
```

<aside>
🦄 Ojo! el valor de la carta, esta dentro del elemento con clase front, por lo que debemos buscarlo dentro de la carta activa. **QuerySelector, funciona tambien para buscar hijos!**

</aside>

Ahora vamos a recoger el valor que muestra para poder utilizarlo después, y añadir el else

```jsx
const listOfCards = document.querySelectorAll('.card');

listOfCards.forEach(function(card) {

	card.addEventListener('click', () => {
		const flippedCard = document.querySelector('.is-active');
		card.classList.add('is-active');

    // Si es distinto de null, existe la carta
		if (flippedCard != null) {

			// Esto solo va a buscar los elementos. conclase front, que sean hijos de flippedCard
			// Seria equivalente a document.querySelector('.is-active').querySelector('.front');
			// Limitamos la busqueda a dentro de ese elemento, en vez de en todo el document
			const previousValue = flippedCard.querySelector('.front').textContent;
			const currentValue = card.querySelector('.front').textContent;
		}
	})
});
```

Y ahora que lo tenemos, podemos compararlo con el actual

```jsx
const listOfCards = document.querySelectorAll('.card');

listOfCards.forEach(function(card) {

	card.addEventListener('click', () => {
		const flippedCard = document.querySelector('.is-active');
		card.classList.add('is-active');

    // Si es distinto de null, existe la carta
		if (flippedCard != null) {

			// Esto solo va a buscar los elementos. conclase front, que sean hijos de flippedCard
			// Seria equivalente a document.querySelector('.is-active').querySelector('.front');
			// Limitamos la busqueda a dentro de ese elemento, en vez de en todo el document
			const previousValue = flippedCard.querySelector('.front').textContent;
			const currentValue = card.querySelector('.front').textContent;

			if (previousValue === currentValue) {
				alert("Los valores coinciden");
			}
		}
	})
});
```

En el caso del acierto, vamos a añadir la clase blocked a los dos elementos

```jsx
    // Si es distinto de null, existe la carta
		if (flippedCard != null) {

			// Esto solo va a buscar los elementos. conclase front, que sean hijos de flippedCard
			// Seria equivalente a document.querySelector('.is-active').querySelector('.front');
			// Limitamos la busqueda a dentro de ese elemento, en vez de en todo el document
			const previousValue = flippedCard.querySelector('.front').textContent;
			const currentValue = card.querySelector('.front').textContent;

			if (previousValue === currentValue) {
				card.classList.add('blocked');
				flippedCard.classList.add('blocked');
			}
		}
	})
});
```

Esto nos está quedando muy complejo, verdad? vamos a sacarlo a una función

```jsx
const listOfCards = document.querySelectorAll('.card');

listOfCards.forEach(function(card) {

	card.addEventListener('click', () => {
		const flippedCard = document.querySelector('.is-active');
		card.classList.add('is-active');
		checkPreviousCard(flippedCard, card);
	})
});

// Simplemente copy paste y pegamos aqui dentro 
function checkPreviousCard(flippedCard, card) {
		if (flippedCard != null) {

			const previousValue = flippedCard.querySelector('.front').textContent;
			const currentValue = card.querySelector('.front').textContent;

			if (previousValue === currentValue) {
				card.classList.add('blocked');
				flippedCard.classList.add('blocked');
			}
		}
}
```

Ahora nos faltaría eliminar las clases activas, para darles la vuelta en caso de error!

```jsx
function checkPreviousCard(flippedCard, card) {
		if (flippedCard != null) {

			const previousValue = flippedCard.querySelector('.front').textContent;
			const currentValue = card.querySelector('.front').textContent;

			if (previousValue === currentValue) {
				card.classList.add('blocked');
				flippedCard.classList.add('blocked');
			}
			
			flippedCard.classList.remove('is-active');
			card.classList.remove('is-active');
		}
}
```

Para hacerlo más amigable, vamos a darle un par de segundos al usuario para que lo recuerde, utilizando la función setTimeout

[WindowOrWorkerGlobalScope.setTimeout - Referencia de la API Web | MDN](https://developer.mozilla.org/es/docs/Web/API/setTimeout)

```jsx
function checkPreviousCard(flippedCard, card) {
		if (flippedCard != null) {

			const previousValue = flippedCard.querySelector('.front').textContent;
			const currentValue = card.querySelector('.front').textContent;

			if (previousValue === currentValue) {
				card.classList.add('blocked');
				flippedCard.classList.add('blocked');
			}
			
			setTimeout(() => {
				flippedCard.classList.remove('is-active');
				card.classList.remove('is-active');
			}, 500);
		}
}
```

Como queda todo!

```jsx
const listOfCards = document.querySelectorAll('.card');

listOfCards.forEach(function(card) {

	card.addEventListener('click', () => {
		const flippedCard = document.querySelector('.is-active');
		card.classList.add('is-active');
		checkPreviousCard(flippedCard, card);
	})
});

function checkPreviousCard(flippedCard, card) {
		if (flippedCard != null) {

			const previousValue = flippedCard.querySelector('.front').textContent;
			const currentValue = card.querySelector('.front').textContent;

			if (previousValue === currentValue) {
				card.classList.add('blocked');
				flippedCard.classList.add('blocked');
			}
			
			setTimeout(() => {
				flippedCard.classList.remove('is-active');
				card.classList.remove('is-active');
			}, 500);
		}
}
```