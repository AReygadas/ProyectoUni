import React from 'react'
import SinUp from '../Components/SingUp'
import Log from '../Components/LogIn'
import { MDBRow } from 'mdbreact'
import {Fondo} from '../Components/styles'
class Home extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Fondo>
                  
                        <Log />
                     
                </Fondo>
            </React.Fragment>
        )
    }
}
export default Home