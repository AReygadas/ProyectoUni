import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Pie, Foto} from '../Styles/styles'
import Reactlogo from '../images/react.png'
import Mdblogo from '../images/mdb.png'
import MySQLlogo from '../images/mysql.png'
import Nodelogo from '../images/node.png'

const FooterPage = () => {
  return (
     <Pie>
        <MDBFooter  className="font-small pt-4 mt-4">
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
                            <a href="http://www.utags.edu.mx/">Universidad Tecnologica de Aguascalientes</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="http://sito.utags.edu.mx/">Sito UTAGS</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="http://cursos.utags.edu.mx/">Cursos UTAGS</a>
                        </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
             </MDBContainer>
      
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a> MDBootstrap.com - UTAGS</a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </Pie> 

  );
}

export default FooterPage;