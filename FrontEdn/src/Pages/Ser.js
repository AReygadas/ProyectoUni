import React from 'react'
import {MDBCol, MDBContainer, MDBBtn, MDBFormInline, MDBRow} from 'mdbreact'
import BuscarGrupo from '../Components/BuscarGrupo'
import {Fondo1, Texto, Lista} from '../Styles/styles'
import Grupo from '../Components/Grupo'
import Tabla from '../Components/TablaAlumnos'
import Modal from '../Components/ModalSer'

export default class EvaluacionSer extends React.Component{
    handleChic(){
        console.log("ee")
    }

    render(){
        return(
            <React.Fragment>
                <Fondo1>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="3">
                            <BuscarGrupo />
                            <Grupo />
                        </MDBCol>
                        <MDBCol md="3">
                            <Texto>ALUMNOS</Texto>
                            <ul>
                                <Lista onClick={this.handleChic}>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>                                
                            </ul>
                        </MDBCol>
                        <MDBCol md="6">
                            <Texto>                            
                                <MDBRow > 
                                <MDBFormInline className="md-form mr-auto mb-4">
                                    <input style={{color:'#ffff'}}className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                    <MDBBtn gradient="blue" rounded size="sm" type="submit" className="mr-auto">
                                    Buscar Alumno 
                                    </MDBBtn>
                                </MDBFormInline>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="8">
                                    <h2>Nombre Del Alumno</h2>
                                    <h3>Matricula</h3>
                                </MDBCol>
                                <MDBCol md="4">
                                    <Modal />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md="8">
                                    <h3>Grupo</h3>
                                    <h3>Carrera</h3>
                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBBtn outline color="info">Calificacion <br/> <h2>8</h2></MDBBtn>
                                </MDBCol>
                                <MDBRow>
                                    <Tabla />
                                </MDBRow>
                            </MDBRow>
                            </Texto>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </Fondo1>
            </React.Fragment>
        )
    }
}