import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, 
    MDBInput, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
state = {
  modal: false
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

render() {
  return (
    <MDBContainer>
      <MDBBtn onClick={this.toggle} outline color="warning">Generar Tiket</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader style={{color:'black'}}toggle={this.toggle}>Calificar Ser</MDBModalHeader>
        <MDBModalBody>
             <MDBInput type="number" />
             <input 
                type="date"
                placeholder='fecha'
                className="form-control"
                id="fechaTiket"
            />
             <input 
                type="text"
                placeholder='Descxripcion'
                className="form-control"
                id="desc"
            />
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle}>Cerrar</MDBBtn>
          <MDBBtn color="primary">Guardar</MDBBtn>
        </MDBModalFooter>
        
        
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalPage;