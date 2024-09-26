// {a,b,c,d} = objetoDesestructurado.
// Es como sacar las propiedades del objeto y usarlas como variables. Con objetos no importa el orden
//Pero si importa el nombre. Cuando es un array , no importa el nombre pero si importa el orden.

let objeto = {
  nombre: "Franco",
  apellido: "Bonetto",
};

let { nombre, apellido } = objeto;
console.log(nombre); // Franco

let array = [1, 2, 3, 4, 5];

let [a, b, c, d, e] = array;
console.log(c); //3
