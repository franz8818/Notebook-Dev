//Todo nuestro código JS no puede estar en el mismo archivo; 
//Eso hará que sea difícil de leer y casi imposible de mantener.

//Gracias a Webpack -> Es un paquete de módulos de JavaScript de código abierto. Sirve con JS, ​HTML, CSS e imágenes... 
//podemos dividir nuestro código en archivos pequeños como queramos y luego podemos hacer referencia a otros archivos de nuestro archivo actual.
//Ejemplo cuando importamos nuestros estilos(CSS), boostrap JQuery desde index.js 

//Utiliza la palabra importar para traer variables, clases o funciones de otros archivos.
//Usted usa la palabra exportar para exponer variables, clases o funciones que serán utilizadas por otros archivos.

//Existen dos maneras maneras de hacer importaciones y exportaciones.

//EJEMPLO 1 -> Se pueden exportar diferentes datos.
//Importing from ./index.js
//content on index.js
import {
    multiplyFunction
} from './my_file.js'
let total = multiplyFunction(3, 6)
// console.log(total);

//Exporting from./my_file.js
//content on my_file.js
export let multiplyFunction = function(a, b) {
    return a * b;
};



//EJEMPLO 2
//Se pueden hacer una sola vez, generalemente al final del archivo.
//Siempre se hace solo una exportación por default -> colección de datos una sola "cosa" -> Variable que contiene los datos.

//Importando por defecto 
//contenido en index.js 
import multiplyFunction2 from './my_file.js';

let total2 = multiplyFunction(3, 6)
console.log(total);

//Exportando por defecto
//contenido en my_file.js 
let multiplyFunction = function(a, b) {
    return a * b;
};
export default multiplyFunction2;

//EJEMPLO 3 -> En los archivos components.jsx, functions.js y index.js -> De este modo se muestra como se utilizan dos archivos para divividir nuestro codigo.
//NOTA: Este ejemplo utiliza componentes de react de una vez. :s