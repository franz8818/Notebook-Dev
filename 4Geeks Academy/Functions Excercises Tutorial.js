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
//Declaro una función
function calculateArea(length, edge) {
    return length * edge;
}
// Your code Below this line:
let squareArea1 = calculateArea(4, 4);
let squareArea2 = calculateArea(2, 2);
let squareArea3 = calculateArea(5, 5);
//Ahora me pide crear una nueva variable para cada nueva repetición(iteración) de la función 

//EXERCISE 4 - Defining VS Calling a Function
//Fórmula de código básica:
//function de JS -> Define una función -> Nombre lo más descriptivo
//Parametros: si la función está sumando dos enteros, esto significa que la función necesitará dos parámetros.
//Alcance{} -> Scope -> Operaciones dentro de la función.
function myFunctionName(parametro, parametro2, ...parametroX) {
    //el código de la función va aquí
    return algo; // No todas las funciones deben retornar algo, pero se recomienda que lo hagan. 
}
//EJEMPLO
function concatenateNumberToString(localNumber, localString) {
    let localVariable = localString + "" + localNumber;
    return localVariable;
}

//Define the function called "multi" that expects 2 parameters:
function multi(num1, num2) {
    return num1 * num2;
}

//don't edit anything below this line
var returnValue = multi(7, 53812212);
console.log(returnValue);

//EXERCISE 5 - Anonymous Functions
//Las funciones anónimas deben almacenarse dentro de una variable para poder usarlas.
let multy = function(a, b) {
    return a * b;
}
//Dont edit anything ABOVE this line

//your code here
var result = multy(324234, 47);
console.log(result);

//EXERCISE 6 - Arrow Function
//Corrigen el alcance que tienen las funciones tradicionales, que requieren unión(binding), para React.
//Las funciones de flecha se comportan como las funciones en cualquier otro lenguaje, las functiones tradicionales no.
const sum = (param1, param2) => {
    return param1 * param2;
}

const multy2 = (a, b) => {
    return a * b;
}

//Dont edit anything below this line
console.log(multy2(324234, 47))

//EXERCISE 7 - Functions That Returns
//Si tus funciones retornan algo, puedes crear algoritmos que utilicen varias funciones al mismo tiempo.
let dollarToEuro = function(dollarValue) {
    return dollarValue * 0.89;
}
let euroToYen = function(euroValue) {
    return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******
//RESPUESTA LARGA (CHATGPT)
let dollarAmount = 137;
let euros = dollarToEuro(dollarAmount);
let yens = euroToYen(euros);
//se utiliza la función dollarToEuro para convertir el valor de 137 dólares a euros. 
//Luego, se pasa ese valor de euros a la función euroToYen para obtener el valor equivalente en yenes.
console.log(yens);

//RESPUESTA CON CODIGO MÁS LIMPIO (CHATGPT)
const dollarToEuro2 = dollarValue => dollarValue * 0.89;
const euroToYen2 = euroValue => euroValue * 124.15;

const yens2 = euroToYen2(dollarToEuro2(137));

console.log(yens); // Salida: 17375.61


//RESPUESTA IMPRIMIENDO EL VALOR EN yenes DIRECTAMENTE EN EL console.log 
//SUGERIDO EN MENTORIA POR ALEXIS ANTES QUE CHAT GPT 
console.log(euroToYen(dollarToEuro(137)))
// convertir un valor en dollares a un valor en euro, retorna como una variable.
//Se llama a la función dollarToEuro con el valor de 137 y el resultado se pasa directamente a la función euroToYen. 
//El valor final en yenes se imprime directamente en console.log.