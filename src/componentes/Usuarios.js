
import React, { Component } from 'react'
import Usuario from "./Usuario";


export class Usuarios extends Component {
    render() {
        return (
            <div>
                {this.props.propiedadUsuarios.map(elemento => <Usuario propiedadUsuario = {elemento} key = {elemento.id}/>
        )}
            </div>
        )
    }
}

export default Usuarios
