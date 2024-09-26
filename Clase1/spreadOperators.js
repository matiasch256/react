// se usa en las estructuras de datos como objetos y arrays, para copiar el contenido que tiene dentro
// y exparsilo dentro de otro objeto o array. Porque sino se hace una copia por referencia y cualquiera de
// Los dos valores que se modifiquen , repercute en el otro.

let array = [1, 2, 3, 4];

let copyArray = [...array];

console.log(copyArray); // 1,2,3,4

array[0] = 10;

console.log(copyArray); //1,2,3,4
console.log(array); // 10,2,3,4
