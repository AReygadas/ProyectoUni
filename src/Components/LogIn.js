import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact"
import { Contenedor, Fondo, Enlace, Texto } from './styles'

class LogIn extends React.Component{

    render(){
        return(
            <React.Fragment>
              
                <MDBContainer>
                    <MDBRow center> 
                        <MDBCol md="4"> 
                       
                            <Contenedor>
                                <Texto>LogIn
                                    <MDBInput label="Usuario" icon="user" />
                                    <MDBInput label="Contraseña" icon="lock" />
                                    </Texto>
                                <MDBRow center>
                                    <MDBBtn gradient="blue">Entrar</MDBBtn>
                                </MDBRow>
                                <MDBRow center>  
                                    <Enlace>
                                        Registrate aqui.
                                    </Enlace>
                                </MDBRow>
                            </Contenedor>
                            
                        </MDBCol>
                    </MDBRow>
                  
                </MDBContainer>
                
            </React.Fragment>
        )
    }
}
export default LogIn