










/*
Función es
un Bloque de código reutilizable

function nombre(parametros){
    return sirve para queregrese el dato que hemos procesado
}
nombre(argumentos); estos argumentos se convierten en parametros
*/

function procesadorDeFrutas(manzanas, naranjas){
    let jugo = " Jugo de " + manzanas + " manzanas y " + naranjas + " naranjas ";
    return jugo;
}

let jugoDeManzana = procesadorDeFrutas(4,0);
console.log(jugoDeManzana);

let jugoDeNaranja = procesadorDeFrutas(0,5);
console.log(jugoDeNaranja);
