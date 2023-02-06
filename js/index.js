//EJEMPLO if/else
// PARA PARSEAR LOS DATOS
// USAMOS parseInt
// CAMBIA DE UN STRING A UN DATO NUMERICO

let edad = parseInt(prompt("ingresa tu edad"))
if (edad === 18) {
    alert("welcome to my world")
} else {
    alert("access denied")
}

//DECLARACION DE UN objeto literal
const persona = {
    nombre: "Camilo",
    apellido: "Sanchez"
}
//CONSULTAR DATOS DE UN OBJETO
console.log(persona.apellido);

//DECLARACION DE UN array 
//INDICE O POSICION 0         1.      2
const frutas = ["Manzana", "Pera", "Mango"]
//LARGO=LENGTH      1         2.      3

//CONSULTAR UN VALOR DE UN array
console.log(frutas[1]);

//FUNCIONES
function saludar() { //DECLARACION DE UNA FUNCION
    //BLOQUE DE CODIGO A EJECUTAR
    console.log("Hola vengo de la funcion");
}
//LLAMAR UNA FUNCION O "INVOCAR"
saludar() //LLAMANDO A LA FUNCION