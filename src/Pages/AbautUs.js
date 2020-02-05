import React from 'react'
import {Box, Degradado, Foto, Ancort, Subtitulo, Parrafo} from '../Styles/AboutStyle'
import { MDBRow, MDBCol } from 'mdbreact'

const Default_img = 'https://cnet1.cbsistatic.com/img/L8yYTX-nUlvvMuZeNZzyDeR05K8=/2018/02/12/c3203441-b701-40f2-b5f1-a91abd0f32e1/xvzxcvcx.jpg'
class Acerca extends React.Component{

    render(){
        return(
            <React.Fragment>
                <MDBRow>
                <div>
                        <Box>
                            <Degradado />
                            <Foto src={Default_img} />
                            <Ancort>Nombre</Ancort>
                            <Subtitulo>Desarrollador</Subtitulo>
                            <Parrafo>Programador backend encargado de la funcionalidad de la aplicacion</Parrafo> 
                        </Box>
                   </div>
                   <div>
                        <Box>
                            <Degradado />
                            <Foto src={Default_img} />
                            <Ancort>Nombre</Ancort>
                            <Subtitulo>Desarrollador</Subtitulo>
                            <Parrafo>Programador backend encargado de la funcionalidad de la aplicacion</Parrafo> 
                        </Box>
                   </div>
                   <div>
                        <Box>
                            <Degradado />
                            <Foto src={Default_img} />
                            <Ancort>Nombre</Ancort>
                            <Subtitulo>Desarrollador</Subtitulo>
                            <Parrafo>Programador backend encargado de la funcionalidad de la aplicacion</Parrafo> 
                        </Box>
                   </div>
                   </MDBRow>
                   <MDBRow center>
                   <div>
                        <Box>
                            <Degradado />
                            <Foto src={Default_img} />
                            <Ancort>Nombre</Ancort>
                            <Subtitulo>Desarrollador</Subtitulo>
                            <Parrafo>Programador backend encargado de la funcionalidad de la aplicacion</Parrafo> 
                        </Box>
                   </div>
                   <div>
                        <Box>
                            <Degradado />
                            <Foto src={Default_img} />
                            <Ancort>Nombre</Ancort>
                            <Subtitulo>Desarrollador</Subtitulo>
                            <Parrafo>Programador backend encargado de la funcionalidad de la aplicacion</Parrafo> 
                        </Box>
                   </div>


                </MDBRow>
            
            </React.Fragment>
        )
    }
}
export default Acerca