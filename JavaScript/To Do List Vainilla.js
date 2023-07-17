//DOCUMENTACIÓN
//TO-DO-LIST CON VANILLA JS

//PREPARO LOS ARCHIVOS HTML & CSS
// 1. Hacer una planificación de como vamos a trabajar y desarrolar el "proyecto"
// 2. Crear archivos -> index.html, styles.css
// 3. Crear estructura del HTML con un -> !
// 4. Para visualizar el HTML (en este caso) utilizar -> "live Server" -> click derecho en el archivo HTML.
// 5. Dar estructura al HTML -> <main> + <div> + <header> + etc...
// 6. Linkear CSS con HTML con el código <link rel="stylesheet" href="styles.css"> y probarlo en archivo styles.css
// 7. Le doy estilo a mi HTML con los selectores de etiquetas{} y clases{}
// 8. Aplicar el "display: flex"


//1. Crear archivo -> app.js
//2. Conectar un archivo JS con el archivo HTML -> Al final del body en HTML -> Agregar un "script" -> Vinculación con JS 
// <script src="app.js"></script> -> Cedemos el control de nuestra web-app a JS.

//3. Crear un "console.log" -> Herramienta para probar codigo en la terminal y así verificar que se conecto con mi HTML.
console.log("Hola Mundo");



//Para hacer mi todo list dinamico debo seguir los siguientes pasos:

//Para trbajar con HTML Y JS, necesitamos interactuar con el DOM -> Document Object Model
//1.Asignar un ID (Modo que tenemos para identificar un elemento en HTML & JS -> unico por cada etiqueta)
// <input placeholder="Nueva tarea" id="todo" />
//Obten elemento por ID -> Es el document(DOM)
const inputTodo = document.getElementById("todo"); //En JS

//2. Crear la primera utilidad -> Registrar lo que el usuario escriba. 
//Cada vez que el usuario escriba en el INPUT y le de click en el BOTON
//Necesito guardar en JS el valor de lo que el usuario esta escribiendo.
//EVENTO -> Es la forma en que el usuario interactua con JS -> Todas las acciones que el usuario haga en la página.
//Se trabaja con el EVENTO -> CHANGE -> Evento de cambio -> Registra cuando un elemento cambia -> Se utiliza principalmente para INPUTS

//Variable inmutable -> nuevaTarea = "string vacio -> para que agrege el valor del usuario";
//Quiero que cuando el usuario le de cliclk al boton "agregar" ó le de enter -> Esa tarea se agrege a mi a mi total de tareas "listaTareas"
let nuevaTarea = "";
let listaTareas = []; //arreglo vacio -> "lista de cosas"

//function nombreFuncion() { bloque de codigo }
//Un parámetro es un valor dinámico -> Pasa cuando se ejecuta la función.
function actualizaTarea(evento) {
    //Permite asignarle a la nueva al STRING vacio un nuevo valor (lo que el usuario vaya escribiendo) 
    nuevaTarea = evento.target.value
    console.log(nuevaTarea);
}

//consola(parámetro.objetivo.valor de lo que el usuario escribe -> propiedad del TARGET)
console.log(evento.target.value);

//Evento del tipo "change"
//Evento transmite información -> La idea es que imprima la info.
//Empieza a escuchar por eventos -> Definir que tipo de evento queremos escuchar -> Evento del tipo CHANGE
//Función que va ejecutar (addEventListener) -> Función: Bloque de codigo reutilizable.
// elemento.addEventListener ("tipo de evento", (parámetro) arrowfunction function(parámetro))
inputTodo.addEventListener("change", () => actualizaTarea());

//Le paso la info del evento a mi función -> Utilizo el console.log de este evento ->function actulizaTarea(evento){}
//Imprime el evento -> Nos fijamos en el TARGET -> Qué es el elemento que esta disparando el evento -> En esté caso es el INPUT
//si colocamos en el console.log -> (evento.target); -> Este nos muestra el INPUT -> Que es el objetivo(target)
//Pero queremos ver el valor, lo que la persona está escribiendo. Usamos -> (evento.target.value);
function actualizaTarea(evento) {
    console.log(evento.target.value);
}

//Se crea función para ver si esta funcionado.
function agregarTareaLista() {
    console.log(listaTareas); //Verifico si muestra en la consola el array[] vacio. 
    //Aunque registra el evento aun no le he dado la función a ese vento, aun no hace nada con los parametros. 

    console.log("Hola Franz"); //Creo un msj para asegurar que los "eventos" se esten registrando.
}

//elemento.addEventListener ("evento -> usuario hace click con el mouse", (parámetro) arrowfunction function(parámetro))
//Se debe agregar el evento -> "click" y la función -> "agregarTareaLista()"
botonAgregar.addEventListener("click", agregarTareaLista);