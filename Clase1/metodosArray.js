// Los array en BD NO RELACIONALES son  COLECCIONES y en BD RELACIONALES son las TABLAS.
//Los objetos dentro de los arrays en BDNOSQL  son documentos y en BDSQL son REGISTROS.

//.map() --> es un metodo que devuelve un array completamente nuevo y tiene un callback, e,indice.

let array = [
  { nombre: "Juan", apellido: "Pérez", dni: "12345678" },
  { nombre: "María", apellido: "González", dni: "87654321" },
  { nombre: "Carlos", apellido: "López", dni: "45678901" },
  { nombre: "Ana", apellido: "Martínez", dni: "23456789" },
  { nombre: "Luis", apellido: "Rodríguez", dni: "98765432" },
];

let nuevoArray = array.map((e, i) => {
  return { id: i + 1, ...e };
});

console.log(nuevoArray);
