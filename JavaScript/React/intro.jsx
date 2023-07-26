//REACT
//React.js se define a sí mismo como una librería de front-end para interfaces de usuario (UIs). 
//Básicamente, React propone una nueva forma de crear sitios web al rediseñar todo el flujo de trabajo de codificación y hacer que los sitios web sean más rápidos.

//Con React "eliminamos" el DOM. -> Se hace cargo de el.
//Con esto mejorarmos el rendimiento y hacemos que nuestro codigo no sea tan rebundantey engorroso.

//Nuestro trabajo es crear tus propios <Tags> y definir cómo deben mostrarse o representarse (render).

//COMPONENTES -> Divividir la app en partes pequeñas(componentes) -> Juntas forman un sitio web.
<componentes> son una pequeña parte de tu diseño, pero algunas están ocultas al principio. 
    Tendrás que mostrarlos y esconderlos según el comportamiento del usuario.</componentes>

//React.JSX, -> "lenguaje" especial (una extensión de JS) -> HTML+JS
//Permite escribir HTML puro dentro de tu código React/Javascript sin tener que usar comillas (convirtiéndolo en string). 
//Básicamente elimina la necesidad de concatenar string HTML. 

//EJEMPLO 1
return <h1 id="name"> {person.name} </h1>;  //Envolver el código entre llaves, codigo dinámico JS en HTML.

//EJEMPLO 2
//creamos un componente que siempre debe retornar un html(un mismo bloque) -> Se identifica por medio de la mayuscula "Alert"
//Etiqueta personalizada ->  <Alert/>  es un componente JSX
const Alert = function( ){
  return (<div className="any-class-name">Hola mundo</div>);
  }
  ReactDOM.render(<Alert/>) // «Alert/> es nuestro componente JSX creado

//Siempre debe evaluarse como una expresión
//No podemos usar declaraciones JS dentro de las llaves, como la declaración if..else por ejemplo.
//En su lugar debemos usar una expresión ternaria que tiene el mismo efecto.

//return <h1 id="name"> {if(person.name == "John") "John"; else "Tom" } </h1>; -> NO FUNCIONA JSX

return <h1 id="name"> {person.name == "John" ? "John" : "Tom" } </h1>; 
//funciona en JSX y evualará a <h1 id="name"> John </h1> o a <h1 id="name"> Tom </h1> dependiendo del valor de person.name 

//COMPONENTES -> React se basa en componentes -> nabvar, card, footer 
//Juntamos esas piezas(componentes) como las de "lego" -> forma interfaz consistente.
//Como los componentes de BOOTSRAP pero más complejos
//Estos componentes se pueden basar en el uso de las estructuras JS familiares de función o clase.
//Existen componentes padres e hijos 

//EJEMPLO 1
//Trabajamos dos componentes -> Welcome("hijo") & App("padre") -> nombres de funciones en mayúscula (PascalCase)
//"retorna" un codigo HTML
//Etiqueta de contine varias etiquetas es la "padre"
//Con jsx los atributos "class" -> se deben escribir como -> className
//Si quiero cambiar varios "class" -> usar COMMAND + F -> buscar "class=" -> remplazar por "className"

function Welcome (props) {
  return <h1>Hello, (props.name) </h1>;
}
  function App() {
  return (
    <div>
  <Welcome name="Sara" />
  <Welcome name="Cahal" />
  <Welcome name="Edite" />
  </div>
  );
}

//EJEMPLO 2
import React from 'react';

//Renombramos el componente a MyCard 
//EJEMPLO -> Cada componente en React debe tener un método de renderizado que devuelva un bloque de código HTML.
//"return" solo puede tener único bloque de codigo -> Si necesitamos dos bloques(DIV) o más, utilizamos la etiqueta React Fragment "<></>"" 
function MyCard(){
    return (
        <div className="card" style={{width: "18rem"}}> //Observa que algunos atributos html cambian sus nombres o valores para funcionar en React
          <img className="card-img-top" src="..." alt="Card image cap" /> //Ahora debemos tener cuidado de cerrar siempre las etiquetas de cierre automático
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    );
}