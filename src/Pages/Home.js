import React from 'react'
import {Fondo} from '../Styles/styles'
import InicioSesion from '../Components/LogIn'

class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Fondo>
                      <InicioSesion />  
                </Fondo>                  
            </React.Fragment>
        )
    }
}
export default Home