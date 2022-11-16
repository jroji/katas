// Partiendo de la lista de tweets siguiente y utilizando innerHTML, construye una lista de tweets y muestralá por pantalla

const tweets = [
    { author: 'jnroji', text: 'Hola, como estáis', likes: 5 },
    { author: 'maria', text: 'Hola, que tal', likes: 2 },
    { author: 'pepe', text: 'Yo bien', likes: 7 },
    { author: 'carlos', text: 'Tengo 30 años', likes: 8 },
];

// Utiliza un bucle para recorrer los tweets y modificar el html
// Recuerda que innerHTML REEMPLAZA Y NO AÑADE, por lo que tendras que ir construyendo el texto