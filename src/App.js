import React, { Component } from "react";

import "./App.css";

import miObjTarea from "./samples/tareasjson.json";
import miUsuario from "./samples/usuariosjson.json";
import Tareas from "./componentes/Tareas"
import Usuarios from "./componentes/Usuarios";

class App extends Component {
  metodoEstado = {
    miObjTarea: miObjTarea,
  };

  metodoUsuario = {
    miUsuario: miUsuario,
  };

  render() {
    return (
      <div>
        <Usuarios propiedadUsuarios = {this.metodoUsuario.miUsuario}/>
        <Tareas propiedadTareas = {this.metodoEstado.miObjTarea} />
      </div>
    );
  }
}

export default App;
