
import React, { Component } from 'react'
import TareaIndividual from "./Tarea"

class Tareas extends Component {

    render() {
        return (
            <div>
        {this.props.propiedadTareas.map(elemento => <TareaIndividual propiedadTarea = {elemento} key={elemento.id}/>
        )}
            </div>
        )
    }
}

export default Tareas;



