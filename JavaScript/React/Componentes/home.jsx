//COMPONENTES
//USO DE MÁS DE UN COMPONENTE -> COMO IMPORTARLO Y EXPORTARLOS

//COMPONENTE 1
import React from "react";
//Para mostrar otro componente debo hacer un importación por default en el archivo padre(HOME O APP)
import Navbar from "./navbar";

//create your first component
const Home = () => {
  return (
    <>
      {/*INPUT PARA ESCRIBIR TAREAS*/}
      <Navbar />
      <div className="box container col-4 text-center">
        <h1 className="mt-5">TODOS</h1>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nueva tarea"
          />
        </div>
      </div>
      {/*LISTA DE TAREAS*/}
      <div className="container col-4 py-2">
        {/*En"style" -> JS nos dice que debemos pasar un objeto  */}
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">Featured</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
