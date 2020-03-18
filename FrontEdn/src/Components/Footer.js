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
                          <Foto2 src="https://lh3.googleusercontent.com/proxy/scT82tdl4E4uhusLV7LgOXDn1wjdhdvI6zhuaHLwvBPjKiSNXDUP0iC1nNwoLiN3OOTTz1ZWFC3tZVrhwjMF42Wbi6KucEH3Q1n1cs5mV6n90a8" />
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