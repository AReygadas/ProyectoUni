import React from 'react'
import { Usuario, Contraseña } from './SingUpStyle'
import { Contenedor, Fondo, Enlace, Texto } from './styles'
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact'

class SingUp extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Fondo>
                    <MDBRow center> 
                        <MDBCol md="4"> 
                            <Contenedor>
                                <MDBRow center>
                                    <Texto>SingUp</Texto>
                                </MDBRow>
                                <Usuario type='tetx' placeholder='Npmbre'/>
                                <Usuario type='tetx' placeholder='Usuario'/>
                                <Contraseña type='password' placeholder='Contraseña'/>
                                <Contraseña type='password' placeholder='Confirma Contraseña'/>
                                <MDBRow center>
                                    <MDBBtn gradient="purple">Enviar</MDBBtn>
                                </MDBRow>
                            </Contenedor>
                        </MDBCol>
                    </MDBRow>
                </Fondo>
            </React.Fragment>
        )
    }
}
export default SingUp