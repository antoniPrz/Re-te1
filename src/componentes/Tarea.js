import React, { Component } from 'react'

 class Tarea extends Component {

  

    render() {


       // Haciendo el destructuring 

        const {propiedadTarea} = this.props; 

        return (
            <div>
          {propiedadTarea.titulo} -
          {propiedadTarea.descripcion} -
          {propiedadTarea.done} -
          {propiedadTarea.id} 
          <input type= "checkbox"/>
          <button>
              x
          </button>
            </div>
        )
    }
}

export default Tarea;
