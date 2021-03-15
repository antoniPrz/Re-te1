import React, { Component } from 'react'

 class Usuario extends Component {
    render() {
        return (
            <div>
            {this.props.propiedadUsuario.nombre} - 
            {this.props.propiedadUsuario.apellido} -
            {this.props.propiedadUsuario.activo} 
            {this.props.propiedadUsuario.id} 

            </div>
        )
    }
}

export default Usuario
