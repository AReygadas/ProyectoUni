import React from 'react'
import {Fondo404} from '../Styles/styles'
import {MDBBtn} from 'mdbreact'

export default class Page404 extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Fondo404>
                <MDBBtn outline color="success">Regresar</MDBBtn>
                </Fondo404>
            </React.Fragment>
        )
    }

}