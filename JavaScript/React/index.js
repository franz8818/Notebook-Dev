//ARCHIVO QUE CONTIENE LAS IMPORTACIONES DE REACT

//import react into the bundle
import React from "react";
//React se encarga del DOM
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
//importación archivo CSS
import "../styles/index.css";

//import your own components
//importación componente padre "Home" en otras plantillas puede ser "App"
import Home from "./component/home.jsx";

//render your react application
//objeto.metodo-dibujar(<componente padre/>, lo dibuja en un div con ("#ID"));
ReactDOM.render( < Home / > , document.querySelector("#app"));