import React from 'react'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

export default class BuscarGrupo extends React.Component {

    render(){
        return(
            <React.Fragment>
                <MDBCol md="12">
                    <MDBFormInline className="md-form mr-auto mb-4">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                         Buscar Grupo
                        </MDBBtn>
                    </MDBFormInline>
                </MDBCol>
            </React.Fragment>
        )
    }
}