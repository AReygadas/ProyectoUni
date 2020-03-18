import React from 'react'
import {FondoH} from '../Styles/styles'
import {Link} from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, 
         MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';

export default class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                <FondoH>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="4">
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src="https://3.bp.blogspot.com/-tTS57ydLXDI/Wf4_2y8GzBI/AAAAAAAABao/U2pmqJsKP6MU4NY0slWOU6kdryxDZV-bACEwYBhgL/s1600/569ee459de3d20_Adopt-a-Teamwork-Mindset.jpg" waves />
                                <MDBCardBody>
                                <MDBCardTitle>Formacion de Euipos</MDBCardTitle>
                                <MDBCardText>
                                    En esta seccion podras formar equipos de trabajo por grupos y 
                                    asignales temas, actividades, exposiciones etc.
                                </MDBCardText>
                                <Link to='/ForEqui'><MDBBtn gradient="peach">Orale Organicense</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol size="4">
                        <MDBCard style={{ width: "22rem"}}>
                                <MDBCardImage className="img-fluid" 
                                src="https://tandemup.net/wp-content/uploads/2018/08/valoraciones-en-Amazon-compressor.jpeg" 
                                waves />
                                <MDBCardBody>
                                <MDBCardTitle>Evaluacion del ser</MDBCardTitle>
                                <MDBCardText>
                                    Aqui podras evaluar el ser de cada alumno en un sistema de tikets, 
                                    en el cual podras tanto restar como otorgar puntos por conducta o desempeño.
                                </MDBCardText>
                                <Link to='/EvaSer'><MDBBtn  gradient="purple">Ajusticiar Alumnos</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>  <MDBCol size="4">
                        <MDBCard style={{ width: "22rem"}}>
                                <MDBCardImage className="img-fluid" 
                                src="https://tandemup.net/wp-content/uploads/2018/08/valoraciones-en-Amazon-compressor.jpeg" 
                                waves />
                                <MDBCardBody>
                                <MDBCardTitle>Creacion de listas</MDBCardTitle>
                                <MDBCardText>
                                    Aqui podras evaluar el ser de cada alumno en un sistema de tikets, 
                                    en el cual podras tanto restar como otorgar puntos por conducta o desempeño.
                                </MDBCardText>
                                <Link to='/EvaSer'><MDBBtn  gradient="blue">Ajusticiar Alumnos</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>                        
                    </MDBRow>
                        <br/>
                    <MDBRow>
                        <MDBCol size="4">
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src="https://3.bp.blogspot.com/-tTS57ydLXDI/Wf4_2y8GzBI/AAAAAAAABao/U2pmqJsKP6MU4NY0slWOU6kdryxDZV-bACEwYBhgL/s1600/569ee459de3d20_Adopt-a-Teamwork-Mindset.jpg" waves />
                                <MDBCardBody>
                                <MDBCardTitle>Evaluación de equipos</MDBCardTitle>
                                <MDBCardText>
                                    En esta seccion podras formar equipos de trabajo por grupos y 
                                    asignales temas, actividades, exposiciones etc.
                                </MDBCardText>
                                <Link to='/ForEqui'><MDBBtn gradient="aqua">Orale Organicense</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol size="4">
                        <MDBCard style={{ width: "22rem"}}>
                                <MDBCardImage className="img-fluid" 
                                src="https://tandemup.net/wp-content/uploads/2018/08/valoraciones-en-Amazon-compressor.jpeg" 
                                waves />
                                <MDBCardBody>
                                <MDBCardTitle>Pase de lista</MDBCardTitle>
                                <MDBCardText>
                                    Aqui podras evaluar el ser de cada alumno en un sistema de tikets, 
                                    en el cual podras tanto restar como otorgar puntos por conducta o desempeño.
                                </MDBCardText>
                                <Link to='/EvaSer'><MDBBtn outline color="success">Ajusticiar Alumnos</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>  <MDBCol size="4">
                        <MDBCard style={{ width: "22rem"}}>
                                <MDBCardImage className="img-fluid" 
                                src="https://tandemup.net/wp-content/uploads/2018/08/valoraciones-en-Amazon-compressor.jpeg" 
                                waves />
                                <MDBCardBody>
                                <MDBCardTitle>Plan de estudios</MDBCardTitle>
                                <MDBCardText>
                                    Aqui podras evaluar el ser de cada alumno en un sistema de tikets, 
                                    en el cual podras tanto restar como otorgar puntos por conducta o desempeño.
                                </MDBCardText>
                                <Link to='/EvaSer'><MDBBtn outline color="info">Ajusticiar Alumnos</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>                        
                    </MDBRow>

                  
                </MDBContainer>
               </FondoH>
            </React.Fragment>
        )
    }
}