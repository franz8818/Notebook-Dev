//EXERCISE 1 - Hello World
console.log("Hello World");

//EXERCISE 2 - What is a function?
//Una funcion es un fragmento de codigo contenido en {} que puedes ultilizar varias veces.
//Como las sumas. Importante es que tenga un return

function sum(number1, number2) {
    return number1 + number2;
}

var total = sum(2, 3);
var total2 = sum(5, 10);
var total3 = sum(2, 3);
var superduper = sum(3445324, 53454423)


console.log(total);
console.log(total2);
console.log(total3);
console.log(superduper);

//EXERCISE 3 - What is a function?
//Las funciones son bloques de código que se guardan para ser re-utilizados más tarde
//Es fragmento de codigo tiene un propósito definido y reliza una tarea especifica
//Siempre debe retornar algo.
//Ojo con duplicar codigo con la función

//EJEMPLO - una función que calcule el área de un cuadrado:
function calculateArea(length, edge) {
    return length * edge;
}
// Your code Below this line:
let squareArea1 = calculateArea(4, 4);
let squareArea2 = calculateArea(2, 2);
let squareArea3 = calculateArea(5, 5);
//Ahora me pide crear una nueva variable para cada nueva repetición(iteración) de la función 