//EXERCISE 1 - Hello World
console.log("Hello World");

//EXERCISE 2 - Print Variables to the Console
//Declare una nueva variable llamada color e imprimi su valor en console.log
var mySuperVariable = 'hello';
console.log(mySuperVariable);

var color = "red"
console.log(color)

//EXERCISE 3 - Multiply Two Values
//En una variable guarde una multiplicación "producto". La consola muestra el resultado de esa variable
const variablesAreCool = 2345 * 7323;
console.log(variablesAreCool);

//EXERCISE 4 - User Inputted Variables
//Este ejercicio estaba mas complicado, debia investigar terminos como prompt o parseInt
var age = parseInt(prompt('What is your age?'));

let nuevaEdad = age + 10;
console.log(nuevaEdad);

//EXERCISE 5 - Constants
// Recuerdo que solo cambie el valor de la constante VERSION, obte por seguir avanzando.
const VERSION = '0.9';
console.log(VERSION);

//EXERCISE 6 - String Concatenation - NO FUNCIONO - CONSULTAR
//Concatenar es algo que voy usar muy amenudo.
let myVar1 = "Hello";
let myVar2 = "World";

console.log(myVar1 + " " + myVar2);

//EXERCISE 7 - Creating Basic HTML Code
//La estructura de un doc HTML es: <html>, <head>, <title>, </title>, </head>, <body> </body> </html>
const a = '</title>';
const b = '</html>';
const c = '<head>';
const d = '</body>';
const e = '<html>';
const f = '</head>';
const g = '<title>';
const h = '<body>';

//Modify this variable
let htmlDocument = e + c + g + a + f + h + d + b
console.log(htmlDocument);

//EXERCISE 8 - Calling Your First Function
//Mañana voy analizar más este ejercicio. Para poder escribir mi propia conlusión 
//AI me tuvo que ayudar.
function isOdd(myNumber) {
    return !(myNumber % 2 == 0);
}

// Your code below:
var numeroAVerificar = 45345;
var resultado = isOdd(numeroAVerificar);
console.log(resultado);