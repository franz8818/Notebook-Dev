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
const frutas = ["Manzana", "Pera", "Mango"]
//CONSULTAR UN VALOR DE UN array
console.log(frutas[1]);