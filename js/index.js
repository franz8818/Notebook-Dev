// EJEMPLO if/else
// PARA PARSEAR LOS DATOS
// USAMOS parseInt
// CAMBIA DE UN STRING A UN DATO NUMERICO

// let edad = parseInt(prompt("ingresa tu edad"))
// if (edad === 18) {
//     alert("welcome to my world")
// } else {
//     alert("access denied")
// }

//DECLARACION DE UN objeto literal
// const persona = {
//     nombre: "Camilo",
//     apellido: "Sanchez",
//     edad: 35,
//     is_activo: true,
//     saludar: function() {
//         console.log("Holas a todos")
//     }
// }
//CONSULTAR DATOS DE UN OBJETO
// console.log(persona.apellido);

//ARRAY
//INDICE O POSICION 0         1.      2
const frutas = ["Manzana", "Pera", "Mango"]
//LARGO=LENGTH      1         2.      3

//CONSULTAR UN VALOR DE UN array
// console.log(frutas);
deportes.push("baloncesto") //INGRESAR NUEVO DATO AL FINAL DE LA ARRAY
deportes.pop() //ELIMINAR UN DATO AL FINAL DE LA ARRAY

//FUNCIONES - FUNCION DE DECLARACION
function saludar() { //DECLARACION DE UNA FUNCION
    //BLOQUE DE CODIGO A EJECUTAR
    console.log("Hola vengo de la funcion");
}
//LLAMAR UNA FUNCION O "INVOCAR"
saludar() //LLAMANDO A LA FUNCION



function busquedaFrutas () {
let busqueda = prompt("Ingrese su busqueda")


let pos = frutas.indexOf("busqueda");
if (pos >= 0){
    alert("si existe")
} else { 
    alert("No se encontraron")
}

}
//ESTRUCTURAS DE CONTROL: for loops
//for(inicializacion;condicion;actualizacion){
//BLOQUE DE CODIGO
//}

//["Manzana", "Pera", "Mango"]
//              3  3 <      3
for (let i = 0; i < frutas.length; i++) { //true
    console.log(frutas[i]); // naranjas
}
//false

