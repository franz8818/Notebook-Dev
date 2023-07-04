//TODO LIST CON VANILLA JS

//Trabaja atravez del DOM: Document Object Model -> lo que el usuario puede ver o no.

//variables -> Lugares donde se almacena info en la memoria del navegador
//let permite declarar una variable mutable
let msj = "Hola Franz Seidel";
//const nos permite declarar una variable inmutable
const msj2 = "Hola Franz"
console.log("msj,msj2");

//Para hacer mi todo list dinamico debo seguir los siguientes pasos:

//Para trbajar con HTML Y JS, necesitamos interactuar con el DOM -> Document Object Model
//1.Asignar un ID (Modo que tenemos para identificar un elemento en HTML & JS -> unico por cada etiqueta)
// <input placeholder="Nueva tarea" id="todo" />
//Obten elemento por ID -> Es el document(DOM)
const inputTodo = document.getElementById("todo"); //En JS

//2. Crear la primera utilidad -> Registrar lo que el usuario escriba. 
//Cada vez que el usuario escriba en el INPUT y le de click en el BOTON
//Necesito guardar en JS el valor de lo que el usuario esta escribiendo.
//EVENTO -> Es la forma en que el usuario interactua con JS -> Todas las acciones que el usuario haga en la pagina.
//Se trabaja con el EVENTO -> CHANGE -> Evento de cambio -> Registra cuando un elemento cambia -> Se utiliza principalmente para INPUTS

//Evento del tipo "change"
//Empieza a escuchar por eventos -> Definir que tipo de evento queremos escuchar -> Evento del tipo CHANGE
//Función que va ejecutar (addEventListener) -> Función: Bloque de codigo reutilizable.
inputTodo.addEventListener("change", actualizaTarea());