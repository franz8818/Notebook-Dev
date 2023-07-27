//FUNCTIONS

//TIPOS DE FUNCIONES
//Funciones de declaración
//Funciones de expresión 

//Las funciones dependiendo del contexto donde están, cambian de nombre.
//EJEMPLO

//Funciones que se encuentran dentro de un objeto -> const persona{}
function saludar() {} //métodos

//Tipos de dato que puede recibir cualquier función 
//función nativa de JS -> EJEMPLO DE UNA FUNCIÓN
alert(AcaVanLosDatos)

//FUNCIÓN CALLBACK
//Cuando pasamos una funcion como argumento, ese nombre cambia -> callback
//Luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

//EJEMPLO 1 -> JS simple
alert(function() {}) //callback -> pasando una función como argumento

//EJEMPLO 2 ->Modo PRO 
alert(() => {}) //callback -> pasando una función como argumento

function saludar(nombre) {
    alert("Hola " + nombre);
}

//EJEMPLO 3 ->callback sincrónica, ya que se ejecuta inmediatamente.
function procesarEntradaUsuario(callback) {
    var nombre = prompt("Por favor ingresa tu nombre.");
    callback(nombre);
}

procesarEntradaUsuario(saludar);