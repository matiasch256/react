// Los array en BD NO RELACIONALES son  COLECCIONES y en BD RELACIONALES son las TABLAS.
//Los objetos dentro de los arrays en BDNOSQL  son documentos y en BDSQL son REGISTROS.

//.map() --> es un metodo que devuelve un array completamente nuevo y tiene un callback, e,indice.

let array = [
  { nombre: "Juan", apellido: "Pérez", dni: "12345678" },
  { nombre: "María", apellido: "González", dni: "87654321" },
  { nombre: "Carlos", apellido: "López", dni: "45678901" },
  { nombre: "Ana", apellido: "Pérez", dni: "23456789" },
  { nombre: "Luis", apellido: "Rodríguez", dni: "98765432" },
];

let nuevoArray = array.map((e, i) => {
  return { id: i + 1, ...e };
});

console.log(nuevoArray);

//Metodo .filter() Te retorna un nuevo array , con los elementos que cumplan con la condicion dada.

let apellidosIguales = array.filter((e) => {
  return e.apellido === "Pérez";
});
let apellidosIgualesConId = apellidosIguales.map((persona, i) => {
  return { id: i + 1, ...persona };
});

console.log(apellidosIguales);
console.log(apellidosIgualesConId);

//METODO .find() retorna el elemento encontrado o undefined, en base a una condicion dada.
//Te devuelve el primer elemento encontrado, generalmente se usa con IDS.

//Metodo .some() retorna un bool true o false, depende de una condicion pasada.
// Para saber si algo existe o no existe.

//Metodo reduce(). Reduce un array a su minima expresion, sirve por ejemplo para sumar todos los elementos que hay dentro.
// tiene un callback con el siguinte orden de parametros --> acc,element.  Despues de la funcion flecha se pone en cuanto inicia el acumulador.

let numeros = [1, 2, 3, 4, 1, 1];
let sumaNumeros = numeros.reduce((acc, e) => {
  return acc + e;
}, 0);
console.log(sumaNumeros); // 12

// Si uso el ultimo parametro de reduce, y no coloco el 0 y el array que recorre adentro solo tiene numeros , no pasa nada, porque toma el primer elemento del array en el acc y empieza a sumar desde el segunda posicion.
//Ahora si no son numeros y adentro hay objetos, si es necesario colocar en 0, por que sino te va a empezar a sumar object , y te va a dar cualquier cosa.
