import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact"
import { Contenedor, Enlace, Texto, Fondo} from '../Styles/styles'

import {Link} from 'react-router-dom';


class LogIn extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Fondo>
                 <MDBContainer>
                    <MDBRow center> 
                        <MDBCol md="6"> 
                            <Contenedor>
                                <Texto>LogIn
                                    <MDBInput label="Usuario" icon="user" />
                                    <MDBInput type='password' label="Contraseña" icon="lock" />
                                </Texto>
                                <MDBRow center>
                                    <MDBBtn gradient="blue">Entrar</MDBBtn>
                                </MDBRow>
                                <MDBRow center>  
                                    <Enlace>
                                        <Link to='/SingUp'>Registrate aqui.</Link>
                                    </Enlace>
                                </MDBRow>
                            </Contenedor>
                        </MDBCol>
                    </MDBRow> 
                </MDBContainer>
                </Fondo>
            </React.Fragment>
        )
    }
}
export default LogIn