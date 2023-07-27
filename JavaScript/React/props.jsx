//"props"(OBJETO) -> podemos reutilizar un componente  -> asignar un PARAMETRO
//Para que welcome reciba información se hace mediante "props" -> Función nativa de React
//1. Escribimos (props) en componente hijo.
//2. Pasamos una propiedad en la funcion normal -> eje un nombre en esté caso <Welcome name="Franz" />
//En el caso que sea con apellido se coloca {props.secondName} seguido de {props.name}

function Welcome (props) {
    return <h1>Hello, {props.name} {props.secondName} </h1>;
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

//"props" -> Es el parámetro donde nosotros guardamos la colección de datos que nosotros queremos 
//pasar a esa función para que la lea.

//EJEMPLO
function saludar(name)
{console.log("Hola "+name)}

saludar ("Diego")//<saludar
name="Diego" >
//Hola Diego

saludar ("Maria")//<saludar
//name="Diego" />
//Hola Maria

