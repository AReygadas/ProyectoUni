import React from 'react'
import {Link} from 'react-router-dom'
import { Usuario, Contraseña, TextoAz } from '../Styles/SingUpStyle'
import { Contenedor, Fondo, Texto } from '../Styles/styles'
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact'


class SingUp extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Fondo>
                    <MDBRow center> 
                        <MDBCol md="4"> 
                            <Contenedor>
                              <Link to='/'><TextoAz>Regresar</TextoAz></Link>
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