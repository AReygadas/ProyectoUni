import React from 'react'
import {MDBCol, MDBInput, MDBBtn, MDBContainer, MDBRow} from 'mdbreact'
import BuscarGrupo from '../Components/BuscarGrupo'
import Grupo from '../Components/Grupo'
import {Fondo2, Lista} from '../Styles/styles'

export default class Equipos extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Fondo2>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md='2'>
                            <BuscarGrupo />
                            <Grupo />
                        </MDBCol>
                        <MDBCol md='4'>
                            <ul>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                                <Lista>130349 Arturo Reygadas Gonzalez</Lista>
                          
                            </ul>
                        </MDBCol>
                        <MDBCol md='6'>
                                <MDBRow>
                                    <MDBInput label='No de Equipos' type="number" />
                                    <MDBBtn gradient="blue">Aleatorio</MDBBtn>
                                    <MDBBtn gradient="aqua">Manual</MDBBtn>
                                </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                </Fondo2>
            </React.Fragment>
        )
    }
}