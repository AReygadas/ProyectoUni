import React from 'react'
import {Fondo} from '../Styles/styles'
import InicioSesion from '../Components/LogIn'
import { MDBRow, MDBContainer } from 'mdbreact'


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
                  </MDBContainer>
                </Fondo>     
      
 
            </React.Fragment>
        )
    }
  
}
export default Home