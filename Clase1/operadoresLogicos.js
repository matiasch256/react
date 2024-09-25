// Operador OR : Devuelve el primer truty o el ultimo falsy.
console.log("Hola" || "Chau" || false); // hola
console.log(false || "chau"); // chau
console.log(false || false || undefined); //undefined.

//Operador AND devuelve el primer falsy o el ultimo truty
console.log(false && false && undefined); //false.
console.log(true && true && "hola"); // hola.
