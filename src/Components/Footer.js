import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Pie,Foto2, Foto} from '../Styles/styles'
import Reactlogo from '../images/react.png'
import Mdblogo from '../images/mdb.png'
import MySQLlogo from '../images/mysql.png'
import Nodelogo from '../images/node.png'


const FooterPage = () => {
  return (
     <Pie>
        <MDBFooter className="font-small">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Este sitio esta construido con</h5>
                        <p>
                            <a href='https://es.reactjs.org/'> <Foto src={Reactlogo} /> </a>
                            <a href='https://mdbootstrap.com/'> <Foto src={Mdblogo} /> </a>
                            <a href='https://www.mysql.com/'> <Foto src={MySQLlogo} /> </a>
                            <a href='https://nodejs.org/es/'> <Foto src={Nodelogo} /> </a>
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <h3 className="title">Sitios</h3>
                        <ul>
                        <li className="list-unstyled">
                            <Foto2 src="https://pngimage.net/wp-content/uploads/2018/06/logo-ut-nuevo-laredo-png-3.png" />
                            <a href="http://www.utags.edu.mx/">Universidad Tecnologica de Aguascalientes</a><br/><br/>
                        </li>
                        <li className="list-unstyled">
                          <Foto2 src="https://lh3.googleusercontent.com/proxy/BsjxfM9b6bCDE4wV5vOqX--RbAl2Ds9n0heQrpT-RncIC-Wa61Wi5pljRi_5jX7mawgH-24l28o7aiDJGQ-sGqGGLsk13wKSXbtf0a-LlHI8vRc" />
                            <a href="http://sito.utags.edu.mx/"> Sito UTAGS</a><br/><br/>
                        </li>
                        <li className="list-unstyled">
                          <Foto2 src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Moodle-logo.svg/1200px-Moodle-logo.svg.png" />
                            <a href="http://cursos.utags.edu.mx/">Cursos UTAGS</a>
                        </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
             </MDBContainer>
          </MDBFooter>
    </Pie> 

  );
}

export default FooterPage;