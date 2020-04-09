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
                                <Link to='/ForEqui'><MDBBtn gradient="peach">FORMAR EQUIPOS</MDBBtn></Link> 
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
                                <Link to='/EvaSer'><MDBBtn  gradient="purple">EVALUAR ALUMNOS</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>  <MDBCol size="4">
                        <MDBCard style={{ width: "22rem"}}>
                                <MDBCardImage className="img-fluid" 
                                src="https://i0.wp.com/www.distritovillaverde.com/wp-content/uploads/2020/01/CHECKLIST-ENERO-2020.jpg?fit=1506%2C800&ssl=1" 
                                waves />
                                <MDBCardBody>
                                <MDBCardTitle>Creacion de listas</MDBCardTitle>
                                <MDBCardText>
                                    Aqui podras evaluar el ser de cada alumno en un sistema de tikets, 
                                    en el cual podras tanto restar como otorgar puntos por conducta o desempeño.
                                </MDBCardText>
                                <Link to='/EvaSer'><MDBBtn  gradient="blue">CREAR LISTA</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>                        
                    </MDBRow>
                        <br/>
                    <MDBRow>
                        <MDBCol size="4">
                            <MDBCard style={{ width: "22rem" }}>
                                <MDBCardImage className="img-fluid" src="https://lh3.googleusercontent.com/proxy/ACd99vOKIztcSmxio28U6GKjX91SiL-4UA4UzId3soUzfpbRo1WwmvLmC8Xrz2bfNwrYfsAcVVDkg0ZhvQcDQRuQUt0JiJ-7r25NjkVe7_uya19R8XrDJ7i80Sx1RLPt-D_vS8hJAfge" waves />
                                <MDBCardBody>
                                <MDBCardTitle>Evaluación de equipos</MDBCardTitle>
                                <MDBCardText>
                                    En esta seccion podras formar equipos de trabajo por grupos y 
                                    asignales temas, actividades, exposiciones etc.
                                </MDBCardText>
                                <Link to='/ForEqui'><MDBBtn gradient="aqua">EVALUAR EQUIPOS</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol size="4">
                        <MDBCard style={{ width: "22rem"}}>
                                <MDBCardImage className="img-fluid" 
                                src="https://paynext.com.mx/wp-content/uploads/2019/05/reconocer-y-fomentar-la-puntualidad-de-los-empleados_imgdest.jpg" 
                                waves />
                                <MDBCardBody>
                                <MDBCardTitle>Pase de lista</MDBCardTitle>
                                <MDBCardText>
                                    Aqui podras evaluar el ser de cada alumno en un sistema de tikets, 
                                    en el cual podras tanto restar como otorgar puntos por conducta o desempeño.
                                </MDBCardText>
                                <Link to='/EvaSer'><MDBBtn outline color="success">PASAR LISTA</MDBBtn></Link> 
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>  <MDBCol size="4">
                        <MDBCard style={{ width: "22rem"}}>
                                <MDBCardImage className="img-fluid" 
                                src="https://www.centroestudioscid.com/wp-content/uploads/2018/05/PLAN_ESTUDIOS.jpg" 
                                waves />
                                <MDBCardBody>
                                <MDBCardTitle>VER PLANES</MDBCardTitle>
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