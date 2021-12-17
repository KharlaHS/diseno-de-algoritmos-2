/*
los arreglos son na colección de elementos
tienen métodos o funciones  que nos permiten
ordenar o manipular los datos almacenados
*/
// manera 1
const arreglo1 = [4, " ¡Hey! ", true, [1, 2, 6]];
console.log(arreglo1);

// manera 2  (mas reciente)
const arreglo2 = Array.of(1, " hola ", true);
console.log(arreglo2);


// manera 3
const arreglo3 = new Array(3, true, " adios ");
console.log(arreglo3);

const frutas = [" manzana ", " naranjas ", " uvas ", " sandias ", [1, 2, 3, 4, 5, [" A ", " B ", " C "]]];
// notación de los corchetes
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);
frutas[4][5].push(" D ");
console.log(frutas);

//Métodos
/* Lenght = Longitud */
const letras = [" A ", " B ", " C ", " D "];
console.log(letras.length);
//length sirve para saber la longitud de nuestro codigo

/* push = añade un elemnto al final de nuestro arreglo */
letras.push(" E ");
console.log(letras);

/* pop = elimina el último elemento que tengamos en nuestro arreglo */
letras.pop()
console.log(letras);

/* unshift = agrega un elemento al inicio */
letras.unshift(1);
console.log(letras);

/* shift = elimina el primer elemento */
letras.shift();
console.log(letras);