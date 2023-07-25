//ESTE ARCHIVO CONTIENE UN EJEMPLO DEL COMPONENTE PADRE "home"

//Se está importanto esta funcionalidad a la libreria de REACT 
import React from "react";

//include images into your bundle
//Se está importando una imagen de la carpeta src/img/... 
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//Declaración del componente padre "Home" -> Primera letra en mayúsculas.
const Home = () => {
    //En React el atributo "class" lo colocamos como "className" ->"class" palabra reserevada de JS"
  return <div className="text-center"></div>;
};

//Se exporta por default a "Home"
//NOTA: revisar la carpeta de Importación y Exportación para aclarar conceptos...
export default Home;
