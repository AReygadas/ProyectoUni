import React from 'react'
import {Fondo} from '../Styles/styles'
import InicioSesion from '../Components/LogIn'
import { MDBRow, MDBContainer } from 'mdbreact'
import Acercade from './AbautUs'

class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                
                <Fondo>
                    <MDBContainer>
                    <MDBRow center>
                        <div id="three-container">           
                      </div></MDBRow>
                     <MDBRow center>
                      <InicioSesion />
                  </MDBRow>
                  <MDBRow center>
                      <Acercade />
                  </MDBRow>
                  </MDBContainer>
                </Fondo>     
      
 
            </React.Fragment>
        )
    }
  
}
export default Home